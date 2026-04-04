import { prisma } from "../db";
import { runAutomatedValidation } from "./validation";
import { processAutomatedPayout } from "./payout";

export type EventType = "HEAVY_RAIN" | "HEATWAVE" | "PLATFORM_OUTAGE" | "FLOOD_CONDITIONS";

export type WeatherEvent = {
  type: EventType;
  location: string;
  severityValue: number; // rainfall in mm/hr, or temp in °C
  timestamp: Date;
  zoneRadius: number; // km
  zoneLat: number;
  zoneLon: number;
};

/**
 * Trigger Thresholds (Parametric Logic)
 */
export function isThresholdTriggered(type: EventType, value: number, bucket: string): boolean {
  switch (type) {
    case "HEAVY_RAIN": return value >= 20; // 20mm/hr threshold
    case "HEATWAVE": return value >= 40;   // 40°C threshold (Phase 2)
    case "PLATFORM_OUTAGE": return value === 1; // 1 for Outage (Phase 2)
    case "FLOOD_CONDITIONS": return value >= 80; // 80mm cluster (Phase 2)
    default: return false;
  }
}

/**
 * Main Trigger Engine - Process an Incoming Weather/API Event.
 */
export async function processParametricEvent(event: WeatherEvent) {
  console.log(`[TRIGGER_ENGINE] Processing ${event.type} in ${event.location}...`);

  // 0. Log the Event in the Global Events table
  await (prisma as any).event.create({
    data: {
      type: event.type,
      location: event.location,
      severity: event.severityValue,
      status: "active"
    }
  });

  // 1. Find all active policies in the affected geography tier.
  // In a real scenario, we'd use a Geo-query (PostGIS) to find users in the radius.
  // For SQLite, we'll filter by city/cluster.
  const activePolicies = await prisma.policy.findMany({
    where: {
      status: "active",
      user: {
        geoCluster: event.location, // e.g. "Mumbai_Andheri"
      }
    },
    include: { user: true }
  });

  console.log(`[TRIGGER_ENGINE] Found ${activePolicies.length} active policies in ${event.location}.`);

  const results = [];

  for (const policy of activePolicies) {
    // 2. Build Event Details for Validation
    // Mocking historical GPS history - in real usage, would use a Redis store or recent DB pings.
    const mockGpsHistory = [
      { lat: event.zoneLat - 0.001, lon: event.zoneLon - 0.001, timestamp: Date.now() - 3600000 },
      { lat: event.zoneLat, lon: event.zoneLon, timestamp: Date.now() - 1000 }
    ];

    const validationPayload = {
      gpsHistory: mockGpsHistory,
      zoneLat: event.zoneLat,
      zoneLon: event.zoneLon,
      zoneRadius: event.zoneRadius,
      eventStart: new Date(event.timestamp.getTime() - 2 * 3600 * 1000).toISOString(),
      eventEnd: event.timestamp.toISOString(),
    };

    // 3. Run Automated Validation Engine
    const decision = await runAutomatedValidation(policy.userId, `EVT_${Date.now()}`, validationPayload);

    if (decision.status === "AUTO_APPROVED") {
      // 4. Calculate Payout Amount based on Policy Daily Cap
      const payoutAmount = Math.min(policy.dailyPayoutCap, policy.weeklyPayoutLimit);

      // 5. Execute Payout Engine
      const payoutResult = await processAutomatedPayout(policy.userId, payoutAmount, event.type);
      
      results.push({
        userId: policy.userId,
        status: "PAID",
        amount: payoutAmount,
        payoutId: payoutResult.payoutId
      });
    } else {
      results.push({
        userId: policy.userId,
        status: decision.status,
        reason: decision.reason
      });
    }
  }

  return { 
    eventProcessed: event.type, 
    totalImpacted: activePolicies.length,
    payoutsExecuted: results.filter(r => r.status === "PAID").length,
    details: results
  };
}

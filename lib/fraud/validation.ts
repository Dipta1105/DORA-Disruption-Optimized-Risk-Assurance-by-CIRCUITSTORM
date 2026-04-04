import { prisma } from "../db";

// Haversine formula for distance
export function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // km
  const toRad = (v: number) => (v * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export type GPSPoint = { lat: number; lon: number; timestamp: number };

// 1. Speed Plausibility Check
export function validateSpeed(history: GPSPoint[]) {
  if (history.length < 2) return { valid: true };

  for (let i = 1; i < history.length; i++) {
    const prev = history[i - 1];
    const curr = history[i];
    const dist = haversineDistance(prev.lat, prev.lon, curr.lat, curr.lon);
    const timeDiffHrs = (curr.timestamp - prev.timestamp) / 1000 / 3600;

    if (timeDiffHrs <= 0) continue;
    const speed = dist / timeDiffHrs;

    if (speed > 120) return { valid: false, severity: "REJECTED", reason: `Speed ${speed.toFixed(1)} km/h impossible` };
    if (speed > 80) return { valid: false, severity: "PENDING_REVIEW", reason: `Speed ${speed.toFixed(1)} km/h suspicious` };
  }
  return { valid: true };
}

// 2. Zone Validation
export function validateZone(userLat: number, userLon: number, zoneLat: number, zoneLon: number, radiusKm: number) {
  const dist = haversineDistance(userLat, userLon, zoneLat, zoneLon);
  if (dist > radiusKm) return { valid: false, reason: `Outside zone. Distance: ${dist.toFixed(1)} km` };
  return { valid: true };
}

// 3. Activity Validation
export async function validateActivity(userId: string, startTime: Date, endTime: Date) {
  const orderCount = await prisma.order.count({
    where: {
      userId,
      completedAt: { gte: startTime, lte: endTime },
    },
  });

  if (orderCount > 0) return { valid: false, reason: `User completed ${orderCount} orders during disruption` };
  return { valid: true };
}

// 4. Temporal Consistency validation
export function validateTiming(disruptionEndTime: Date, claimTime: Date) {
  const hrs = (claimTime.getTime() - disruptionEndTime.getTime()) / (1000 * 3600);
  if (hrs <= 2) return { valid: true, severity: "AUTO_APPROVED" };
  if (hrs <= 24) return { valid: false, severity: "PENDING_REVIEW", reason: "Claim filed late (2-24h)" };
  return { valid: false, severity: "REJECTED", reason: `Claim filed ${hrs.toFixed(1)}h late (>24h)` };
}

// 5. The Master Validation Function
export async function runFraudEngine(userId: string, eventId: string, payload: any) {
  const { gpsHistory, zoneLat, zoneLon, zoneRadius, eventStart, eventEnd, claimTime } = payload;

  // Layer 1: Speed
  const speedCheck = validateSpeed(gpsHistory);
  if (!speedCheck.valid && speedCheck.severity === "REJECTED") return { status: "REJECTED", reason: speedCheck.reason };

  // Layer 2: Duplicates
  const duplicate = await prisma.claim.findUnique({ where: { userId_eventId: { userId, eventId } } });
  if (duplicate) return { status: "REJECTED", reason: "Duplicate claim for this event" };

  // Layer 3: Zone
  if (gpsHistory.length > 0) {
    const latest = gpsHistory[gpsHistory.length - 1];
    const zoneCheck = validateZone(latest.lat, latest.lon, zoneLat, zoneLon, zoneRadius);
    if (!zoneCheck.valid) return { status: "REJECTED", reason: zoneCheck.reason };
  }

  // Layer 4: Activity
  const activityCheck = await validateActivity(userId, new Date(eventStart), new Date(eventEnd));
  if (!activityCheck.valid) return { status: "REJECTED", reason: activityCheck.reason };

  // Layer 5: Temporal
  const timingCheck = validateTiming(new Date(eventEnd), new Date(claimTime));
  if (!timingCheck.valid && timingCheck.severity === "REJECTED") return { status: "REJECTED", reason: timingCheck.reason };

  // If we had PENDING flags
  if (!speedCheck.valid && speedCheck.severity === "PENDING_REVIEW") return { status: "PENDING_REVIEW", reason: speedCheck.reason };
  if (!timingCheck.valid && timingCheck.severity === "PENDING_REVIEW") return { status: "PENDING_REVIEW", reason: timingCheck.reason };

  return { status: "AUTO_APPROVED", reason: "All validations passed" };
}

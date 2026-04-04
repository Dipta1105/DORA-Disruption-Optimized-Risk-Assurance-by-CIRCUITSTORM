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

/**
 * 1. Speed Plausibility Check (Fraud Prevention)
 */
export function validateSpeed(history: GPSPoint[]) {
  if (history.length < 2) return { valid: true };

  for (let i = 1; i < history.length; i++) {
    const prev = history[i - 1];
    const curr = history[i];
    const dist = haversineDistance(prev.lat, prev.lon, curr.lat, curr.lon);
    const timeDiffHrs = (curr.timestamp - prev.timestamp) / 1000 / 3600;

    if (timeDiffHrs <= 0) continue;
    const speed = dist / timeDiffHrs;

    if (speed > 120) return { valid: false, severity: "REJECTED", reason: `Speed ${speed.toFixed(1)} km/h is impossible (GPS Spoofing?)` };
    if (speed > 80) return { valid: false, severity: "PENDING_REVIEW", reason: `Speed ${speed.toFixed(1)} km/h is highly suspicious` };
  }
  return { valid: true };
}

/**
 * 2. Mandatory Condition 1: Geographic Zone (GPS verified)
 */
export function validateZone(userLat: number, userLon: number, zoneLat: number, zoneLon: number, radiusKm: number) {
  const dist = haversineDistance(userLat, userLon, zoneLat, zoneLon);
  if (dist > radiusKm) return { valid: false, reason: `Worker outside affected zone. Distance: ${dist.toFixed(1)} km` };
  return { valid: true };
}

/**
 * 3. Mandatory Condition 2: Activity Drop vs Baseline
 * In a real scenario, this would compare against historical daily averages.
 */
export async function validateActivityDrop(userId: string, startTime: Date, endTime: Date) {
  const orderCount = await prisma.order.count({
    where: {
      userId,
      completedAt: { gte: startTime, lte: endTime },
    },
  });

  // If worker completed orders, then there's no income loss for this event period.
  if (orderCount > 0) return { valid: false, reason: `No activity drop detected: User completed ${orderCount} orders during event.` };
  return { valid: true };
}

/**
 * 4. Mandatory Condition 3: One Payout Per Day
 */
export async function validateDailyLimit(userId: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const existingClaim = await prisma.claim.findFirst({
    where: {
      userId,
      status: "auto_approved",
      createdAt: { gte: today }
    }
  });

  if (existingClaim) return { valid: false, reason: "Daily payout limit reached (1/day)." };
  return { valid: true };
}

/**
 * 5. Master Engine (Automated Validation)
 */
export async function runAutomatedValidation(userId: string, eventId: string, eventDetails: any) {
  const { gpsHistory, zoneLat, zoneLon, zoneRadius, eventStart, eventEnd } = eventDetails;

  // Layer 1: Fraud (Speed Checks)
  const speedCheck = validateSpeed(gpsHistory);
  if (!speedCheck.valid && speedCheck.severity === "REJECTED") {
    return { status: "REJECTED", reason: speedCheck.reason };
  }

  // Layer 2: Duplicates
  const duplicate = await prisma.claim.findUnique({ where: { userId_eventId: { userId, eventId } } });
  if (duplicate) return { status: "REJECTED", reason: "Duplicate trigger for this event" };

  // Condition 1: Zone Check
  if (gpsHistory.length > 0) {
    const latest = gpsHistory[gpsHistory.length - 1];
    const zoneCheck = validateZone(latest.lat, latest.lon, zoneLat, zoneLon, zoneRadius);
    if (!zoneCheck.valid) return { status: "REJECTED", reason: zoneCheck.reason };
  }

  // Condition 2: Activity Drop Check
  const activityCheck = await validateActivityDrop(userId, new Date(eventStart), new Date(eventEnd));
  if (!activityCheck.valid) return { status: "REJECTED", reason: activityCheck.reason };

  // Condition 3: Policy Active Check
  const policy = await prisma.policy.findFirst({
    where: { userId, status: "active" }
  });
  if (!policy) return { status: "REJECTED", reason: "No active policy at time of event" };

  // Condition 4: One Payout Per Day
  const dailyLimitCheck = await validateDailyLimit(userId);
  if (!dailyLimitCheck.valid) return { status: "REJECTED", reason: dailyLimitCheck.reason };

  // Final check for suspicious activity
  if (!speedCheck.valid && speedCheck.severity === "PENDING_REVIEW") {
    return { status: "PENDING_REVIEW", reason: speedCheck.reason };
  }

  return { status: "AUTO_APPROVED", reason: "AI Validation Passed: Parametric trigger confirmed." };
}

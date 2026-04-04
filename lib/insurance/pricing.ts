/**
 * Pricing Engine - Dynamic Premium Calculator
 * Formula: Premium = Base Price * Risk * Season * Pool Factor
 */

export type PricingParams = {
  basePrice: number;
  riskMultiplier: number; // 1.0 - 1.8
  seasonMultiplier: number; // 0.9 - 1.2
  poolAdjustment: number; // 0.9 - 1.15
};

export const DEFAULT_PRICING: PricingParams = {
  basePrice: 25,
  riskMultiplier: 1.0,
  seasonMultiplier: 1.0,
  poolAdjustment: 1.0,
};

/**
 * Get Historical Safety Factor (AI integration example)
 * Zones historically safe from water-logging get a fixed discount.
 */
export function getHistoricalSafetyFactor(zone: string): number {
  const safeZones = ["Mumbai_Andheri", "Mumbai_Bandra", "Delhi_Saket"];
  if (safeZones.includes(zone)) return -5; // ₹5 safe-zone discount
  return 0;
}

export function calculateDynamicPremium(params: Partial<PricingParams> & { zone?: string } = {}) {
  const { basePrice, riskMultiplier, seasonMultiplier, poolAdjustment, zone } = {
    ...DEFAULT_PRICING,
    ...params,
  };

  const safetyDiscount = zone ? getHistoricalSafetyFactor(zone) : 0;
  const premium = (basePrice * riskMultiplier * seasonMultiplier * poolAdjustment) + safetyDiscount;
  
  return Math.max(20, Math.round(premium * 100) / 100); // Floor at ₹20/week
}

/**
 * Get Season Multiplier based on current date
 */
export function getSeasonMultiplier(): number {
  const month = new Date().getMonth(); // 0 is January
  
  // Monsoon (June - Sept): +20%
  if (month >= 5 && month <= 8) return 1.2;
  
  // Summer (April - May): +15%
  if (month >= 3 && month <= 4) return 1.15;
  
  // Winter (Nov - Jan): -10%
  if (month === 10 || month === 11 || month === 0) return 0.9;
  
  return 1.0; // Normal
}

/**
 * Get Risk Multiplier based on Geographic Tier
 */
export function getRiskMultiplier(tier: string): number {
  switch (tier) {
    case "T1-A": return 1.0; // Metro Low
    case "T1-B": return 1.2; // Metro Medium
    case "T2-B": return 1.4; // Semi-urban Medium
    case "T3-C": return 1.6; // Tier 3 Medium-High
    case "T4-C": return 1.8; // Rural High
    default: return 1.1;
  }
}

/**
 * Get Pool Adjustment Factor (Dynamic based on Loss Ratio)
 * In actual implementation, this would query the DB for the current pool status.
 */
export function getPoolAdjustment(currentLossRatio: number): number {
  if (currentLossRatio > 0.9) return 1.15; // High loss, increase premium
  if (currentLossRatio < 0.5) return 0.9; // Low loss, decrease premium
  return 1.0;
}

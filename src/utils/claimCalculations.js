/**
 * INSURANCE (Insurance) — Claim Calculation Engine
 * 
 * Logic for loss-of-income and final payout determination based on 
 * disruption earnings, coverage limits, and active caps.
 */

/**
 * Calculates the full breakdown of a claim based on disruption metrics.
 * 
 * @param {Object} params - The calculation parameters.
 * @param {number} params.predictedEarnings - Expected income without disruption.
 * @param {number} params.actualEarnings - Realized income during disruption.
 * @param {number} params.coveragePercent - Coverage multiplier (e.g. 0.95 for 95%).
 * @param {number} params.dailyCapRemaining - Active daily payout limit remaining.
 * @param {number} params.weeklyLimitRemaining - Active weekly payout limit remaining.
 * @returns {Object} Full claim breakdown and calculation trace.
 */
export const getClaimBreakdown = ({
  predictedEarnings = 0,
  actualEarnings = 0,
  coveragePercent = 1.0,
  dailyCapRemaining = Infinity,
  weeklyLimitRemaining = Infinity
}) => {
  // 1. Calculate the loss gap
  const lossAmount = Math.max(0, predictedEarnings - actualEarnings);

  // 2. Apply the coverage percentage (Gross Payout)
  const grossPayout = lossAmount * coveragePercent;

  // 3. Determine the final claim amount based on active limits
  const finalClaimAmount = Math.min(
    grossPayout, 
    dailyCapRemaining, 
    weeklyLimitRemaining
  );

  // 4. Identify the limiting factor (for transparency & auditing)
  let limitingFactor = 'None (Full Coverage Applied)';
  if (finalClaimAmount === dailyCapRemaining && dailyCapRemaining < grossPayout) {
    limitingFactor = 'Daily Cap Reached';
  } else if (finalClaimAmount === weeklyLimitRemaining && weeklyLimitRemaining < grossPayout) {
    limitingFactor = 'Weekly Limit Reached';
  } else if (finalClaimAmount < grossPayout) {
    // Edge case if both cap and weekly are equal and less than gross
    limitingFactor = 'Composite Limit Restriction';
  }

  // Return the full analytical trace
  return {
    predictedEarnings,
    actualEarnings,
    lossAmount,
    coveragePercent,
    grossPayout,
    dailyCapRemaining,
    weeklyLimitRemaining,
    finalClaimAmount,
    limitingFactor
  };
};

/**
 * Formats values for display in the insurance dashboard.
 */
export const formatInsuranceValue = (value) => {
  if (value === Infinity) return 'Uncapped';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
};

/**
 * Converts a percentage value to a display string.
 */
export const formatPercent = (percent) => {
  return `${(percent * 100).toFixed(0)}%`;
};

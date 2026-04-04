/**
 * INSURANCE (Insurance) — Claim Calculation Helpers
 * 
 * Logic for determining payouts based on disruption factors, 
 * policy coverage, and severity metrics.
 */

/**
 * Calculates the recommended payout for a disruption event.
 * @param {number} actualLoss - The reported monetary loss.
 * @param {number} coverageLimit - The maximum policy limit.
 * @param {number} deductible - The client's policy deductible.
 * @param {string} severity - 'Low', 'Medium', 'High', 'Extreme'.
 * @returns {number} The calculated payout amount.
 */
export const calculatePayout = (actualLoss, coverageLimit, deductible, severity = 'Medium') => {
  const multipliers = {
    Low: 0.85,    // 85% coverage for minor disruptions
    Medium: 0.92, // 92% coverage for moderate disruptions
    High: 0.98,   // 98% coverage for significant disruptions
    Extreme: 1.0, // 100% coverage for catasrophic events
  };

  const multiplier = multipliers[severity] || 0.92;
  const applicableLoss = Math.max(0, actualLoss - deductible);
  
  return Math.min(applicableLoss * multiplier, coverageLimit);
};

/**
 * Formats a currency value for display in the app.
 * @param {number} amount - The numeric amount.
 * @returns {string} Formatted currency string.
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Calculates risk score based on probability and impact factors.
 * @param {number} probability - 1-100 scale.
 * @param {number} impact - 1-100 scale.
 * @returns {number} 1-100 risk score.
 */
export const calculateRiskScore = (probability, impact) => {
  // Simplified risk matrix calculation
  const baseScore = (probability * 0.4) + (impact * 0.6);
  return Math.round(baseScore);
};

/**
 * Categorizes risk level based on the score.
 */
export const getRiskLevel = (score) => {
  if (score >= 80) return 'Extreme';
  if (score >= 60) return 'High';
  if (score >= 30) return 'Medium';
  return 'Low';
};

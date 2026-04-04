import { baseService } from './baseService';

/**
 * INSURANCE (Insurance) — Claim Service
 */
export const claimService = {
  // Fetch full claims list
  async getClaims() {
    return await baseService.get('/claims.json');
  },

  // Fetch single claim details
  async getClaimById(id) {
    // For MVP, we return a single claim-details mock file
    // Ideally we'd filter or fetch a specific one
    return await baseService.get('/claim-details.json');
  },

  // Submit a new claim request
  async submitClaim(claimData) {
    return await baseService.post('/claims', claimData);
  },

  // Fraud Review Queue
  async getFraudReview() {
    return await baseService.get('/fraud-review.json');
  }
};

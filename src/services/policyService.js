import { baseService } from './baseService';

/**
 * INSURANCE (DORA) — Policy & Plans Service
 */
export const policyService = {
  // GET /insurance/plans
  async getPlans() {
    return await baseService.get('/plans.json');
  },

  // POST /insurance/policies/create
  async createPolicy(policyData) {
    return await baseService.post('/policies/create', policyData);
  },

  // GET /insurance/policy/current
  async getCurrentPolicy() {
    return await baseService.get('/current-policy.json');
  },

  // GET /insurance/policies
  async getPolicies() {
    return await baseService.get('/policies.json');
  }
};

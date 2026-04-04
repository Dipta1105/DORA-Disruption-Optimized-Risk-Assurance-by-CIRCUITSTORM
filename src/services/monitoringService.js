import { baseService } from './baseService';

/**
 * INSURANCE (Insurance) — Monitoring & Admin Service
 */
export const monitoringService = {
  // Global node health monitoring
  async getNodeHealth() {
    // Reuse admin dashboard stats
    return await baseService.get('/admin-dashboard.json');
  },

  // Configuration for automated claim triggers
  async getTriggerRules() {
    return await baseService.get('/triggers.json');
  },

  // Manually update a trigger rule logic
  async updateTriggerRule(ruleId, ruleLogic) {
    return await baseService.post(`/admin/triggers/update/${ruleId}`, ruleLogic);
  },

  // Historical disruption events log
  async getDisruptionLog() {
    return await baseService.get('/claims.json');
  }
};

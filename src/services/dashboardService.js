import { baseService } from './baseService';

/**
 * INSURANCE (DORA) — Dashboard Service
 */
export const dashboardService = {
  // GET /insurance/dashboard/worker
  async getWorkerDashboard() {
    return await baseService.get('/worker-dashboard.json');
  },

  // GET /insurance/dashboard/admin
  async getAdminDashboard() {
    return await baseService.get('/admin-dashboard.json');
  }
};

import { baseService } from './baseService';

/**
 * INSURANCE (Insurance) — Onboarding Service
 */
export const onboardingService = {
  // POST /insurance/onboarding/send-otp
  async sendOtp(phone) {
    return await baseService.post('/onboarding/send-otp', { phone });
  },

  // POST /insurance/onboarding/verify-otp
  async verifyOtp(otp) {
    return await baseService.post('/onboarding/verify-otp', { otp });
  },

  // POST /insurance/onboarding/register
  async register(clientData) {
    return await baseService.post('/onboarding/register', clientData);
  },

  // Check enrollment status
  async getEnrollmentStatus(clientId) {
    return await baseService.get(`/enrollment/${clientId}`);
  }
};

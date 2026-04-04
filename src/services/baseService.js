/**
 * INSURANCE (Insurance) — Base API Service
 * 
 * Handles core fetch logic and simulated network latency for the platform.
 */

const BASE_URL = '/mock'; // Pointing to local mock JSON files

// Helper to simulate network latency (500ms - 1500ms)
export const delay = (ms = Math.floor(Math.random() * 1000) + 500) => 
  new Promise(resolve => setTimeout(resolve, ms));

export const baseService = {
  async get(endpoint) {
    try {
      await delay();
      const response = await fetch(`${BASE_URL}${endpoint}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error(`API GET error at ${endpoint}:`, error);
      return { error: true, message: error.message };
    }
  },

  async post(endpoint, body) {
    try {
      await delay();
      // For mock purposes, we just return the body with a success status
      console.log(`API MOCK POST at ${endpoint}:`, body);
      return { success: true, data: body };
    } catch (error) {
       console.error(`API POST error at ${endpoint}:`, error);
       return { error: true, message: error.message };
    }
  }
};

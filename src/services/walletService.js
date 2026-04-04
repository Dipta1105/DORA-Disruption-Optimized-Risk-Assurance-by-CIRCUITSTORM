import { baseService } from './baseService';

/**
 * INSURANCE (Insurance) — Wallet Service
 */
export const walletService = {
  // Global liquidity and balance pool data
  async getWalletOverview() {
    return await baseService.get('/wallet.json');
  },

  // Full transaction ledger history
  async getTransactions() {
    return await baseService.get('/transactions.json');
  },

  // Authorize a pending payout node
  async authorizePayout(txId) {
    return await baseService.post(`/payouts/authorize/${txId}`, { status: 'Authorized' });
  }
};

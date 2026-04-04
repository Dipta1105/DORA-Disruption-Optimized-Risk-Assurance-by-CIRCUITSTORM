import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import Pages
import DashboardPage from '../pages/dashboard/DashboardPage';
import InsightsPage from '../pages/dashboard/InsightsPage';
import SettingsPage from '../pages/dashboard/SettingsPage';
import MonitoringPage from '../pages/monitoring/MonitoringPage';
import ClaimsPage from '../pages/claims/ClaimsPage';
import ClaimDetailsPage from '../pages/claims/ClaimDetailsPage';
import PolicyPage from '../pages/policy/PolicyPage';
import PlansPage from '../pages/plans/PlansPage';
import WalletPage from '../pages/wallet/WalletPage';
import OnboardingPage from '../pages/onboarding/OnboardingPage';
import AlertsPage from '../pages/alerts/AlertsPage';

// Admin Pages
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminTriggers from '../pages/admin/AdminTriggers';
import FraudPage from '../pages/fraud/FraudPage'; // Reuse fraud page for admin fraud review

const AppRouter = () => {
  return (
    <Routes>
      {/* Root redirect */}
      <Route path="/" element={<Navigate to="/insurance/dashboard" replace />} />
      <Route path="/insurance" element={<Navigate to="/insurance/dashboard" replace />} />

      {/* Insurance Routes */}
      <Route path="/insurance/dashboard" element={<DashboardPage />} />
      <Route path="/insurance/onboarding" element={<OnboardingPage />} />
      <Route path="/insurance/plans" element={<PlansPage />} />
      <Route path="/insurance/policy" element={<PolicyPage />} />
      <Route path="/insurance/claims" element={<ClaimsPage />} />
      <Route path="/insurance/claims/:id" element={<ClaimDetailsPage />} />
      <Route path="/insurance/wallet" element={<WalletPage />} />
      <Route path="/insurance/alerts" element={<AlertsPage />} />
      
      {/* Admin Module */}
      <Route path="/insurance/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/insurance/admin/triggers" element={<AdminTriggers />} />
      <Route path="/insurance/admin/fraud-review" element={<FraudPage />} />

      {/* Other Pages */}
      <Route path="/insurance/insights" element={<InsightsPage />} />
      <Route path="/insurance/settings" element={<SettingsPage />} />
      <Route path="/insurance/monitoring" element={<MonitoringPage />} />
      
      {/* Fallback 404 Route */}
      <Route path="*" element={
        <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in text-center">
          <h1 className="text-9xl font-black text-slate-100 italic select-none">404</h1>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-md w-full relative -mt-16">
             <h3 className="text-2xl font-bold text-slate-800 mb-2">Resource Not Found</h3>
             <p className="text-slate-500 text-sm leading-relaxed mb-8 lowercase italic font-medium">The disruption vector you are searching for does not seem to exist within our current simulation.</p>
             <button onClick={() => window.location.href = '/insurance/dashboard'} className="px-4 py-2 bg-primary-600 text-white rounded-lg text-xs font-black uppercase tracking-widest hover:bg-primary-700 transition-all shadow-md shadow-primary-200 w-full font-bold">Return to Dashboard</button>
          </div>
        </div>
      } />
    </Routes>
  );
};

export default AppRouter;

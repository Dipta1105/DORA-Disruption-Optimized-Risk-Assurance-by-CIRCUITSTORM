"use client";

import { useEffect, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ShieldAlert, AlertTriangle, CloudLightning, BadgePercent, CheckCircle, XCircle, HandCoins } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);

  const fetchStats = async () => {
    const res = await fetch("/api/stats");
    const data = await res.json();
    setStats(data);
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  const simulateOrder = async () => {
    await fetch("/api/orders/simulate", { method: "POST" });
    fetchStats();
  };

  const simulateDisruption = async () => {
    await fetch("/api/trigger", { 
      method: "POST", 
      body: JSON.stringify({ eventType: "heavy_rainfall", lossAmount: 120 }) 
    });
    fetchStats();
  };

  if (!stats) return <div className="p-8 text-white">Loading Admin Dashboard...</div>;

  return (
    <div className="flex-1 min-h-screen bg-[#0B0F1A] text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8 pb-20">
        
        <header className="flex justify-between items-end border-b border-white/10 pb-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center text-glow-blue">
              <ShieldAlert className="mr-3 text-dora-blue" size={32} />
              DORA Control Center
            </h1>
            <p className="text-gray-400 mt-2">Hackathon Evaluation Dashboard & Simulation Controls</p>
          </div>
          
          <div className="flex space-x-4">
            <button onClick={simulateOrder} className="bg-dora-purple/20 hover:bg-dora-purple/40 text-dora-purple border border-dora-purple/50 px-4 py-2 rounded-lg text-sm font-bold flex items-center transition-colors">
              <HandCoins size={16} className="mr-2" /> Simulate Delivery Order (Deduct Premium)
            </button>
            <button onClick={simulateDisruption} className="bg-red-500/20 hover:bg-red-500/40 text-red-400 border border-red-500/50 px-4 py-2 rounded-lg text-sm font-bold flex items-center transition-colors">
              <CloudLightning size={16} className="mr-2" /> Simulate Heavy Rain Trigger
            </button>
          </div>
        </header>

        {/* Top KPI Cards */}
        <div className="grid grid-cols-4 gap-6">
          <GlassCard className="p-6">
            <span className="text-sm text-gray-400">Total Premium Collected</span>
            <div className="text-3xl font-bold text-dora-cyan mt-2">₹{stats.premiumCollected.toFixed(2)}</div>
          </GlassCard>
          <GlassCard className="p-6">
            <span className="text-sm text-gray-400">Total Payouts Disbursed</span>
            <div className="text-3xl font-bold text-red-400 mt-2">₹{stats.payoutsDisbursed.toFixed(2)}</div>
          </GlassCard>
          <GlassCard className="p-6" variant={parseFloat(stats.lossRatio) > 80 ? "glow-purple" : "default"}>
            <span className="text-sm text-gray-400">Loss Ratio</span>
            <div className="text-3xl font-bold mt-2 flex items-center">
              {stats.lossRatio}% <BadgePercent className="ml-2 opacity-50" size={24} />
            </div>
            <div className="text-xs text-gray-500 mt-2">Ideal: 60-70%</div>
          </GlassCard>
          <GlassCard className="p-6 border-l-4 border-l-red-500 bg-red-500/5">
            <span className="text-sm text-red-400 font-semibold">Fraud Flags Generated</span>
            <div className="text-3xl font-bold text-white mt-2">{stats.fraudFlags}</div>
            <div className="text-xs text-red-400/80 mt-2">Pending Manual Review</div>
          </GlassCard>
        </div>

        {/* User Stats & Logs */}
        <div className="grid grid-cols-3 gap-6">
          {/* Active Policy UI Map */}
          <GlassCard className="col-span-1 p-6">
            <h3 className="font-bold text-lg mb-4 text-dora-blue">Demo User Status</h3>
            {stats.activePolicy ? (
               <div className="space-y-4">
                 <div>
                   <span className="text-xs text-gray-500 block">Name</span>
                   <span className="text-lg">{stats.activePolicy.user.name} ({stats.activePolicy.user.platform})</span>
                 </div>
                 <div>
                   <span className="text-xs text-gray-500 block">Active Plan</span>
                   <span className="text-lg text-dora-purple font-semibold">{stats.activePolicy.planType}</span>
                 </div>
                 <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                   <span className="text-xs text-gray-400 block mb-2">Weekly Premium Cap Utilization</span>
                   <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                     <div 
                       className="h-full bg-dora-cyan" 
                       style={{ width: `${(stats.activePolicy.premiumDeductedThisWeek / stats.activePolicy.weeklyPremiumCap) * 100}%`}}
                     />
                   </div>
                   <div className="flex justify-between text-xs mt-2 font-mono">
                     <span className="text-dora-cyan">₹{stats.activePolicy.premiumDeductedThisWeek.toFixed(2)}</span>
                     <span className="text-gray-500">Max: ₹{stats.activePolicy.weeklyPremiumCap}</span>
                   </div>
                   {stats.activePolicy.premiumDeductedThisWeek >= stats.activePolicy.weeklyPremiumCap && (
                     <div className="mt-2 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded inline-block">
                       CAP REACHED - FREE PROTECTED ORDERS
                     </div>
                   )}
                 </div>
               </div>
            ) : (
               <div className="text-red-400">No active user. Please complete onboarding flow via Mobile UI.</div>
            )}
          </GlassCard>

          {/* Claims Ledger */}
          <GlassCard className="col-span-2 p-6 flex flex-col h-[400px]">
             <h3 className="font-bold text-lg mb-4 flex items-center justify-between">
                Live Claims Feed
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">{stats.totalClaims} Total</span>
             </h3>
             <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                {stats.claims.length === 0 && <div className="text-gray-500 text-sm mt-4 text-center">No claims simulated yet.</div>}
                
                {stats.claims.map((claim: any) => (
                  <div key={claim.id} className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {claim.status === "AUTO_APPROVED" && <CheckCircle className="text-green-400" size={20} />}
                      {claim.status === "REJECTED" && <XCircle className="text-red-400" size={20} />}
                      {claim.status === "PENDING_REVIEW" && <AlertTriangle className="text-yellow-400" size={20} />}
                      <div>
                        <div className="font-bold text-sm">{claim.eventId} <span className="font-normal text-gray-400 text-xs ml-2">{new Date(claim.createdAt).toLocaleTimeString()}</span></div>
                        <div className="text-xs text-gray-400 mt-1">Rule Engine: <span className="font-mono text-white">{claim.rejectionReason}</span></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">₹{claim.payoutAmount.toFixed(2)}</div>
                      <div className={`text-xs font-bold ${
                        claim.status === "AUTO_APPROVED" ? "text-green-400" 
                        : claim.status === "REJECTED" ? "text-red-400" : "text-yellow-400"
                      }`}>
                        {claim.status}
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { CloudRain, Thermometer, Radio, Waves, Activity, CheckCircle2, AlertCircle } from "lucide-react";

const DISRUPTIONS = [
  { id: "HEAVY_RAIN", name: "Heavy Rain", icon: CloudRain, severity: 45, color: "text-blue-400" },
  { id: "HEATWAVE", name: "Heatwave", icon: Thermometer, severity: 42, color: "text-orange-400" },
  { id: "PLATFORM_OUTAGE", name: "Platform Outage", icon: Radio, severity: 1, color: "text-red-400" },
  { id: "FLOOD_CONDITIONS", name: "Flood Conditions", icon: Waves, severity: 85, color: "text-cyan-400" }
];

export default function AdminSimulatePage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [logs, setLogs] = useState<any[]>([]);
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

  const triggerDisruption = async (type: string, severity: number) => {
    setLoading(type);
    try {
      const res = await fetch("/api/trigger", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          location: "Mumbai_Andheri",
          severity,
          lat: 19.1136,
          lon: 72.8697
        })
      });
      const result = await res.json();
      
      setLogs(prev => [
        { 
          id: Date.now(),
          type, 
          status: result.success ? "SUCCESS" : "FAILED",
          payouts: result.result?.payoutsExecuted || 0,
          timestamp: new Date().toLocaleTimeString()
        },
        ...prev
      ]);
      
      fetchStats();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="flex-1 flex flex-col p-8 max-w-4xl mx-auto space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-glow-blue">Admin Control Center</h1>
          <p className="text-gray-400 mt-2 italic">Phase 2: Automation & Protection Simulation</p>
        </div>
        <div className="flex space-x-4">
           <GlassCard className="py-2 px-4 flex items-center space-x-2" variant="glow-cyan">
              <Activity size={16} className="text-dora-cyan animate-pulse" />
              <span className="text-xs font-bold uppercase">System Active</span>
           </GlassCard>
        </div>
      </header>

      {/* Disruption Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DISRUPTIONS.map((d) => (
          <GlassCard key={d.id} className="p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-4">
                 <div className={`p-4 rounded-2xl bg-white/5 ${d.color} box-glow-blue group-hover:scale-110 transition-transform`}>
                    <d.icon size={28} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold">{d.name}</h3>
                    <p className="text-xs text-gray-500">Parametric Threshold Trigger</p>
                 </div>
              </div>
              <AnimatedButton 
                onClick={() => triggerDisruption(d.id, d.severity)}
                disabled={loading === d.id}
                className="px-4 py-2 text-sm !rounded-lg"
              >
                {loading === d.id ? "Processing..." : "Trigger"}
              </AnimatedButton>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Real-Time Stats */}
        <div className="lg:col-span-1 space-y-4">
           <h2 className="font-bold text-lg px-1">Live Metrics</h2>
           <GlassCard className="p-4" variant="glow-blue">
              <span className="text-xs text-gray-400 block mb-1">Total Payouts Disbursed</span>
              <span className="text-2xl font-bold text-dora-cyan">₹{stats?.payoutsDisbursed?.toLocaleString() || "0"}</span>
           </GlassCard>
           <GlassCard className="p-4" variant="glow-purple">
              <span className="text-xs text-gray-400 block mb-1">Loss Ratio</span>
              <span className="text-2xl font-bold text-dora-purple">{stats?.lossRatio || "0"}%</span>
           </GlassCard>
        </div>

        {/* Live Simulation Logs */}
        <div className="lg:col-span-2 space-y-4">
           <h2 className="font-bold text-lg px-1">Simulation Logs</h2>
           <div className="space-y-3 max-h-[350px] overflow-y-auto pr-2 hide-scrollbar">
              {logs.length === 0 && (
                <div className="text-gray-600 italic text-sm text-center py-8 bg-white/5 rounded-2xl border border-dashed border-white/10">
                  Ready to simulate. No triggers processed in this session.
                </div>
              )}
              {logs.map((log) => (
                <div key={log.id} className="flex items-center justify-between p-4 glass-panel border-white/5 animate-in slide-in-from-right-4">
                   <div className="flex items-center space-x-3">
                      {log.status === "SUCCESS" ? <CheckCircle2 className="text-green-400" size={18} /> : <AlertCircle className="text-red-400" size={18} />}
                      <div>
                        <span className="font-bold text-sm">{log.type}</span>
                        <span className="text-[10px] text-gray-500 block">{log.timestamp}</span>
                      </div>
                   </div>
                   <div className="text-right">
                      <span className={`text-xs font-bold ${log.status === "SUCCESS" ? "text-green-400" : "text-red-400"}`}>
                        {log.status}
                      </span>
                      <span className="text-[10px] text-gray-500 block">{log.payouts} Payouts Executed</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}

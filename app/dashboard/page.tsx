"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Shield, Zap, CloudLightning, ArrowUpRight, ArrowDownRight, Wallet, Radio, Thermometer, LogOut } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import { useAuth } from "@/lib/contexts/AuthContext";

const data = [
  { day: "Mon", earnings: 400 },
  { day: "Tue", earnings: 300 },
  { day: "Wed", earnings: 550 },
  { day: "Thu", earnings: 450 },
  { day: "Fri", earnings: 700 },
  { day: "Sat", earnings: 600 },
  { day: "Sun", earnings: 800 },
];

export default function DashboardPage() {
  const { logout, user } = useAuth();
  const [stats, setStats] = useState<any>(null);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/stats");
      const json = await res.json();
      setStats(json);
    } catch(e) {}
  };

  useEffect(() => {
    fetchStats();
    const intv = setInterval(fetchStats, 3000);
    return () => clearInterval(intv);
  }, []);

  const balance = stats?.activePolicy?.user?.walletBalance || 0;
  const plan = stats?.activePolicy?.planType || "No Plan";
  const payouts = stats?.walletTransactions?.filter((t: any) => t.type === 'payout') || [];

  return (
    <div className="flex-1 flex flex-col pt-8 px-4 space-y-6">
      <div className="flex justify-between items-center px-1">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-dora-cyan/20 border border-dora-cyan/30 flex items-center justify-center text-dora-cyan font-bold">
            {user?.name?.charAt(0) || "U"}
          </div>
          <div>
            <h2 className="text-xl font-bold leading-tight uppercase tracking-tight">{user?.name || "Partner"}</h2>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">{user?.platform || "DORA"}</p>
          </div>
        </div>
        <button 
          onClick={logout}
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-all"
          title="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
      
      {/* Live Risk Status */}
      {stats?.activeEvents?.length > 0 && (
        <GlassCard className="p-4 relative overflow-hidden" variant="glow-red">
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-3 text-red-500">
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                 transition={{ repeat: Infinity, duration: 1.5 }}
                 className="p-2 rounded-full bg-red-500/10"
               >
                 <CloudLightning size={24} />
               </motion.div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-tight">Active Disruption Detected</h4>
                <p className="text-xs opacity-80">{stats.activeEvents[0].type.replace("_", " ")} in {stats.activeEvents[0].location}</p>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-red-500/20 text-red-500 text-[10px] font-bold border border-red-500/30 shadow-[0_0_10px_rgba(239,68,68,0.3)]">
              LIVE
            </div>
          </div>
          {/* Animated red ripple background */}
          <motion.div 
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute inset-0 bg-red-500/5"
          />
        </GlassCard>
      )}

      {/* Risk & Plan Banner */}
      <div className="flex gap-4">
        <GlassCard className="flex-1 p-4 flex items-center justify-between" variant="glow-blue">
          <div>
            <span className="text-xs text-gray-400">Risk Score</span>
            <div className="flex items-center text-dora-cyan mt-1">
              <Zap size={16} className="mr-1" />
              <span className="font-bold text-lg">Low (12)</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 font-bold">Safe Zone</div>
            <span className="text-[8px] text-gray-400 mt-1 uppercase tracking-widest text-right">Mumbai_Andheri</span>
          </div>
        </GlassCard>

        <GlassCard className="flex-1 p-4" variant="glow-purple">
          <span className="text-xs text-gray-400">Active Policy</span>
          <div className="flex items-center text-dora-purple mt-1">
            <Shield size={16} className="mr-1" />
            <span className="font-bold text-lg">{plan}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
             <span className="text-[10px] text-gray-500 italic">₹20.00/week</span>
             <span className="text-[9px] text-green-400 font-bold">₹5.00 Discount Applied</span>
          </div>
        </GlassCard>
      </div>

      {/* Main Balance Container */}
      <motion.div className="text-center py-6">
        <span className="text-gray-400 uppercase tracking-widest text-xs font-semibold flex items-center justify-center">
          <Wallet size={14} className="mr-2" /> Wallet Balance
        </span>
        <h2 className="text-5xl font-bold mt-2 text-glow-blue flex justify-center items-start">
          <span className="text-3xl mt-1 mr-1 text-dora-blue">₹</span>
          {balance.toLocaleString()}
        </h2>
      </motion.div>

      {/* Graph */}
      <GlassCard className="p-5">
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold text-lg">Earnings Protected</span>
          <span className="text-dora-cyan text-sm flex items-center">
            <ArrowUpRight size={16} className="mr-1" /> +14%
          </span>
        </div>
        <div className="h-48 w-full -ml-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="day" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: "#0B0F1A", borderColor: "#4F9DFF50", borderRadius: "8px" }}
                itemStyle={{ color: "#00D1FF" }}
              />
              <Line 
                type="monotone" 
                dataKey="earnings" 
                stroke="#00D1FF" 
                strokeWidth={3}
                dot={{ fill: "#0B0F1A", stroke: "#00D1FF", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: "#00D1FF", stroke: "#fff" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      {/* Recent Payouts */}
      <div className="pt-2 pb-[100px]">
        <h3 className="font-bold text-lg mb-4 ml-1">Recent Payouts</h3>
        <div className="space-y-3">
          {payouts.length === 0 && <div className="text-gray-500 pl-2">No payouts yet.</div>}
          {payouts.map((item: any, i: number) => {
            const isHeat = item.title.toLowerCase().includes("heat");
            const isOutage = item.title.toLowerCase().includes("outage");
            const Icon = isHeat ? Thermometer : (isOutage ? Radio : CloudLightning);
            return (
              <div key={i} className="glass-panel p-4 flex items-center justify-between !rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-dora-cyan/10 text-dora-cyan box-glow-blue">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <span className="text-xs text-gray-500">{new Date(item.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <span className="font-bold text-dora-cyan flex items-center">
                  +₹{item.amount.toFixed(2)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

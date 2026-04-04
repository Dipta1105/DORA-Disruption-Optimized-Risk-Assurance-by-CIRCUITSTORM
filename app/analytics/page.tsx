"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, BarChart, Bar, CartesianGrid } from "recharts";
import { BrainCircuit, AlertTriangle, Lightbulb } from "lucide-react";

const weeklyData = [
  { day: "Mon", expected: 500, actual: 400 },
  { day: "Tue", expected: 450, actual: 300 },
  { day: "Wed", expected: 550, actual: 550 },
  { day: "Thu", expected: 500, actual: 450 },
  { day: "Fri", expected: 700, actual: 700 },
  { day: "Sat", expected: 800, actual: 600 },
  { day: "Sun", expected: 900, actual: 800 },
];

const riskData = [
  { name: "Rain", factor: 80 },
  { name: "Traffic", factor: 45 },
  { name: "App Issues", factor: 30 },
  { name: "Other", factor: 20 },
];

export default function AnalyticsPage() {
  return (
    <div className="flex-1 flex flex-col pt-8 px-4 space-y-6 pb-20">
      <h1 className="text-2xl font-bold px-2">Analytics</h1>

      {/* AI Insights Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <GlassCard variant="glow-purple" className="flex items-start space-x-4">
          <div className="p-3 rounded-full bg-dora-purple/20 text-dora-purple box-glow-purple shrink-0 animate-pulse">
            <BrainCircuit size={24} />
          </div>
          <div>
            <h3 className="font-bold text-white mb-1 flex items-center">
              AI Prediction <span className="ml-2 text-[10px] bg-dora-purple/30 px-2 py-0.5 rounded-full text-white">LIVE</span>
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              High probability of <strong className="text-red-400">heavy rain</strong> this evening. Expect 30% drop in earning potential. Your Pro Plan covers this up to ₹1,200.
            </p>
          </div>
        </GlassCard>
      </motion.div>

      {/* Main Chart: Expected vs Actual Earnings */}
      <GlassCard className="p-5">
        <h3 className="font-bold text-lg mb-6">Earnings vs Projections</h3>
        <div className="h-56 w-full -ml-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="colorExpected" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7B61FF" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#7B61FF" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00D1FF" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00D1FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: "#0B0F1A", borderColor: "#333", borderRadius: "8px" }}
                itemStyle={{ color: "#fff" }}
              />
              <Area type="monotone" dataKey="expected" stroke="#7B61FF" fillOpacity={1} fill="url(#colorExpected)" />
              <Area type="monotone" dataKey="actual" stroke="#00D1FF" strokeWidth={3} fillOpacity={1} fill="url(#colorActual)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      {/* Secondary Chart: Risk Breakdown */}
      <div className="grid grid-cols-2 gap-4">
        <GlassCard className="p-4" variant="glow-blue">
          <h4 className="text-sm text-gray-400 max-w-[120px] mb-4">Top Risk Factors</h4>
          <div className="h-24 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskData} layout="vertical" margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <XAxis type="number" hide />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: "#0B0F1A", border: 'none', fontSize: 12 }} />
                <Bar dataKey="factor" fill="#00D1FF" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="p-4 flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-semibold text-gray-300">Total Covered</h4>
            <span className="text-2xl font-bold text-white mt-1 block">₹2,450</span>
          </div>
          <div className="mt-4 flex items-center text-xs text-dora-cyan bg-dora-cyan/10 p-2 rounded-lg">
            <Lightbulb size={14} className="mr-1 shrink-0" />
            <span>Saved 12 hrs of work</span>
          </div>
        </GlassCard>
      </div>

    </div>
  );
}

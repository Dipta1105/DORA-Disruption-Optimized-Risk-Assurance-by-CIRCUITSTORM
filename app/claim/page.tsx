"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudLightning, MapPin, TrendingDown, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { useRouter } from "next/navigation";

export default function ClaimScreen() {
  const [step, setStep] = useState(0);
  const [decision, setDecision] = useState<any>(null);
  const router = useRouter();

  // Simulate automated claim process and trigger API
  useEffect(() => {
    const sequence = async () => {
      // Hit actual fraud engine API
      try {
        const res = await fetch("/api/trigger", { 
          method: "POST", 
          body: JSON.stringify({ eventType: "heavy_rainfall", lossAmount: 150 }) 
        });
        const data = await res.json();
        setDecision(data);
      } catch(e) {}

      await new Promise(r => setTimeout(r, 1000));
      setStep(1); // Location verified
      await new Promise(r => setTimeout(r, 1500));
      setStep(2); // Income drop detected
      await new Promise(r => setTimeout(r, 1500));
      setStep(3); // Payout initiated
    };
    sequence();
  }, []);

  return (
    <div className="flex-1 flex flex-col pt-12 px-6 items-center relative overflow-hidden">
      
      {/* Background Rain Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-color-dodge animate-[shimmer_2s_linear_infinite]" />
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-red-500/20 to-transparent mix-blend-overlay" />
      </div>

      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 text-center mb-10"
      >
        <div className="relative inline-block mb-4">
          <div className="absolute inset-0 bg-red-500/40 blur-[40px] rounded-full" />
          <motion.div animate={{ rotate: [0, -5, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <CloudLightning size={80} className="text-red-400 relative z-10 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
          </motion.div>
        </div>
        <h1 className="text-3xl font-bold text-red-500 text-shadow mb-2">Heavy Rain Detected</h1>
        <p className="text-gray-300">Disruption event triggered.</p>
      </motion.div>

      <div className="w-full space-y-4 relative z-10 mb-auto">
        <AnimatePresence>
          {step >= 1 && (
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center space-x-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <MapPin className="text-dora-cyan" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Location Verified</h4>
                <p className="text-xs text-gray-400">Sector 45, High Risk Zone</p>
              </div>
              <CheckCircle2 className="text-dora-cyan" size={20} />
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center space-x-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <TrendingDown className="text-dora-purple" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm">Income Drop Detected</h4>
                <p className="text-xs text-gray-400">Orders down by 45%</p>
              </div>
              <CheckCircle2 className="text-dora-purple" size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {step >= 3 && decision && (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 50 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="w-full relative z-10 mb-8"
          >
            <GlassCard variant={decision.decision?.status === "AUTO_APPROVED" ? "glow-blue" : "glow-purple"} className="text-center py-8 border-dora-blue/40">
              <span className="text-sm font-semibold uppercase tracking-widest text-dora-cyan mb-2 block">
                {decision.decision?.status.replace("_", " ")}
              </span>
              
              {decision.decision?.status === "AUTO_APPROVED" ? (
                <>
                  <motion.h2 
                    className="text-6xl font-bold text-glow-blue flex justify-center items-start mt-2"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <span className="text-3xl mt-2 mr-1">₹</span>
                    {decision.payoutAmount?.toFixed(0)}
                  </motion.h2>
                  <p className="text-sm text-gray-400 mt-4">Transferred to your wallet instantly.</p>
                </>
              ) : (
                <p className="text-sm text-gray-300 mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  {decision.decision?.reason || "Requires manual verification."}
                </p>
              )}
            </GlassCard>

            <AnimatedButton onClick={() => router.push("/dashboard")} fullWidth className="mt-6 py-4">
              Back to Dashboard
            </AnimatedButton>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

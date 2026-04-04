"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Mic, CheckCircle2, ArrowRight } from "lucide-react";
import { useAuth } from "@/lib/contexts/AuthContext";

const PLATFORMS = [
  { id: "zepto", name: "Zepto", color: "from-purple-500/20 to-purple-900/40", border: "border-purple-500/50" },
  { id: "blinkit", name: "Blinkit", color: "from-yellow-500/20 to-yellow-900/40", border: "border-yellow-500/50" },
  { id: "instamart", name: "Instamart", color: "from-orange-500/20 to-orange-900/40", border: "border-orange-500/50" }
];

export default function OnboardingPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [step, setStep] = useState(1);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [upiId, setUpiId] = useState("");

  const nextStep = async () => {
    if (step < 4) setStep(step + 1);
    else {
      try {
        const res = await fetch("/api/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
             name: name || "Test User",
             phone: phone || "9999999999",
             platform: selectedPlatform,
             upiId: upiId || "test@bank",
             planType: selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)
          })
        });
        const data = await res.json();
        if (data.success) {
          login(data.user);
        }
      } catch (err) {
        console.error("Auth failed:", err);
      }
    }
  };

  const variants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 }
  };

  return (
    <div className="flex-1 flex flex-col pt-12 px-6">
      {/* Progress Indicator */}
      <div className="flex justify-between items-center mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex-1 h-1 mx-1 rounded-full bg-white/10 overflow-hidden">
            <motion.div 
              className="h-full bg-dora-cyan"
              initial={{ width: "0%" }}
              animate={{ width: step >= i ? "100%" : "0%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step1" variants={variants} initial="enter" animate="center" exit="exit" className="flex-1 flex flex-col">
            <h2 className="text-3xl font-bold mb-4">Enter Mobile & OTP</h2>
            <p className="text-gray-400 mb-8">We will send a secure code.</p>
            <input 
              type="tel" 
              placeholder="+91 99999 99999" 
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-xl outline-none focus:border-dora-blue transition-colors mb-4"
            />
            <div className="flex justify-between text-dora-cyan text-sm mb-auto">
              <span>Use voice input</span>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                <Mic size={18} />
              </motion.div>
            </div>
            <AnimatedButton onClick={nextStep} className="mb-8 p-4 text-lg">Send OTP <ArrowRight className="ml-2" size={20} /></AnimatedButton>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" variants={variants} initial="enter" animate="center" exit="exit" className="flex-1 flex flex-col">
            <h2 className="text-3xl font-bold mb-8">Select Platform</h2>
            <div className="space-y-4 mb-auto">
              {PLATFORMS.map((p) => (
                <motion.div 
                  key={p.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPlatform(p.id)}
                  className={`p-6 rounded-2xl border cursor-pointer bg-gradient-to-r transition-all ${
                    selectedPlatform === p.id ? p.border + " " + p.color + " shadow-[0_0_15px_rgba(255,255,255,0.1)]" : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{p.name}</span>
                    {selectedPlatform === p.id && <CheckCircle2 className="text-white" />}
                  </div>
                </motion.div>
              ))}
            </div>
            <AnimatedButton onClick={nextStep} disabled={!selectedPlatform} className="mb-8 p-4 text-lg">Continue <ArrowRight className="ml-2" size={20} /></AnimatedButton>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" variants={variants} initial="enter" animate="center" exit="exit" className="flex-1 flex flex-col">
            <h2 className="text-3xl font-bold mb-4">Your Details</h2>
            <p className="text-gray-400 mb-8">For instant automated payouts.</p>
            <input 
              type="text" 
              placeholder="Full Name" 
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-xl outline-none focus:border-dora-blue transition-colors mb-4"
            />
            <input 
              type="text" 
              placeholder="UPI ID" 
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-xl outline-none focus:border-dora-blue transition-colors mb-auto"
            />
            <AnimatedButton onClick={nextStep} className="mb-8 p-4 text-lg">Continue <ArrowRight className="ml-2" size={20} /></AnimatedButton>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="step4" variants={variants} initial="enter" animate="center" exit="exit" className="flex-1 flex flex-col">
            <h2 className="text-3xl font-bold mb-2">Coverage Plan</h2>
            <p className="text-gray-400 mb-6">Select your disruption protection.</p>
            
            <div className="space-y-4 mb-auto pt-2">
              {[
                { id: "basic", name: "Basic", baseMultiplier: 1.0, cover: "50%", daily: 500 },
                { id: "standard", name: "Standard", baseMultiplier: 1.5, cover: "75%", daily: 800 },
                { id: "pro", name: "Pro", baseMultiplier: 2.0, cover: "100%", daily: 1200 }
              ].map((plan) => {
                // Calculate dynamic price (simplified for UI)
                const price = Math.round(25 * plan.baseMultiplier * 1.2); // Base * Plan * Season
                
                return (
                  <GlassCard 
                    key={plan.id}
                    variant={selectedPlan === plan.id ? "glow-blue" : "default"}
                    onClick={() => setSelectedPlan(plan.id)}
                    className="cursor-pointer transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-dora-cyan">₹{price}</span>
                        <span className="text-xs text-gray-400 block">/week</span>
                      </div>
                    </div>
                    <div className="flex gap-4 text-sm mt-4 text-gray-300">
                      <div className="flex flex-col">
                        <span className="text-white font-semibold">{plan.cover}</span>
                        <span className="text-xs">Coverage</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-semibold">₹{plan.daily}</span>
                        <span className="text-xs">Daily Cap</span>
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>

            <div className="mt-4 p-3 rounded-lg bg-dora-cyan/10 border border-dora-cyan/20 text-center mb-6">
              <span className="text-xs text-dora-cyan font-semibold uppercase tracking-wider">Dynamic Pricing Applied: Monsoon Surcharge (+20%)</span>
            </div>

            <AnimatedButton onClick={nextStep} disabled={!selectedPlan} className="mb-8 p-4 text-lg">
              Activate Protection
            </AnimatedButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

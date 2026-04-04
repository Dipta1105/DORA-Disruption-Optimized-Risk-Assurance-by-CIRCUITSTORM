"use client";

import { useState } from "react";
import { useAuth } from "@/lib/contexts/AuthContext";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { ShieldCheck, ArrowRight, Smartphone, Key } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPage() {
  const { login } = useAuth();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendOTP = async () => {
    if (phone.length < 10) {
      setError("Please enter a valid phone number");
      return;
    }
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setError(null);
    }, 800);
  };

  const handleVerifyOTP = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone })
      });
      const data = await res.json();

      if (res.ok) {
        login(data.user);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Connection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <ShieldCheck size={64} className="text-dora-cyan mx-auto mb-4 drop-shadow-[0_0_10px_rgba(0,209,255,0.5)]" />
        <h1 className="text-3xl font-bold text-glow-blue">Welcome Back</h1>
        <p className="text-gray-400 mt-2">Log in to your DORA protection</p>
      </motion.div>

      <GlassCard className="w-full max-w-sm p-8" variant="glow-blue">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div 
              key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 flex items-center">
                  <Smartphone size={14} className="mr-2" /> Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-xl outline-none focus:border-dora-blue transition-colors"
                />
              </div>
              {error && <p className="text-red-400 text-xs italic">{error}</p>}
              <AnimatedButton onClick={handleSendOTP} disabled={loading} fullWidth className="py-4">
                {loading ? "Sending..." : "Send OTP"} <ArrowRight size={18} className="ml-2" />
              </AnimatedButton>
            </motion.div>
          ) : (
            <motion.div 
              key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 flex items-center">
                  <Key size={14} className="mr-2" /> One-Time Password
                </label>
                <input
                  type="text"
                  placeholder="1234"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-center text-3xl tracking-[1em] font-bold outline-none focus:border-dora-blue transition-colors"
                />
                <p className="text-[10px] text-gray-500 text-center mt-2 italic">Enter 1234 for demo login</p>
              </div>
              {error && <p className="text-red-400 text-xs italic">{error}</p>}
              <AnimatedButton onClick={handleVerifyOTP} disabled={loading} fullWidth className="py-4">
                {loading ? "Verifying..." : "Login Now"}
              </AnimatedButton>
              <button 
                onClick={() => setStep(1)} 
                className="w-full text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                Change Phone Number
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>

      <div className="text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <button onClick={() => window.location.href = "/onboarding"} className="text-dora-cyan font-bold hover:underline">
          Register
        </button>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export default function SplashPage() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-12">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute inset-0 bg-dora-blue/30 blur-[60px] rounded-full" />
        <ShieldAlert size={80} className="text-dora-cyan relative z-10 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(0,209,255,1)]" />
        <h1 className="text-5xl font-bold tracking-tight text-glow-blue mb-2">
          DORA
        </h1>
        <p className="text-dora-purple uppercase font-bold tracking-widest text-sm">
          Disruption Optimized Risk Assurance
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-xs"
      >
        <h2 className="text-2xl font-medium leading-snug">
          Insurance that works like UPI: <br />
          <span className="text-dora-cyan font-bold italic">Instant. Invisible. Intelligent.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
        className="w-full max-w-xs mt-auto space-y-4 pb-12"
      >
        <AnimatedButton 
          fullWidth 
          onClick={() => router.push("/onboarding")}
          className="py-4 text-xl font-bold tracking-wide shadow-[0_0_20px_rgba(79,157,255,0.3)]"
        >
          Get Started
        </AnimatedButton>
        <button 
          onClick={() => router.push("/login")}
          className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300 font-bold hover:bg-white/10 transition-all"
        >
          Already a Member? Login
        </button>
      </motion.div>
    </div>
  );
}

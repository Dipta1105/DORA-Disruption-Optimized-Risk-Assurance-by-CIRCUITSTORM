"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { ArrowUpRight, ArrowDownRight, RefreshCw, Banknote } from "lucide-react";

export default function WalletPage() {
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
  const txs = stats?.walletTransactions || [];

  return (
    <div className="flex-1 flex flex-col pt-8 px-4 space-y-6 pb-20">
      
      <h1 className="text-2xl font-bold px-2">Wallet</h1>

      {/* Balance Card */}
      <GlassCard variant="glow-blue" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-20">
          <Banknote size={100} />
        </div>
        
        <span className="text-sm font-semibold tracking-wide text-dora-cyan mb-2 block uppercase">Available Balance</span>
        <h2 className="text-5xl font-bold text-white mb-6">
          <span className="text-3xl font-normal text-dora-blue mr-1">₹</span>
          {balance.toLocaleString(undefined, {minimumFractionDigits: 2})}
        </h2>

        <div className="flex gap-4">
          <AnimatedButton className="flex-1 py-3" variant="primary">
            Withdraw
          </AnimatedButton>
          <AnimatedButton className="px-4 py-3" variant="secondary" onClick={fetchStats}>
            <RefreshCw size={20} />
          </AnimatedButton>
        </div>
      </GlassCard>

      {/* Transactions List */}
      <div className="pt-4 flex-1">
        <h3 className="font-bold text-lg mb-4 px-2">Recent Transactions</h3>
        <div className="space-y-3">
          {txs.length === 0 && <div className="text-gray-500 pl-2">No transactions yet.</div>}
          {txs.map((tx: any, i: number) => (
            <motion.div
              key={tx.id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              drag="x"
              dragConstraints={{ left: -50, right: 0 }}
              className="glass-panel p-4 rounded-2xl flex items-center justify-between active:cursor-grabbing cursor-grab"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${
                  tx.type === "payout" ? "bg-dora-cyan/10 text-dora-cyan box-glow-blue" :
                  tx.type === "withdrawal" ? "bg-white/10 text-white" :
                  "bg-dora-purple/10 text-dora-purple box-glow-purple"
                }`}>
                  {tx.type === "payout" ? <ArrowDownRight size={20} /> : <ArrowUpRight size={20} />}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{tx.title}</h4>
                  <span className="text-xs text-gray-500">{new Date(tx.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <span className={`font-bold ${tx.type === "payout" ? "text-dora-cyan" : ""}`}>
                {tx.type === "payout" ? "+" : "-"}₹{tx.amount.toFixed(2)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

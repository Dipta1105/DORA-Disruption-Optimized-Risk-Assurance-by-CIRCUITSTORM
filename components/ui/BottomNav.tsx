"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, Wallet, PieChart, CloudLightning } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", path: "/dashboard", icon: Home },
  { name: "Claim", path: "/claim", icon: CloudLightning },
  { name: "Wallet", path: "/wallet", icon: Wallet },
  { name: "Analytics", path: "/analytics", icon: PieChart },
];

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  // Hide nav on splash, onboarding and login
  const hideNavOn = ["/", "/onboarding", "/login"];
  if (hideNavOn.includes(pathname)) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50">
      <div className="glass-panel w-full max-w-md mx-auto flex justify-around items-center p-3 rounded-full">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => router.push(item.path)}
              className={cn(
                "relative flex flex-col items-center justify-center w-16 h-12 transition-colors",
                isActive ? "text-dora-cyan" : "text-gray-400 hover:text-gray-200"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="bottom-nav-active"
                  className="absolute inset-0 bg-dora-cyan/10 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon size={24} className={cn("relative z-10", isActive && "drop-shadow-[0_0_8px_rgba(0,209,255,0.8)]")} />
              <span className="text-[10px] mt-1 relative z-10 font-medium">{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

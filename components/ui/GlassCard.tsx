import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: "default" | "glow-blue" | "glow-purple" | "glow-cyan" | "glow-red";
}

export function GlassCard({ children, className, variant = "default", ...props }: GlassCardProps) {
  const baseStyles = "glass-panel p-6 relative overflow-hidden";
  
  const variantStyles = {
    default: "",
    "glow-blue": "box-glow-blue border-dora-blue/20",
    "glow-purple": "box-glow-purple border-dora-purple/20",
    "glow-cyan": "box-glow-cyan border-dora-cyan/20",
    "glow-red": "box-glow-red border-red-500/20",
  };

  return (
    <motion.div
      className={cn(baseStyles, variantStyles[variant], className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {/* Soft overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

export function AnimatedButton({ 
  children, 
  className, 
  variant = "primary", 
  fullWidth = false,
  ...props 
}: AnimatedButtonProps) {
  const baseStyles = "px-6 py-3 rounded-xl font-bold flex items-center justify-center transition-colors relative overflow-hidden group";
  
  const variants = {
    primary: "bg-dora-blue text-white box-glow-blue hover:bg-dora-blue/90",
    secondary: "bg-dora-purple text-white box-glow-purple hover:bg-dora-purple/90",
    outline: "glass-panel text-white hover:bg-white/10",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], fullWidth ? "w-full" : "", className)}
      {...props}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

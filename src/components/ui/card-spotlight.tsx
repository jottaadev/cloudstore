"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/functions/cn";

export const CardSpotlight = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  
  return (
    <div
      className={cn(
        "group/spotlight p-8 rounded-2xl relative border border-neutral-800/50 bg-gradient-to-br from-neutral-900 to-black dark:border-neutral-700/50 overflow-hidden shadow-2xl shadow-black/20",
        "hover:border-neutral-700/80 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500",
        "backdrop-blur-sm",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Simple hover effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-all duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.05) 100%)',
        }}
      />
      
      {/* Simple border glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-all duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

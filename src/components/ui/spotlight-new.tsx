"use client";

import React from "react";
import { cn } from "@/functions";

interface SpotlightNewProps {
  className?: string;
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
}

export const SpotlightNew: React.FC<SpotlightNewProps> = ({
  className,
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(217, 91%, 85%, .08) 0, hsla(217, 91%, 55%, .02) 50%, hsla(217, 91%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(217, 91%, 85%, .06) 0, hsla(217, 91%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(217, 91%, 85%, .04) 0, hsla(217, 91%, 45%, .02) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden",
        className
      )}
    >
      {/* Main spotlight - left */}
      <div
        className="absolute"
        style={{
          background: gradientFirst,
          width: `${width}px`,
          height: `${height}px`,
          transform: `translateY(${translateY}px) translateX(-${width / 2}px)`,
          animation: `spotlight-left ${duration}s ease-in-out infinite`,
        }}
      />
      
      {/* Main spotlight - right */}
      <div
        className="absolute right-0"
        style={{
          background: gradientFirst,
          width: `${width}px`,
          height: `${height}px`,
          transform: `translateY(${translateY}px) translateX(${width / 2}px)`,
          animation: `spotlight-right ${duration}s ease-in-out infinite`,
        }}
      />

      {/* Secondary spotlight - left */}
      <div
        className="absolute"
        style={{
          background: gradientSecond,
          width: `${smallWidth}px`,
          height: `${height}px`,
          transform: `translateY(${translateY}px) translateX(-${smallWidth / 2}px)`,
          animation: `spotlight-left ${duration}s ease-in-out infinite`,
          animationDelay: `${duration / 3}s`,
        }}
      />

      {/* Secondary spotlight - right */}
      <div
        className="absolute right-0"
        style={{
          background: gradientSecond,
          width: `${smallWidth}px`,
          height: `${height}px`,
          transform: `translateY(${translateY}px) translateX(${smallWidth / 2}px)`,
          animation: `spotlight-right ${duration}s ease-in-out infinite`,
          animationDelay: `${duration / 3}s`,
        }}
      />

      {/* Tertiary spotlight - left */}
      <div
        className="absolute"
        style={{
          background: gradientThird,
          width: `${smallWidth}px`,
          height: `${height}px`,
          transform: `translateY(${translateY}px) translateX(-${smallWidth / 2}px)`,
          animation: `spotlight-left ${duration}s ease-in-out infinite`,
          animationDelay: `${(duration * 2) / 3}s`,
        }}
      />

      {/* Tertiary spotlight - right */}
      <div
        className="absolute right-0"
        style={{
          background: gradientThird,
          width: `${smallWidth}px`,
          height: `${height}px`,
          transform: `translateY(${translateY}px) translateX(${smallWidth / 2}px)`,
          animation: `spotlight-right ${duration}s ease-in-out infinite`,
          animationDelay: `${(duration * 2) / 3}s`,
        }}
      />

      <style jsx>{`
        @keyframes spotlight-left {
          0%, 100% {
            transform: translateY(${translateY}px) translateX(-${width / 2}px) translateX(-${xOffset}px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(${translateY}px) translateX(-${width / 2}px) translateX(${xOffset}px);
            opacity: 0.8;
          }
        }

        @keyframes spotlight-right {
          0%, 100% {
            transform: translateY(${translateY}px) translateX(${width / 2}px) translateX(${xOffset}px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(${translateY}px) translateX(${width / 2}px) translateX(-${xOffset}px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/functions";

interface SpaceParticlesProps {
  className?: string;
  particleCount?: number;
  speed?: number;
  color?: string;
}

export const SpaceParticles: React.FC<SpaceParticlesProps> = ({
  className,
  particleCount = 300,
  speed = 0.3,
  color = "#ffffff"
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    twinkleSpeed: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Enable high DPI rendering
    const dpr = window.devicePixelRatio || 1;
    
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);
    };

    const createParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width / dpr,
          y: Math.random() * canvas.height / dpr,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: Math.random() * 2 + 0.5, // Varying sizes
          opacity: Math.random() * 0.6 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.01
        });
      }
    };

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width / dpr;
        if (particle.x > canvas.width / dpr) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / dpr;
        if (particle.y > canvas.height / dpr) particle.y = 0;

        // Twinkling effect
        particle.opacity += Math.sin(currentTime * particle.twinkleSpeed) * 0.001;
        particle.opacity = Math.max(0.1, Math.min(0.8, particle.opacity));

        // Draw particle with different sizes
        ctx.fillStyle = `${color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        
        if (particle.size <= 1) {
          // Small dots
          ctx.fillRect(Math.floor(particle.x), Math.floor(particle.y), 1, 1);
        } else if (particle.size <= 1.5) {
          // Medium dots
          ctx.fillRect(Math.floor(particle.x - 0.5), Math.floor(particle.y - 0.5), 2, 2);
        } else {
          // Larger dots
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    lastTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [particleCount, speed, color]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "fixed inset-0 w-full h-full pointer-events-none z-0",
        className
      )}
      style={{ background: "transparent" }}
    />
  );
};

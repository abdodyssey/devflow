"use client";

import React, { useEffect, useRef } from "react";

// Everblush inspired colors for particles
const COLORS = [
  "#e57474", // Muted Coral
  "#f2cecf", // Dusty Rose
  "#dadada", // Warm Off-white
];

class Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  targetOpacity: number;
  speedX: number;
  speedY: number;
  fadeSpeed: number;

  constructor(width: number, height: number, isInitial = false) {
    this.x = Math.random() * width;
    // Concentrate more at the top
    if (isInitial) {
      this.y = Math.random() * height;
    } else {
      // New particles mostly spawn at top or bottom to enter view
      this.y = Math.random() < 0.8 ? -10 : height + 10;
    }

    this.size = Math.random() < 0.5 ? 2 : 4;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.opacity = 0;
    this.targetOpacity = Math.random() * 0.1 + 0.08; // 8% to 18%
    this.speedX = (Math.random() - 0.5) * 0.2;
    this.speedY = Math.random() * 0.3 + 0.1; // Slow drift downwards
    this.fadeSpeed = 0.001 + Math.random() * 0.002;
  }

  update(width: number, height: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    // Opacity oscillation/fade
    if (this.opacity < this.targetOpacity) {
      this.opacity += this.fadeSpeed;
    }

    // Reset if out of bounds
    if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
      this.reset(width);
    }
  }

  reset(width: number) {
    this.x = Math.random() * width;
    this.y = -10;
    this.opacity = 0;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.globalAlpha = this.opacity;
    context.fillStyle = this.color;
    // Perfect squares
    context.fillRect(this.x, this.y, this.size, this.size);
    context.restore();
  }
}

export default function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const init = () => {
      const { innerWidth: width, innerHeight: height } = window;
      canvas.width = width;
      canvas.height = height;

      // Adjust density for mobile
      const density = width < 768 ? 30 : 80;
      particles = [];
      for (let i = 0; i < density; i++) {
        particles.push(new Particle(width, height, true));
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    // Respect user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mediaQuery.matches) {
      init();
      animate();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: "transparent",
        // Fade out towards bottom
        maskImage:
          "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
      }}
    />
  );
}

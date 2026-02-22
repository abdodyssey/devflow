"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroData } from "@/data/landing";

export default function Hero() {
  return (
    <section className="relative w-full bg-background pt-32 pb-24 overflow-hidden transition-colors duration-300">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 bg-size-[4rem_4rem] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="px-4 py-1.5 rounded-full border border-border bg-muted/50 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
            Digital Lab & Engineering
          </span>
        </motion.div>

        {/* Massive Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1000px]"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.9] tracking-[-0.05em] text-foreground mb-10">
            {heroData.title}
            <br />
            <span className="text-accent">{heroData.highlight}</span>
          </h1>
        </motion.div>

        {/* Refined Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[600px] text-slate-500 text-lg md:text-xl leading-relaxed mb-16"
        >
          {heroData.description}
        </motion.p>

        {/* High-Contrast CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#solution"
            className="group relative h-14 px-10 flex items-center justify-center bg-indigo-600 text-white font-bold rounded-2xl transition-all hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-500/20"
          >
            Lihat Solusi
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="https://wa.me/6285840858761"
            className="h-14 px-10 flex items-center justify-center border-2 border-border text-foreground font-bold rounded-2xl transition-all hover:bg-muted active:scale-[0.98]"
          >
            Mulai Diskusi
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function EngineeringIdentity() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="group relative"
      >
        {/* Pixel style corner accents - Handcrafted feel */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#e57474] z-20" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#e57474] z-20" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#e57474] z-20" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#e57474] z-20" />

        <div className="w-full border border-[#232a2d] bg-[#1c2326] rounded-sm overflow-hidden shadow-2xl relative">
          {/* Terminal Header */}
          <div className="bg-[#232a2d] border-b border-[#232a2d] px-4 py-2 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 bg-[#e57474] opacity-50" />
              <div className="w-2.5 h-2.5 bg-[#e5c76b] opacity-50" />
              <div className="w-2.5 h-2.5 bg-[#8ccf7e] opacity-50" />
            </div>
            <div className="text-[10px] font-mono text-[#b3b9b8] uppercase tracking-[0.2em]">
              tty1 — active
            </div>
            <div className="w-12" />
          </div>

          {/* Terminal Content */}
          <div className="p-8 md:p-12 font-mono text-sm md:text-base space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[#e57474]">$</span>
                <span className="text-[#dadada] opacity-70">whoami</span>
              </div>
              <div className="pl-6 space-y-1">
                <div className="text-3xl md:text-5xl font-bold text-[#dadada] tracking-tight">
                  M. Abdi Nugroho
                </div>
                <div className="text-[#f2cecf] text-lg opacity-80">
                  Fullstack Developer
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[#e57474]">$</span>
                <span className="text-[#dadada] opacity-70">status</span>
              </div>
              <div className="pl-6 text-[#b3b9b8] leading-relaxed max-w-2xl">
                Building scalable systems with structured architecture and
                pragmatic implementation.
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Ticker */}
          <div className="bg-[#1c2326] border-t border-[#232a2d] px-6 py-2 flex items-center justify-between font-mono text-[9px] text-[#b3b9b8]/40 uppercase tracking-widest">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-[#8ccf7e] animate-pulse rounded-full" />{" "}
                system_online
              </span>
              <span className="hidden sm:inline">cpu_load: 0.08%</span>
            </div>
            <span className="hidden md:inline">arch: x86_64</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

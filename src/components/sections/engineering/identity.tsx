"use client";

import { motion } from "framer-motion";

export default function EngineeringIdentity() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full border border-[#232a2d] bg-[#1c2326] rounded-md overflow-hidden shadow-2xl relative"
      >
        {/* CRT Scanline Effect */}
        <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] bg-size-[100%_2px,3px_100%] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]" />

        {/* Terminal Header */}
        <div className="bg-[#232a2d] border-b border-[#232a2d] px-4 py-2 flex items-center justify-between">
          <div className="flex gap-2">
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-[#e57474]"
            />
            <div className="w-2.5 h-2.5 rounded-full bg-[#e5c76b] opacity-30" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#8ccf7e] opacity-30" />
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[10px] font-mono text-[#b3b9b8] uppercase tracking-[0.2em]">
              dev_workstation
            </div>
            <span className="text-[10px] font-mono text-[#e57474]/40">
              tty1
            </span>
          </div>
          <div className="w-12 select-none pointer-events-none" />
        </div>

        {/* Terminal Content */}
        <div className="p-8 md:p-10 font-mono text-sm md:text-base space-y-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[#e57474]">$</span>
              <span className="text-[#dadada] opacity-70">whoami</span>
            </div>
            <div className="pl-6 space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-[#dadada] tracking-tight">
                M. Abdi Nugroho{" "}
                <span className="text-xs text-[#e57474]">(Devtective)</span>
              </div>
              <div className="text-[#e57474]/80 text-lg">
                Fullstack Web Developer
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[#e57474]">$</span>
              <span className="text-[#dadada] opacity-70">focus</span>
            </div>
            <div className="pl-6 space-y-1.5 text-[#b3b9b8]">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#e57474] rounded-full" />
                Scalable systems
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#e57474] rounded-full" />
                Clean architecture
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#e57474] rounded-full" />
                Real-world implementation
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#232a2d] text-[#b3b9b8] text-xs md:text-sm leading-relaxed max-w-xl">
            <span className="text-[#f2cecf] font-bold">{"// "}</span>
            Building scalable systems through structured architecture and
            pragmatic implementation.
          </div>
        </div>

        {/* Terminal Status Bar */}
        <div className="bg-[#1c2326] border-t border-[#232a2d] px-6 py-2 flex items-center justify-between font-mono text-[9px] text-[#b3b9b8]/50 uppercase tracking-wider">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8ccf7e]/40 animate-pulse" />
              system: online
            </div>
            <div className="hidden sm:flex items-center gap-2">
              cpu:
              <div className="w-12 h-1 bg-[#232a2d] rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: "20%" }}
                  animate={{ width: ["20%", "45%", "30%", "60%", "25%"] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-y-0 left-0 bg-[#e57474]/40"
                />
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              mem: 2.4gb / 16gb
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[1.2, 2.1, 1.8].map((duration, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration, repeat: Infinity, delay: i * 0.3 }}
                  className="w-1.5 h-1.5 bg-[#8ccf7e]/30 rounded-full"
                />
              ))}
            </div>
            <span className="hidden sm:inline">up: 42d 12h 04m</span>
          </div>
        </div>
      </motion.div>

      <div className="mt-24 flex items-center gap-6">
        <div className="h-px bg-[#232a2d] grow" />
        <div className="font-mono text-[9px] text-[#e57474]/40 uppercase tracking-[0.4em]">
          Ready_to_Initialize
        </div>
        <div className="h-px bg-[#232a2d] grow" />
      </div>
    </section>
  );
}

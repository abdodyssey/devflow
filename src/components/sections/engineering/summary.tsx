"use client";

import { motion } from "framer-motion";

export default function SystemProfile() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 bg-[#e57474]" />
            <h2 className="font-mono text-sm tracking-tight text-[#e57474] font-bold">
              [ system.profile ]
            </h2>
          </div>
          {/* Pixel-style mini divider */}
          <div className="flex gap-1.5 h-0.5">
            <div className="w-4 bg-[#e57474]" />
            <div className="w-1 bg-[#e57474] opacity-50" />
            <div className="w-0.5 bg-[#e57474] opacity-30" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-3 space-y-10"
        >
          <div className="p-8 rounded-sm border border-[#232a2d] bg-[#1c2326]/50 font-sans text-xl text-[#dadada] leading-relaxed relative border-l-4 border-l-[#e57474]">
            I approach software development as a rigorous engineering
            discipline. My methodology prioritizes long-term system stability
            and architectural clarity over transient trends. I build scalable
            web systems focused on maintainability and clean implementation.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-[#f2cecf] font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-[#e57474] border border-[#f2cecf]/20" />
                Architecture
              </h3>
              <p className="text-sm leading-relaxed text-[#b3b9b8]">
                Designing modular components and scalable infrastructure that
                can grow without accumulating technical debt. Strategic system
                modeling for sustainable scale.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-[#f2cecf] font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-[#e57474] border border-[#f2cecf]/20" />
                Reliability
              </h3>
              <p className="text-sm leading-relaxed text-[#b3b9b8]">
                Applying engineering principles to real-world problems. Ensuring
                every feature is robust, tested, and optimized for consistent
                performance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

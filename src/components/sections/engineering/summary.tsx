"use client";

import { motion } from "framer-motion";

export default function SystemProfile() {
  return (
    <section className="py-32 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        {/* Left Label */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <h2 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              System_Profile
            </h2>
          </div>
          <div className="h-px w-full bg-border" />
        </motion.div>

        {/* content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-9 space-y-16"
        >
          <div className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
            I approach software development as a{" "}
            <span className="text-slate-400">
              rigorous engineering discipline.
            </span>{" "}
            My methodology prioritizes stability and architectural clarity over
            transient trends.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-6 p-8 rounded-2xl border border-border bg-muted/30 hover:bg-background hover:shadow-2xl transition-all duration-500">
              <h3 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                01_Architecture
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                Designing modular components and scalable infrastructure that
                can grow without accumulating technical debt. Strategic system
                modeling for sustainable scale.
              </p>
            </div>
            <div className="space-y-6 p-8 rounded-2xl border border-border bg-muted/30 hover:bg-background hover:shadow-2xl transition-all duration-500">
              <h3 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                02_Reliability
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed">
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

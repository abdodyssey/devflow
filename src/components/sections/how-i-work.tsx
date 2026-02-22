"use client";

import { motion } from "framer-motion";
import { howIWorkData } from "@/data/landing";

export default function HowIWork() {
  return (
    <section
      id="how-i-work"
      className="py-32 px-6 bg-muted/20 border-t border-border transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        {/* Left Label */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <h2 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              Execution_Framework
            </h2>
          </div>
          <div className="h-px w-full bg-border" />
        </motion.div>

        {/* Content */}
        <div className="md:col-span-9 space-y-24">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground leading-[0.95]">
              A structured roadmap for <br />
              <span className="text-slate-400">software excellence.</span>
            </h2>
          </div>

          <div className="space-y-12">
            {howIWorkData.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col md:flex-row gap-12 p-8 md:p-12 bg-background border border-border rounded-[2.5rem] hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500"
                style={
                  { "--accent-dynamic": step.hoverColor } as React.CSSProperties
                }
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-muted border border-border flex items-center justify-center text-slate-400 group-hover:text-(--accent-dynamic) group-hover:border-(--accent-dynamic) group-hover:bg-(--accent-dynamic)/10 transition-all duration-500">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] font-black text-accent uppercase tracking-widest">
                      PHASE_0{idx + 1}
                    </span>
                    <div className="h-px w-8 bg-border" />
                  </div>
                  <h3 className="text-3xl font-black text-foreground tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

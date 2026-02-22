"use client";

import { motion } from "framer-motion";
import { solutionsData } from "@/data/landing";

/**
 * Premium Solution Section
 * - Light Minimal Design
 * - Strong Typography
 * - White Surface Cards
 */

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-32 px-6 bg-background border-t border-border transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Core_Solutions
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground leading-[0.95]">
              Digital solutions for <br />
              <span className="text-accent">modern engineering.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
          >
            We build tools that solve real operational friction, focusing on
            high-performance architecture and intentional design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative p-8 rounded-[2rem] border border-border bg-muted/30 hover:bg-background hover:shadow-2xl transition-all duration-500"
              style={
                { "--accent-dynamic": item.hoverColor } as React.CSSProperties
              }
            >
              <div className="mb-12 inline-flex p-4 rounded-2xl bg-background border border-border text-slate-400 group-hover:text-(--accent-dynamic) group-hover:border-(--accent-dynamic) group-hover:bg-(--accent-dynamic)/10 transition-all duration-500">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-foreground tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

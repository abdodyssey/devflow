"use client";

import { motion } from "framer-motion";
import { whoIHelpData } from "@/data/landing";

/**
 * Premium Who I Help Section
 * - Light Minimal Design
 * - Trusted feel
 * - Generous spacing
 */

export default function WhoIHelp() {
  return (
    <section
      id="who-i-help"
      className="py-32 px-6 bg-background transition-colors duration-300"
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
              User_Archetypes
            </h2>
          </div>
          <div className="h-px w-full bg-border" />
        </motion.div>

        {/* Content */}
        <div className="md:col-span-9 space-y-24">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground leading-[0.95]">
              Who fits our <br />
              <span className="text-slate-400">engineering model?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whoIHelpData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-muted/30 border border-border p-10 rounded-[2.5rem] hover:bg-background hover:shadow-2xl transition-all duration-500"
                style={
                  { "--accent-dynamic": item.hoverColor } as React.CSSProperties
                }
              >
                <div className="mb-8 w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center text-slate-400 group-hover:text-(--accent-dynamic) group-hover:border-(--accent-dynamic) group-hover:bg-(--accent-dynamic)/10 transition-all duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

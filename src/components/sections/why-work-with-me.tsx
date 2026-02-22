"use client";

import { motion } from "framer-motion";
import { whyWorkWithMeData } from "@/data/landing";

export default function WhyWorkWithMe() {
  return (
    <section
      id="why-me"
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
              Agency_Thesis
            </h2>
          </div>
          <div className="h-px w-full bg-border" />
        </motion.div>

        {/* Content */}
        <div className="md:col-span-9 space-y-24">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-foreground leading-[0.95]">
              Why our approach <br />
              <span className="text-slate-400">outperforms.</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
              We offer personal dedication often lost in large agencies. One
              vision, one cycle, and consistent execution for your business
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {whyWorkWithMeData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col md:flex-row gap-8 p-10 bg-background border border-border rounded-[2.5rem] hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500"
                style={
                  { "--accent-dynamic": item.hoverColor } as React.CSSProperties
                }
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-muted border border-border flex items-center justify-center text-slate-400 group-hover:text-(--accent-dynamic) group-hover:border-(--accent-dynamic) group-hover:bg-(--accent-dynamic)/10 transition-all duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-foreground tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    {item.description}
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

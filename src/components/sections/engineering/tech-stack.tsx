"use client";

import { motion } from "framer-motion";

import { techStackGroups } from "@/data/engineering";

export default function EngineeringTechStack() {
  return (
    <section className="py-32 px-6 bg-muted/20 border-y border-border transition-colors duration-300">
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
              Tech_Dependencies
            </h2>
          </div>
        </motion.div>

        {/* Content */}
        <div className="md:col-span-9 space-y-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {techStackGroups.map((group, idx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-foreground font-black text-xl tracking-tight uppercase">
                    {group.title}
                  </h3>
                  <div className="h-0.5 w-6 bg-accent opacity-20" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-md bg-background border border-border text-xs font-bold text-slate-500 hover:text-accent hover:border-accent transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

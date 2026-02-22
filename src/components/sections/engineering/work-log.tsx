"use client";

import { motion } from "framer-motion";

const groups = [
  {
    role: "Senior Frontend Lead",
    organization: "DevFlow Agency",
    period: "2023 - Present",
    contributions: [
      "Orchestrated architectural migration to Next.js App Router.",
      "Developed modular UI systems with optimized technical foundations.",
      "Established engineering standards for long-term project viability.",
    ],
  },
  {
    role: "Full-stack Developer",
    organization: "Tech Solutions Inc.",
    period: "2021 - 2023",
    contributions: [
      "Engineered automated deployment pipelines (CI/CD).",
      "Optimized relational data access layers for performance.",
      "Standardized rigorous testing protocols across internal systems.",
    ],
  },
];

export default function EngineeringWorkLog() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto bg-background transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <h2 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              Work_Experience
            </h2>
          </div>
          <div className="h-px w-full bg-border" />
        </motion.div>

        <div className="md:col-span-9 space-y-20">
          {groups.map((log, idx) => (
            <motion.div
              key={log.role + idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-12 border-l border-border group"
            >
              {/* Refined Timeline Indicator */}
              <div className="absolute top-0 left-0 -translate-x-1/2 w-3 h-3 bg-border group-hover:bg-accent transition-colors duration-300 rounded-full" />

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-foreground font-black text-2xl tracking-tighter">
                      {log.role}
                    </h3>
                    <p className="text-sm text-accent font-bold tracking-wide mt-1">
                      {log.organization}
                    </p>
                  </div>
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
                    {log.period}
                  </span>
                </div>

                <ul className="grid grid-cols-1 gap-4">
                  {log.contributions.map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-500 text-base leading-relaxed flex items-start gap-4"
                    >
                      <div className="mt-2.5 w-1 h-1 rounded-full bg-border shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

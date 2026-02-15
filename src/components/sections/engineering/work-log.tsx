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
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-mono text-sm tracking-tight text-[#e57474] font-bold">
              [ work.history ]
            </h2>
          </div>
          <div className="flex gap-1.5 h-0.5">
            <div className="w-4 bg-[#e57474]" />
            <div className="w-1 bg-[#e57474] opacity-50" />
            <div className="w-0.5 bg-[#e57474] opacity-30" />
          </div>
        </motion.div>

        <div className="md:col-span-3 space-y-12 font-mono">
          {groups.map((log, idx) => (
            <motion.div
              key={log.role + idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative pl-10 border-l border-[#232a2d] group py-2"
            >
              {/* Pixel Timeline Indicator */}
              <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 border border-[#232a2d] bg-[#141b1e] group-hover:border-[#e57474] transition-colors flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#e57474] opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-[#dadada] font-bold text-xl font-sans">
                      {log.role}
                    </h3>
                    <p className="text-sm text-[#e57474]/70 tracking-tight font-bold">
                      {log.organization}
                    </p>
                  </div>
                  <span className="text-[10px] text-[#b3b9b8] bg-[#232a2d]/50 px-4 py-1.5 rounded-sm border border-[#232a2d] uppercase tracking-widest whitespace-nowrap">
                    {log.period}
                  </span>
                </div>

                <div className="text-[10px] text-[#b3b9b8]/40 uppercase tracking-[0.2em]">
                  {"// core_contributions"}
                </div>

                <ul className="space-y-4">
                  {log.contributions.map((item, i) => (
                    <li
                      key={i}
                      className="text-[#b3b9b8] text-sm leading-relaxed flex items-start gap-4"
                    >
                      <span className="mt-2 text-[#e57474] font-bold text-xs select-none">
                        #
                      </span>
                      <span className="font-sans">{item}</span>
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

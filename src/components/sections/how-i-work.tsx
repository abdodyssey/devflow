"use client";

import { motion } from "framer-motion";
import { howIWorkData } from "@/data/landing";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">
              Alur <span className="text-blue-600">Kerja Sama</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
              Proses yang terstruktur untuk memastikan setiap solusi digital
              memberikan hasil nyata bagi bisnis Anda.
            </p>
          </motion.div>
        </div>

        <div className="relative mt-20">
          {/* Vertical timeline connector */}
          <div className="absolute left-[31px] top-4 bottom-4 w-[2px] bg-slate-100 hidden sm:block" />

          <div className="space-y-20">
            {howIWorkData.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex flex-col sm:flex-row gap-10 items-start group"
              >
                {/* Step Circle */}
                <div className="z-10 flex flex-shrink-0 items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-white shadow-xl shadow-blue-900/10 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600/40">
                      Phase 0{idx + 1}
                    </span>
                    <div className="h-0.5 w-12 bg-blue-100" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
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

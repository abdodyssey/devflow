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
    <section id="solution" className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">
              Solusi Digital untuk{" "}
              <span className="text-blue-600 block mt-2">Bisnis Modern</span>
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 leading-relaxed"
          >
            Fokus kami adalah menciptakan alat digital yang menyelesaikan
            masalah nyata operasional Anda, bukan sekadar pelengkap visual.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {solutionsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group p-10 rounded-3xl border border-slate-100 bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="mb-8 inline-flex p-4 rounded-2xl bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <div className="group-hover:text-white text-blue-600 transition-colors duration-500">
                  <item.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">
                {item.title}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

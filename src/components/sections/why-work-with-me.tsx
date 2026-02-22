"use client";

import { motion } from "framer-motion";
import { whyWorkWithMeData } from "@/data/landing";
import { UserCheck } from "lucide-react";

/**
 * Premium Why Work With Me Section
 * - Digital Agency Aesthetic
 * - Strong Typography
 * - Generous Whitespace
 */

export default function WhyWorkWithMe() {
  return (
    <section
      id="why-me"
      className="py-32 px-6 bg-white relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">
          {/* Left Side: Header */}
          <div className="lg:col-span-2 space-y-8 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider"
            >
              <UserCheck className="w-3.5 h-3.5" />
              Pendekatan Kami
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl"
            >
              Kenapa Harus <br />
              <span className="text-blue-600">Terpercaya?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 leading-relaxed max-w-md"
            >
              Kami menawarkan dedikasi personal yang sulit didapatkan dari
              agensi besar. Satu pintu komunikasi, satu visi, dan eksekusi yang
              konsisten untuk kesuksesan bisnis Anda.
            </motion.p>
          </div>

          {/* Right Side: Advantage List */}
          <div className="lg:col-span-3 space-y-6 flex flex-col pt-4">
            {whyWorkWithMeData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-start gap-8 p-8 rounded-3xl border border-slate-50 bg-[#fafafa] hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group"
              >
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl text-[#0f172a] group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-base">
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

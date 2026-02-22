"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroData } from "@/data/landing";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent pt-28 pb-20">
      {/* Background Decorative Element - Full Width background area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="relative flex min-h-[70vh] w-full max-w-7xl mx-auto flex-col items-center justify-center px-6 text-center">
        {/* 2. Teks Utama dengan Animasi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 space-y-8"
        >
          <div className="inline-block px-4 py-1.5 mb-2 rounded-full border border-blue-100 bg-blue-50/50 text-blue-700 text-xs font-semibold tracking-wider uppercase">
            Digital Agency Specialist
          </div>
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-[#0f172a] md:text-7xl lg:text-8xl px-4">
            {heroData.title}
            <br />
            <span className="text-blue-600">{heroData.highlight}</span>
          </h1>
        </motion.div>

        {/* 3. Deskripsi yang lebih spesifik */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 mt-10 max-w-[750px] text-slate-600 text-lg md:text-xl leading-relaxed px-6"
        >
          {heroData.description}
        </motion.p>

        {/* 4. CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 mt-14 flex flex-col sm:flex-row items-center gap-6"
        >
          <Link
            href="#solution"
            className="group inline-flex h-16 items-center justify-center rounded-full bg-[#0f172a] px-12 text-lg font-bold text-white transition-all hover:bg-blue-700 active:scale-95 shadow-xl shadow-blue-900/10"
          >
            Lihat Solusi
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="https://wa.me/6285840858761"
            target="_blank"
            className="inline-flex h-16 items-center justify-center rounded-full border border-slate-200 bg-white px-12 text-lg font-bold text-[#0f172a] transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-95 shadow-sm"
          >
            Hubungi Kami
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

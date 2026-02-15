"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Premium CTA Section
 * - Light Minimal Theme
 * - High Impact Typography
 * - Clear Conversion Path
 */

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-32 px-6 bg-[#fafafa] relative overflow-hidden"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="bg-white border border-blue-50 p-12 md:p-24 rounded-[4rem] shadow-2xl shadow-blue-900/5 space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest"
            >
              Ready to elevate?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl font-extrabold tracking-tight text-[#0f172a] sm:text-7xl lg:text-8xl leading-[1.1]"
            >
              Siap Membenahi <br className="hidden sm:block" />
              <span className="text-blue-600">Bisnis Anda?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-xl text-slate-500 md:text-2xl max-w-2xl mx-auto leading-relaxed"
            >
              Jangan biarkan proses manual menghambat pertumbuhan. Mari kita
              diskusikan solusi digital yang paling tepat untuk efisiensi
              operasional Anda.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="https://wa.me/6285840858761?text=Halo%20saya%20ingin%20konsultasi%20tentang%20project%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto overflow-hidden group rounded-full"
            >
              <div className="relative h-16 px-12 bg-[#0f172a] text-white flex items-center justify-center gap-3 font-bold text-lg transition-all hover:bg-blue-700 active:scale-95 shadow-xl shadow-blue-900/20">
                <MessageCircle className="w-5 h-5" />
                Jadwalkan Konsultasi
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="mailto:devflow99@gmail.com"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto h-16 px-12 rounded-full border border-slate-200 bg-white text-[#0f172a] hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-lg flex items-center justify-center gap-3 shadow-md active:scale-95">
                <Mail className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                Kirim Email
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]"
          >
            <span>Respon Cepat</span>
            <span className="w-1 h-1 bg-slate-200 rounded-full" />
            <span>Diskusi Tepat Sasaran</span>
            <span className="w-1 h-1 bg-slate-200 rounded-full" />
            <span>Tanpa Kewajiban</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

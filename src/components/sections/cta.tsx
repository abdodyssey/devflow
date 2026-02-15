"use client";

import { motion } from "framer-motion";
import { ShimmerButton } from "../ui/shimmer-button";
import { MessageCircle, Mail } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="pt-24 pb-12 px-6 bg-background relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10 space-y-10">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tighter sm:text-6xl"
          >
            Siap Mendigitalkan <br className="hidden sm:block" />
            <span className="text-neutral-400">Bisnis Anda?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto"
          >
            Jangan biarkan proses manual menghambat pertumbuhan. Mari kita
            diskusikan solusi digital yang paling tepat untuk Anda.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            /* CHANGE THIS NUMBER: Ganti dengan nomor WhatsApp yang benar */
            href="https://wa.me/6285840858761?text=Halo%20saya%20ingin%20konsultasi%20tentang%20project%20saya"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <ShimmerButton className="w-full sm:w-auto h-14 px-10 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95">
              <span className="flex items-center gap-2 text-lg font-bold">
                <MessageCircle className="w-5 h-5" />
                Jadwalkan Konsultasi
              </span>
            </ShimmerButton>
          </Link>

          <Link href="mailto:devflow99@gmail.com" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto h-14 px-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all font-bold text-lg flex items-center justify-center gap-2 group shadow-lg">
              <Mail className="w-5 h-5 text-neutral-500 group-hover:text-primary transition-colors" />
              Kirim Email
            </button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-xs text-neutral-500 uppercase tracking-widest font-medium"
        >
          Respon Cepat • Diskusi Tepat Sasaran • Tanpa Kewajiban
        </motion.p>
      </div>
    </section>
  );
}

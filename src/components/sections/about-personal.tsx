"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User } from "lucide-react";

export default function AboutPersonal() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-neutral-50/50 dark:bg-neutral-900/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl">
              <Image
                src="/images/pasfoto-abdi.jpeg"
                alt="M. Abdi Nugroho"
                fill
                className="object-cover  transition-all duration-700"
              />
            </div>
            {/* Floating badge or element */}
            <div className="absolute -bottom-6 -right-6 p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-800 hidden sm:block">
              <p className="text-sm font-bold tracking-tight">
                Tech & Problem Solver
              </p>
              <p className="text-xs text-muted-foreground">
                Focused on Business Growth
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase"
            >
              <User className="w-3 h-3" />
              Tentang Saya
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl"
            >
              Mengenal Sosok di <br />
              <span className="text-neutral-400">Balik Layar</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                Saya adalah seorang{" "}
                <span className="text-foreground font-semibold">
                  problem solver
                </span>{" "}
                yang fokus membantu bisnis menyelesaikan tantangan operasional
                dan digital.
              </p>
              <p>
                Dengan pendekatan yang personal dan fleksibel, saya bekerja
                langsung dengan klien untuk memastikan solusi yang saya rancang
                benar-benar sesuai dengan kebutuhan dan tujuan bisnis Anda.
              </p>
              <p>
                Bagi saya, teknologi hanyalah alat. Tujuan utamanya tetaplah
                bagaimana teknologi tersebut bisa membuat kerja Anda lebih
                ringan, lebih cepat, dan menghasilkan dampak yang nyata.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
                <span className="text-sm font-medium italic">
                  M. Abdi Nugroho
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

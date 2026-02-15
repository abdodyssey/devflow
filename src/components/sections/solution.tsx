"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, TrendingUp, ShieldCheck } from "lucide-react";

const solutions = [
  {
    title: "Transformasi Operasional",
    description:
      "Ubah proses manual yang lambat menjadi alur kerja digital yang terotomatisasi. Efisiensi meningkat, kesalahan manusia berkurang drastis.",
    icon: <Sparkles className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Otomatisasi Cerdas",
    description:
      "Biarkan teknologi bekerja untuk Anda. Sistem akan menangani tugas administratif rutin secara otomatis, memberi Anda waktu untuk fokus pada strategi.",
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
  },
  {
    title: "Skalabilitas Bisnis",
    description:
      "Bangun fondasi teknologi yang kokoh. Sistem dirancang untuk tetap stabil dan cepat bahkan saat transaksi bisnis Anda meningkat berkali lipat.",
    icon: <TrendingUp className="h-6 w-6 text-green-500" />,
  },
  {
    title: "Solusi Tepat Guna",
    description:
      "Fokus pada dampak, bukan kerumitan. Antarmuka yang intuitif memastikan tim Anda dapat langsung menggunakan sistem tanpa pelatihan panjang.",
    icon: <ShieldCheck className="h-6 w-6 text-purple-500" />,
  },
];

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-32 px-6 bg-neutral-50 dark:bg-neutral-900/20"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl"
          >
            Solusi Digital untuk{" "}
            <span className="text-neutral-400">Bisnis Anda</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Fokus kami adalah menciptakan alat digital yang menyelesaikan
            masalah nyata operasional Anda, bukan sekadar pelengkap visual.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

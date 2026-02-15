"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, TrendingUp, ShieldCheck } from "lucide-react";

const solutions = [
  {
    title: "Sederhanakan Operasional Bisnis",
    description:
      "Ubah alur kerja manual yang rumit menjadi sistem web yang efisien, terstruktur, dan mudah dikelola.",
    icon: <Sparkles className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Otomatisasi Tugas Repetitif",
    description:
      "Hemat waktu dan biaya dengan mengotomatisasi tugas berulang, sehingga tim Anda bisa fokus pada hal strategis.",
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
  },
  {
    title: "Sistem yang Siap Tumbuh",
    description:
      "Bangun pondasi digital yang tidak hanya bagus sekarang, tapi siap menampung lonjakan bisnis Anda di masa depan.",
    icon: <TrendingUp className="h-6 w-6 text-green-500" />,
  },
  {
    title: "Solusi Tepat Guna",
    description:
      "Bukan sekadar fitur canggih, tapi fitur yang benar-benar menyelesaikan masalah spesifik dalam bisnis Anda.",
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
            The Solutions <span className="text-neutral-400">I Offer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Saya tidak menjual produk atau fitur, tetapi membantu merancang
            solusi yang sesuai dengan kondisi dan tujuan bisnis Anda.
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

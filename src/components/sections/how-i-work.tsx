"use client";

import { motion } from "framer-motion";
import { Search, Target, PenTool, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    title: "Memahami Bisnis Anda",
    description:
      "Saya mempelajari proses dan tantangan bisnis secara menyeluruh untuk mendapatkan gambaran yang utuh.",
    icon: Search,
    color: "bg-blue-500",
  },
  {
    title: "Menentukan Masalah Utama",
    description:
      "Fokus pada masalah yang paling berdampak signifikan terhadap operasional dan efisiensi bisnis.",
    icon: Target,
    color: "bg-red-500",
  },
  {
    title: "Merancang Solusi yang Tepat",
    description:
      "Solusi teknis dirancang dan disesuaikan secara spesifik dengan kebutuhan nyata serta tujuan bisnis Anda.",
    icon: PenTool,
    color: "bg-yellow-500",
  },
  {
    title: "Implementasi & Pendampingan",
    description:
      "Saya memastikan solusi tidak hanya diinstal, tapi juga dapat digunakan dengan baik oleh tim Anda.",
    icon: Rocket,
    color: "bg-green-500",
  },
  {
    title: "Evaluasi & Pengembangan",
    description:
      "Solusi siap disesuaikan dan dikembangkan lebih lanjut seiring dengan pertumbuhan skala bisnis.",
    icon: BarChart3,
    color: "bg-purple-500",
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl"
          >
            Cara Saya <span className="text-neutral-400">Bekerja</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg">
            Alur kerja yang terstruktur untuk memastikan setiap solusi
            memberikan dampak maksimal.
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Vertical line for timeline */}
          <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-neutral-200 dark:bg-neutral-800 hidden sm:block" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col sm:flex-row gap-8 items-start"
            >
              <div
                className={`z-10 flex flex-shrink-0 items-center justify-center w-14 h-14 rounded-2xl ${step.color} text-white shadow-lg`}
              >
                <step.icon className="w-7 h-7" />
              </div>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Step 0{idx + 1}
                  </span>
                  <div className="h-px w-8 bg-neutral-200 dark:bg-neutral-800" />
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

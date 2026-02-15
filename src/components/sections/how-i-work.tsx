"use client";

import { motion } from "framer-motion";
import { Search, Target, PenTool, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    title: "Diskusi & Pemahaman Masalah",
    description:
      "Kita mulai dengan diskusi mendalam. Kami perlu mengerti di mana letak kebocoran efisiensi bisnis Anda sebelum menawarkan solusi.",
    icon: Search,
    color: "bg-blue-500",
  },
  {
    title: "Perancangan Strategi",
    description:
      "Kami merancang sistem yang tidak hanya canggih, tapi juga mudah digunakan oleh tim Anda. Solusi yang pas, bukan yang paling mahal.",
    icon: Target,
    color: "bg-red-500",
  },
  {
    title: "Eksekusi & Pengembangan",
    description:
      "Proses pengerjaan dilakukan dengan terstruktur dan teliti. Fokus pada keamanan data, kecepatan akses, dan kestabilan sistem.",
    icon: PenTool,
    color: "bg-yellow-500",
  },
  {
    title: "Pelatihan & Serah Terima",
    description:
      "Sistem baru tidak akan berguna jika sulit dipakai. Kami akan melatih tim Anda sampai mereka benar-benar nyaman menggunakannya.",
    icon: Rocket,
    color: "bg-green-500",
  },
  {
    title: "Pendampingan Jangka Panjang",
    description:
      "Bisnis Anda terus bergerak, begitupun teknologinya. Kami siap membantu update dan maintenance agar sistem selalu optimal.",
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
            Alur <span className="text-neutral-400">Kerja Sama</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg">
            Proses yang terstruktur untuk memastikan setiap solusi digital
            memberikan hasil nyata bagi bisnis Anda.
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
                className={`z-10 flex flex-shrink-0 items-center justify-center w-14 h-14 rounded-xl ${step.color} text-white shadow-lg`}
              >
                <step.icon className="w-7 h-7" />
              </div>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Tahap 0{idx + 1}
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

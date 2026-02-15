"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Settings2,
  Zap,
  Target,
  Handshake,
  UserCheck,
} from "lucide-react";

const advantages = [
  {
    title: "Mindset Bisnis, Bukan Cuma Kode",
    description:
      "Saya mengerti bahwa kode hanyalah alat. Tujuan akhirnya adalah profit, efisiensi, dan pertumbuhan bisnis Anda.",
    icon: Target,
    color: "text-blue-500",
  },
  {
    title: "Komunikasi Tanpa Perantara",
    description:
      "Anda bicara langsung dengan pembuatnya. Tidak ada miskomunikasi lewat account manager atau sales.",
    icon: MessageSquare,
    color: "text-purple-500",
  },
  {
    title: "Biaya Lebih Efisien",
    description:
      "Tanpa overhead agensi besar, Anda mendapatkan kualitas premium dengan investasi yang lebih masuk akal.",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    title: "Solusi Custom & Fleksibel",
    description:
      "Tidak ada template kaku. Sistem dibangun mengikuti cara kerja bisnis Anda, bukan sebaliknya.",
    icon: Settings2,
    color: "text-red-500",
  },
  {
    title: "Partner Jangka Panjang",
    description:
      "Saya tidak lari setelah project selesai. Saya siap menjadi partner teknis yang menjaga sistem tetap berjalan optimal.",
    icon: Handshake,
    color: "text-green-500",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section
      id="why-me"
      className="py-32 px-6 bg-background relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Side: Header */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider"
            >
              <UserCheck className="w-3 h-3" />
              The Solo Advantage
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl"
            >
              Why Work <br />
              <span className="text-neutral-400">With Me?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Saya menawarkan keunggulan dari model{" "}
              <span className="text-foreground font-semibold">Solo Agency</span>{" "}
              yang mengutamakan kedekatan, kecepatan, dan kualitas yang sangat
              terjaga.
            </motion.p>
          </div>

          {/* Right Side: Advantage List */}
          <div className="lg:col-span-3 space-y-4">
            {advantages.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 transition-colors group"
              >
                <div
                  className={`p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground leading-snug text-sm sm:text-base">
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

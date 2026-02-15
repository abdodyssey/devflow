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
    title: "Orientasi Profit & Efisiensi",
    description:
      "Lebih dari sekadar kode. Kami merancang sistem yang berdampak langsung pada penghematan biaya dan peningkatan profit bisnis Anda.",
    icon: Target,
    color: "text-blue-500",
  },
  {
    title: "Komunikasi Langsung",
    description:
      "Anda berdiskusi langsung dengan pembuatnya. Tidak ada distorsi informasi lewat sales atau project manager.",
    icon: MessageSquare,
    color: "text-purple-500",
  },
  {
    title: "Investasi Cerdas",
    description:
      "Dapatkan kualitas sistem kelas atas dengan biaya yang dialokasikan sepenuhnya untuk pengembangan, bukan overhead kantor mewah.",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    title: "Sesuai Karakter Bisnis",
    description:
      "Anda tidak perlu mengubah cara kerja demi sistem. Kami yang membangun sistem agar pas dengan alur unik bisnis Anda.",
    icon: Settings2,
    color: "text-red-500",
  },
  {
    title: "Dukungan Berkelanjutan",
    description:
      "Hubungan kita tidak putus saat website rilis. Kami siap menjaga performa sistem Anda dalam jangka panjang.",
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
              Pendekatan Kami
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl"
            >
              Kenapa Harus <br />
              <span className="text-neutral-400">Kami?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Kami menawarkan dedikasi personal yang sulit didapatkan dari
              agensi besar. Satu pintu komunikasi, satu visi, dan eksekusi yang
              konsisten untuk bisnis Anda.
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

"use client";

import { motion } from "framer-motion";
import { Store, LineChart, Workflow, Users } from "lucide-react";
import { MagicCard } from "../ui/magic-card";

const targets = [
  {
    title: "Pemilik Bisnis & UMKM",
    description:
      "Ingin beralih ke digital, menjangkau pasar lebih luas, dan mengelola pesanan dengan lebih teratur.",
    icon: Store,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Perusahaan Berkembang",
    description:
      "Membutuhkan sistem yang bisa menangani lonjakan transaksi dan pelanggan tanpa menambah beban kerja manual tim.",
    icon: LineChart,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Startups & Visioner",
    description:
      "Membutuhkan MVP atau prototipe fungsional untuk menguji ide bisnis dengan cepat dan efisien.",
    icon: Users,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export default function WhoIHelp() {
  return (
    <section
      id="who-i-help"
      className="py-32 px-6 bg-neutral-50/50 dark:bg-neutral-900/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl"
          >
            Who Can I <span className="text-neutral-400">Help?</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Solusi yang saya tawarkan dirancang khusus untuk berbagai skala dan
            kebutuhan entitas bisnis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {targets.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <MagicCard
                className="h-full rounded-2xl"
                gradientColor="rgba(59, 130, 246, 0.15)"
              >
                <div className="p-8 flex flex-col items-start h-full">
                  <div
                    className={`mb-6 p-3 rounded-xl ${item.bg} flex items-center justify-center`}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

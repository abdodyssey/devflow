"use client";

import { motion } from "framer-motion";
import { Store, LineChart, Workflow, Users } from "lucide-react";
import { MagicCard } from "../ui/magic-card";

const targets = [
  {
    title: "Pemilik UMKM",
    description:
      "Membantu digitalisasi usaha kecil untuk menjangkau pasar lebih luas dan manajemen yang lebih rapi.",
    icon: <Store className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Bisnis yang Sedang Berkembang",
    description:
      "Menyediakan sistem yang siap diskalakan seiring dengan bertambahnya jumlah pelanggan dan transaksi.",
    icon: <LineChart className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Perusahaan & Sistemasi",
    description:
      "Merapikan alur kerja manual yang berantakan menjadi sistem digital yang terintegrasi dan efisien.",
    icon: <Workflow className="w-10 h-10 text-purple-500" />,
  },
  {
    title: "Tim Kecil & Individu",
    description:
      "Solusi tepat guna untuk tim kecil yang membutuhkan tools spesifik tanpa biaya operasional yang besar.",
    icon: <Users className="w-10 h-10 text-orange-500" />,
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
            Siapa yang Bisa{" "}
            <span className="text-neutral-400">Saya Bantu?</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Solusi yang saya tawarkan dirancang khusus untuk berbagai skala dan
            kebutuhan entitas bisnis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <MagicCard
                className="p-8 h-full flex flex-col items-center text-center space-y-4"
                gradientColor="rgba(59, 130, 246, 0.15)"
              >
                <div className="mb-2 p-4 rounded-full bg-neutral-100 dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

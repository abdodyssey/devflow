"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import {
  Activity,
  Database,
  TrendingDown,
  Layers,
  Clock,
  AlertCircle,
} from "lucide-react";

const problems = [
  {
    name: "Proses Manual & Tidak Efisien",
    description:
      "Banyak bisnis masih mengandalkan proses manual yang memakan waktu dan rentan terhadap kesalahan manusia.",
    Icon: Activity,
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "Data Tidak Tertata",
    description:
      "Informasi bisnis tersebar di mana-mana, sehingga sulit untuk dianalisis dan dijadikan dasar pengambilan keputusan.",
    Icon: Database,
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "Pertumbuhan Terhambat",
    description:
      "Sistem yang ada tidak dirancang untuk berkembang bersama bisnis Anda, menciptakan 'bottleneck' pada operasional.",
    Icon: TrendingDown,
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "Tools Tidak Terintegrasi",
    description:
      "Terlalu banyak aplikasi yang digunakan secara terpisah, tanpa sinkronisasi data yang otomatis.",
    Icon: Layers,
    className: "col-span-3 lg:col-span-2",
  },
  {
    name: "Pemborosan Waktu & Biaya",
    description:
      "Kompleksitas proses yang tidak perlu mengakibatkan biaya operasional membengkak dan hilangnya peluang berharga.",
    Icon: Clock,
    className: "col-span-3 lg:col-span-1",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium mb-4"
          >
            <AlertCircle className="w-3 h-3" />
            Common Challenges
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl"
          >
            Banyak Bisnis Mengalami <br className="hidden sm:block" />
            <span className="text-neutral-400">Masalah yang Sama</span>
          </motion.h2>
        </div>

        <BentoGrid className="lg:grid-rows-2">
          {problems.map((problem, idx) => (
            <BentoCard key={idx} {...problem} />
          ))}
        </BentoGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            "Masalah-masalah ini sering muncul karena solusi yang digunakan
            tidak benar-benar disesuaikan dengan kebutuhan bisnis."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

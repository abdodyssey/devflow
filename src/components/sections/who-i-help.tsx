"use client";

import { motion } from "framer-motion";
import { Store, LineChart, Users } from "lucide-react";

/**
 * Premium Who I Help Section
 * - Light Minimal Design
 * - Trusted feel
 * - Generous spacing
 */

const targets = [
  {
    title: "Pemilik Bisnis & UMKM",
    description:
      "Anda yang ingin bisnisnya 'naik kelas'. Punya website resmi agar lebih dipercaya, serta sistem operasional yang tidak lagi manual.",
    icon: Store,
  },
  {
    title: "Perusahaan Berkembang",
    description:
      "Bisnis yang transaksinya makin ramai. Anda butuh sistem inventory, keuangan, atau manajemen tim yang lebih serius dan terintegrasi.",
    icon: LineChart,
  },
  {
    title: "Organisasi & Profesional",
    description:
      "Institusi, komunitas, atau konsultan yang membutuhkan platform digital representatif untuk menjangkau audiens dan melayani anggota.",
    icon: Users,
  },
];

export default function WhoIHelp() {
  return (
    <section id="who-i-help" className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl lg:text-5xl">
              Siapa yang Cocok <br />
              <span className="text-blue-600">Kami Bantu?</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Layanan kami dirancang khusus untuk Anda yang serius ingin membenahi
            fondasi digital bisnis, dari skala kecil hingga menengah.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group"
            >
              <div className="mb-8 flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                {item.title}
              </h3>
              <p className="text-slate-500 text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

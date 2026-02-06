"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Settings } from "lucide-react";

export default function WhatIsDevflow() {
    const features = [
        {
            icon: <Globe className="h-6 w-6" />,
            title: "Digital Solutions",
            desc: "Pengembangan aplikasi web dan sistem informasi modern berbasis Next.js dan Laravel."
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: "AI Automation",
            desc: "Optimalisasi proses bisnis melalui integrasi AI, LLM, dan workflow automation yang efisien."
        },
        {
            icon: <Settings className="h-6 w-6" />,
            title: "Technical Support",
            desc: "Layanan pemeliharaan sistem, optimasi perangkat, hingga peningkatan performa hardware."
        }
    ];

    return (
        <section id="agency" className="py-24 px-6 bg-background overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Sisi Kiri: Branding Narasi */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                            What is <span className="text-neutral-400">Devflow?</span>
                        </h2>

                        <div className="prose prose-neutral dark:prose-invert">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Devflow adalah sebuah creative technology agency berbasis di Palembang yang berfokus pada transformasi ide kompleks menjadi solusi digital yang fungsional, terukur, dan berkelanjutan.
                            </p>

                            <p className="text-neutral-500">
                                Kami mengedepankan proses pengembangan yang terstruktur, transparan, dan berorientasi pada kebutuhan bisnis, dengan pendekatan teknologi modern yang menyesuaikan skala dan tujuan setiap klien.
                            </p>

                            <p className="text-neutral-500">
                                Dengan keahlian di bidang pengembangan website dan web application, AI automation, serta integrasi kecerdasan buatan ke dalam sistem digital, Devflow hadir sebagai mitra teknologi strategis untuk membantu organisasi meningkatkan efisiensi, performa, dan daya saing digital.
                            </p>
                        </div>
                    </div>

                    {/* Sisi Kanan: Keunggulan */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, duration: 0.5 }}
                                className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-black transition-colors group"
                            >
                                <div className="mb-4 text-neutral-900 dark:text-neutral-100 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                <p className="text-sm text-neutral-500 leading-snug">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

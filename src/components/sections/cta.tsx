"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import Link from "next/link";

import { ctaData, socialLinks } from "@/data/landing";

/**
 * Premium CTA Section
 * - Light Minimal Theme
 * - High Impact Typography
 * - Clear Conversion Path
 */

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-32 px-6 bg-background relative overflow-hidden border-t border-border transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-muted/30 border border-border p-12 md:p-32 rounded-[3.5rem] space-y-16 text-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 justify-center"
            >
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Contact_Initiative
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-[100px] font-black tracking-tight text-foreground leading-[0.9] max-w-4xl mx-auto"
            >
              {ctaData.title} <br />
              <span className="text-accent">{ctaData.highlight}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
            >
              {ctaData.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-16 px-12 flex items-center justify-center bg-primary text-primary-foreground font-bold rounded-2xl transition-all hover:bg-accent hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-accent/10"
            >
              <MessageCircle className="w-4 h-4 mr-3" />
              Jadwalkan Konsultasi
            </Link>

            <Link
              href={socialLinks.email}
              className="h-16 px-12 flex items-center justify-center bg-background border border-border text-foreground font-bold rounded-2xl transition-all hover:bg-sky-50 dark:hover:bg-sky-950/30 hover:text-sky-600 hover:border-sky-600 active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 mr-3 text-slate-400 group-hover:text-sky-600" />
              Kirim Email
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]"
          >
            <span>Response within 24h</span>
            <span className="w-1 h-1 bg-border rounded-full" />
            <span>Technical assessment</span>
            <span className="w-1 h-1 bg-border rounded-full" />
            <span>Zero obligation</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

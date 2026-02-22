"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Terminal, Instagram } from "lucide-react";
import Link from "next/link";

const PixelArrow = () => (
  <div className="flex items-center gap-0.5 mr-3">
    <div className="w-1 h-3 bg-accent" />
    <div className="w-1 h-1 bg-accent" />
  </div>
);

export default function EngineeringContact() {
  return (
    <section
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border bg-background transition-colors duration-300"
      id="contact"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <h2 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              Contact_Endpoint
            </h2>
          </div>
          <div className="h-px w-full bg-border" />
        </motion.div>

        <div className="md:col-span-9 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          <div className="space-y-12">
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-md">
              Inquiries regarding system design or software engineering services
              are processed via the primary secure endpoint.
            </p>

            <div className="space-y-6">
              <Link
                href="mailto:devflow99@gmail.com"
                className="group flex items-center text-foreground hover:text-accent font-black text-2xl md:text-3xl tracking-tighter transition-colors"
              >
                <PixelArrow />
                <span className="border-b-2 border-border group-hover:border-accent/40 pb-1 transition-all">
                  devflow99@gmail.com
                </span>
              </Link>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/abdodyssey"
              target="_blank"
              className="group w-14 h-14 rounded-2xl border border-border bg-muted/30 flex items-center justify-center text-slate-400 hover:text-[#6366f1] hover:border-[#6366f1] dark:hover:bg-indigo-950/30 hover:bg-indigo-50 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com/devflow___"
              target="_blank"
              className="group w-14 h-14 rounded-2xl border border-border bg-muted/30 flex items-center justify-center text-slate-400 hover:text-[#f43f5e] hover:border-[#f43f5e] dark:hover:bg-rose-950/30 hover:bg-rose-50 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="group w-14 h-14 rounded-2xl border border-border bg-muted/30 flex items-center justify-center text-slate-400 hover:text-[#0ea5e9] hover:border-[#0ea5e9] dark:hover:bg-sky-950/30 hover:bg-sky-50 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer System Telemetry */}
      <div className="mt-40 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6 opacity-50">
        <div className="flex items-center gap-4 text-[9px] font-mono font-black text-slate-400 uppercase tracking-[0.3em]">
          <Terminal className="w-3 h-3" />
          <span>os: engineering_lab_v2</span>
          <span className="w-1 h-1 bg-border rounded-full" />
          <span>status: stable_production</span>
        </div>
        <p className="font-mono text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
          Handcrafted Infrastructure © 2026
        </p>
      </div>
    </section>
  );
}

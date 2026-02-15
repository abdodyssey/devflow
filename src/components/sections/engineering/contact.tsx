"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Terminal, Instagram } from "lucide-react";
import Link from "next/link";

const PixelArrow = () => (
  <div className="flex items-center gap-0.5 mr-3">
    <div className="w-1 h-3 bg-[#e57474]" />
    <div className="w-1 h-1 bg-[#e57474]" />
  </div>
);

export default function EngineeringContact() {
  return (
    <section
      className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-[#232a2d]/40"
      id="contact"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 bg-[#e57474]" />
            <h2 className="font-mono text-sm tracking-tight text-[#e57474] font-bold">
              [ contact.endpoint ]
            </h2>
          </div>
          <div className="flex gap-1.5 h-0.5">
            <div className="w-4 bg-[#e57474]" />
            <div className="w-1 bg-[#e57474] opacity-50" />
            <div className="w-0.5 bg-[#e57474] opacity-30" />
          </div>
        </motion.div>

        <div className="md:col-span-3 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          <div className="space-y-10">
            <p className="text-[#b3b9b8] text-base leading-relaxed max-w-sm">
              Inquiries regarding system design or software engineering services
              are processed via the primary endpoint.
            </p>

            <div className="space-y-6">
              <Link
                href="mailto:devflow99@gmail.com"
                className="group flex items-center text-[#dadada] hover:text-[#e57474] font-mono text-sm transition-colors"
              >
                <PixelArrow />
                <span className="border-b border-transparent group-hover:border-[#e57474]/40 pb-0.5">
                  devflow99@gmail.com
                </span>
              </Link>
            </div>
          </div>

          <div className="flex gap-6">
            <Link
              href="https://github.com/abdodyssey"
              target="_blank"
              className="group relative p-4 border border-[#232a2d] hover:border-[#e57474]/50 bg-[#1c2326]/50 text-[#b3b9b8] hover:text-[#dadada] transition-all"
            >
              {/* Pixel corners for icon blocks */}
              <div className="absolute top-0 left-0 w-1 h-1 bg-[#e57474] opacity-0 group-hover:opacity-60" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#e57474] opacity-0 group-hover:opacity-60" />
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com/devflow___"
              target="_blank"
              className="group relative p-4 border border-[#232a2d] hover:border-[#e57474]/50 bg-[#1c2326]/50 text-[#b3b9b8] hover:text-[#dadada] transition-all"
            >
              <div className="absolute top-0 left-0 w-1 h-1 bg-[#e57474] opacity-0 group-hover:opacity-60" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#e57474] opacity-0 group-hover:opacity-60" />
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="group relative p-4 border border-[#232a2d] hover:border-[#e57474]/50 bg-[#1c2326]/50 text-[#b3b9b8] hover:text-[#dadada] transition-all"
            >
              <div className="absolute top-0 left-0 w-1 h-1 bg-[#e57474] opacity-0 group-hover:opacity-60" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#e57474] opacity-0 group-hover:opacity-60" />
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer System Telemetry */}
      <div className="mt-40 pt-10 border-t border-[#232a2d]/20 flex flex-col sm:flex-row items-center justify-between gap-6 opacity-40">
        <div className="flex items-center gap-4 text-[9px] font-mono text-[#b3b9b8] uppercase tracking-[0.3em]">
          <Terminal className="w-3 h-3" />
          <span>os: engineering_lab</span>
          <span className="w-1 h-1 bg-[#232a2d] rounded-full" />
          <span>status: stable</span>
        </div>
        <p className="font-mono text-[9px] text-[#b3b9b8] uppercase tracking-[0.2em]">
          Handcrafted Infrastructure © 2026
        </p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function EngineeringContact() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-[#232a2d]/40">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-mono text-sm tracking-tight text-[#e57474] font-bold">
              [ contact.endpoint ]
            </h2>
          </div>
        </motion.div>

        <div className="md:col-span-3 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          <div className="space-y-8">
            <p className="text-[#b3b9b8] text-base leading-relaxed max-w-sm">
              Inquiries regarding system design or software engineering services
              are processed via the primary endpoint.
            </p>

            <div className="space-y-4">
              <Link
                href="mailto:devflow99@gmail.com"
                className="group flex items-center gap-4 text-[#dadada] hover:text-[#e57474] font-mono text-sm transition-colors"
              >
                <div className="p-3 border border-[#232a2d] bg-[#1c2326]/50 group-hover:border-[#e57474]/50 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                devflow99@gmail.com
              </Link>
            </div>
          </div>

          <div className="flex gap-8">
            <Link
              href="https://github.com/abdodyssey"
              target="_blank"
              className="group p-4 border border-[#232a2d] hover:border-[#f2cecf]/30 hover:bg-[#232a2d]/50 text-[#b3b9b8] hover:text-[#dadada] transition-all"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="group p-4 border border-[#232a2d] hover:border-[#f2cecf]/30 hover:bg-[#232a2d]/50 text-[#b3b9b8] hover:text-[#dadada] transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-32 pt-10 border-t border-[#232a2d]/20 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
        <div className="flex items-center gap-4 text-[9px] font-mono text-[#b3b9b8] opacity-50 uppercase tracking-[0.3em]">
          <span>Arch_x64</span>
          <span className="w-1 h-1 bg-[#232a2d] rounded-full" />
          <span>Everblush_v1.0</span>
          <span className="w-1 h-1 bg-[#232a2d] rounded-full" />
          {/* Scrolling Kernel Log Ticker */}
          <div className="hidden lg:flex items-center gap-2 max-w-[300px] overflow-hidden whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-4"
            >
              <span className="text-[#8ccf7e]/40">
                [ 1.0420] systemd[1]: Reached target Graphical Interface.
              </span>
              <span className="text-[#8ccf7e]/40">
                [ 1.0435] audit: type=1400 integrity: versioning enabled
              </span>
              <span className="text-[#8ccf7e]/40">
                [ 1.0501] docker0: port 1(veth) entered blocking state
              </span>
              <span className="text-[#8ccf7e]/40">
                [ 1.0620] systemd[1]: Startup finished in 1.2s (kernel) + 4.5s
                (userspace).
              </span>
            </motion.div>
          </div>
        </div>
        <p className="font-mono text-[9px] text-[#b3b9b8] opacity-50 uppercase tracking-[0.2em]">
          Handcrafted Infrastructure © 2026
        </p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Code2, Cpu } from "lucide-react";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";

/**
 * Portfolio Teaser Section
 * - High-tech aesthetic
 * - Directs users to the engineering lab/portfolio
 */

export default function PortfolioTeaser() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="relative group rounded-[3rem] border border-border bg-muted/20 p-8 md:p-20 overflow-hidden">
          {/* Animated Background Element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

          <BorderBeam size={250} duration={12} delay={9} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-background"
              >
                <div className="flex -space-x-2">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                    <Code2 className="w-3 h-3 text-indigo-400" />
                  </div>
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                    <Cpu className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-slate-500">
                  Engineering_Lab::v2.0
                </span>
              </motion.div>

              <div className="space-y-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[0.95]"
                >
                  Ingin melihat bagaimana <br />
                  <span className="text-accent italic">kami membangunnya?</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed"
                >
                  Kunjungi ruang eksperimen kami untuk melihat dokumentasi
                  teknis, arsitektur sistem, dan project personal yang mendasari
                  standar kualitas agensi.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <Link href="/portfolio">
                  <ShimmerButton
                    className="shadow-2xl"
                    background="var(--primary)"
                    shimmerColor="#ffffff"
                  >
                    <span className="whitespace-pre-wrap text-center text-sm font-black leading-none tracking-tight text-primary-foreground lg:text-lg flex items-center gap-2">
                      Eksplorasi Engineering Lab
                      <ArrowRight className="w-5 h-5 shrink-0" />
                    </span>
                  </ShimmerButton>
                </Link>
              </motion.div>
            </div>

            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-square bg-background/50 rounded-3xl border border-border p-8 flex flex-col justify-between overflow-hidden shadow-2xl"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      System_Load
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className={`w-1 h-3 rounded-full ${
                            i < 5 ? "bg-accent" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <Terminal className="text-accent w-6 h-6" />
                </div>

                <div className="space-y-4">
                  <div className="font-mono text-[10px] text-accent opacity-50">
                    &gt; cat architecture_v2.md <br />
                    &gt; loading system profile...
                  </div>
                  <div className="h-px w-full bg-border" />
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>STABLE_RELIABILITY</span>
                    <span>100%_UPTIME</span>
                  </div>
                </div>

                {/* Decorative Grid inside the box */}
                <div className="absolute inset-0 opacity-[0.03] bg-size-[20px_20px] bg-[linear-gradient(to_right,var(--accent)_1px,transparent_1px),linear-gradient(to_bottom,var(--accent)_1px,transparent_1px)] pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

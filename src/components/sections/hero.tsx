"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { RetroGrid } from "../ui/retro-grid";
import { motion } from "framer-motion";
import { ShimmerButton } from "../ui/shimmer-button";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen w-full max-w-7xl mx-auto flex-col items-center justify-center overflow-hidden bg-background">
      {/* 2. Teks Utama dengan Animasi */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pointer-events-none pt-10 z-10 whitespace-pre-wrap bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-center text-4xl font-bold leading-none tracking-tighter text-transparent md:text-6xl"
      >
        Transformasi Digital
        <br />
        untuk Bisnis Anda
      </motion.h1>

      {/* 3. Deskripsi yang lebih spesifik */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="z-10 mt-6 max-w-[600px] text-center text-muted-foreground md:text-xl px-6"
      >
        Miliki website profesional dan sistem manajemen yang terintegrasi untuk
        mendigitalkan operasional bisnis Anda agar lebih efisien, efektif, dan
        siap tumbuh.
      </motion.p>

      {/* 4. CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="z-10 mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <Link
          href="#solution"
          className="group inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:ring-4 hover:ring-primary/20 active:scale-95"
        >
          Lihat Solusi
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <Link href="#cta">
          <ShimmerButton className="cursor-pointer h-12 items-center justify-center rounded-full border border-border dark:bg-background bg-background px-8 text-sm font-semibold transition-all hover:bg-muted active:scale-95">
            Hubungi Kami
          </ShimmerButton>
        </Link>
      </motion.div>

      {/* Efek Background */}
      <RetroGrid className="opacity-50" />

      {/* Overlay Gradient (Bikin transisi ke section bawah lebih smooth) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent z-10" />
    </div>
  );
}

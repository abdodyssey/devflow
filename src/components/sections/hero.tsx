"use client";

import { ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { RetroGrid } from "../ui/retro-grid";
import { motion } from "framer-motion";
import { ShimmerButton } from "../ui/shimmer-button";

export default function Hero() {
    return (
        <div className="relative flex h-[600px] max-w-4xl mx-auto flex-col items-center justify-center mt-8 overflow-hidden bg-background">
           

            {/* 2. Teks Utama dengan Animasi */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pointer-events-none pt-10 z-10 whitespace-pre-wrap bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent md:text-8xl"
            >
                Build with devflow.
            </motion.h1>

            {/* 3. Deskripsi yang lebih spesifik */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="z-10 mt-6 max-w-[600px] text-center text-muted-foreground md:text-xl px-6"
            >
                Software Engineer specializing in <span className="text-foreground font-medium">Scalable Systems</span> and <span className="text-foreground font-medium">AI Automation</span>.
                Helping businesses transform ideas into high-performance digital solutions.
            </motion.p>

            {/* 4. CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="z-10 mt-10 flex flex-col sm:flex-row items-center gap-4"
            >
                <Link
                    href="#projects"
                    className="group inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:ring-4 hover:ring-primary/20 active:scale-95"
                >
                    Explore Projects
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link href="#contact">
                    <ShimmerButton className="cursor-pointer h-12 items-center justify-center rounded-full border border-border dark:bg-background bg-background px-8 text-sm font-semibold transition-all hover:bg-muted active:scale-95">
                        Let&apos;s Talk
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
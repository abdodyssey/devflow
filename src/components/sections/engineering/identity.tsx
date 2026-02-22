"use client";

import { motion } from "framer-motion";

export default function EngineeringIdentity() {
  return (
    <section className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto bg-background transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        {/* Left Side: Modern Identity Branding */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-8 space-y-12"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-muted/30"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-slate-500">
                System_Status::Active
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.85] tracking-[-0.06em] text-foreground">
              M. Abdi <br />
              <span className="text-accent underline decoration-[8px] decoration-accent/10 underline-offset-8">
                Nugroho
              </span>
            </h1>

            <p className="text-xl md:text-3xl font-bold text-slate-500 tracking-tight max-w-2xl leading-tight">
              A software engineer dedicated to building high-performance
              architectures and intentional digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-border">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-400">
                Primary_Specialization
              </span>
              <div className="text-lg font-bold text-foreground">
                Full-stack Systems
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-400">
                Current_Base
              </span>
              <div className="text-lg font-bold text-foreground">
                Jakarta, ID
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Abstract Studio Accents */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 relative aspect-square hidden md:block group"
        >
          <div className="absolute inset-0 bg-accent/5 rounded-3xl border border-accent/10 flex items-center justify-center overflow-hidden">
            {/* Ambient Background Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 h-64 bg-accent/10 blur-[100px] rounded-full"
            />

            <div className="relative w-64 h-64 border border-border/50 rounded-full flex items-center justify-center">
              {/* Outer Orbit with Dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-accent/20 rounded-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-background border border-accent rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                </div>
              </motion.div>

              {/* Middle Orbit with Offset Dot */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-border/80 rounded-full"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]" />
              </motion.div>

              {/* Inner Core */}
              <div className="relative w-32 h-32 border border-border/50 rounded-full flex items-center justify-center bg-background/50 backdrop-blur-sm">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 border border-accent/30 rounded-lg flex items-center justify-center"
                >
                  <div className="w-4 h-4 bg-accent rounded-full" />
                </motion.div>
              </div>
            </div>

            {/* Scrolling Precision Lines Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-size-[20px_20px] bg-[linear-gradient(to_right,var(--accent)_1px,transparent_1px),linear-gradient(to_bottom,var(--accent)_1px,transparent_1px)]" />
          </div>

          {/* Precision Markers with refined animation */}
          <motion.div
            animate={{
              x: [0, 5, 0],
              y: [0, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-border group-hover:border-accent transition-colors duration-500"
          />
          <motion.div
            animate={{
              x: [0, -5, 0],
              y: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-border group-hover:border-accent transition-colors duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}

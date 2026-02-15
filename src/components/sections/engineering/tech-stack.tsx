"use client";

import { motion } from "framer-motion";

const groups = [
  {
    title: "frontend",
    items: ["react", "nextjs", "typescript", "tailwind", "framer-motion"],
  },
  {
    title: "backend",
    items: ["nodejs", "express", "prisma-orm", "nextauth", "zod"],
  },
  {
    title: "database",
    items: ["postgresql", "mysql", "supabase", "redis"],
  },
  {
    title: "toolchain",
    items: ["git", "docker", "vercel", "linux-shell", "postman"],
  },
];

export default function EngineeringTechStack() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-mono text-sm tracking-tight text-[#e57474] font-bold">
              [ tech.dependencies ]
            </h2>
          </div>
          <div className="h-px w-full bg-[#232a2d]" />
        </motion.div>

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-12">
          {groups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="font-mono relative group overflow-hidden"
            >
              {/* Scanline Animation */}
              <motion.div
                animate={{ top: ["-10%", "110%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: idx * 1.5,
                }}
                className="absolute inset-x-0 h-px bg-[#e57474]/10 z-10 pointer-events-none"
              />

              <div className="text-[#e57474] mb-2 font-bold flex items-center gap-2">
                <span className="text-[#f2cecf] opacity-40">/</span>
                {group.title}
              </div>
              <div className="space-y-1 pl-1">
                {group.items.map((item, i) => {
                  const isLast = i === group.items.length - 1;
                  return (
                    <div
                      key={item}
                      className="text-[#b3b9b8] text-sm flex items-center group"
                    >
                      <span className="text-[#232a2d] font-bold mr-2">
                        {isLast ? "└─" : "├─"}
                      </span>
                      <span className="group-hover:text-[#dadada] transition-colors">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

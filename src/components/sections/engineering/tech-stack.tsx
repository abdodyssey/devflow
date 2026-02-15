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

// Helper for pixel folder icon
const PixelFolder = () => (
  <div className="w-3 h-2.5 bg-[#e57474] relative mr-2">
    <div className="absolute -top-1 left-0 w-1.5 h-1 bg-[#e57474]" />
  </div>
);

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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 bg-[#e57474]" />
            <h2 className="font-mono text-sm tracking-tight text-[#e57474] font-bold">
              [ tech.dependencies ]
            </h2>
          </div>
          <div className="flex gap-1.5 h-0.5">
            <div className="w-4 bg-[#e57474]" />
            <div className="w-1 bg-[#e57474] opacity-50" />
            <div className="w-0.5 bg-[#e57474] opacity-30" />
          </div>
        </motion.div>

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-12">
          {groups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="font-mono"
            >
              <div className="text-[#e57474] mb-3 font-bold flex items-center group">
                <PixelFolder />
                <span className="group-hover:translate-x-1 transition-transform">
                  {group.title}/
                </span>
              </div>
              <div className="space-y-1 pl-1">
                {group.items.map((item, i) => {
                  const isLast = i === group.items.length - 1;
                  return (
                    <div
                      key={item}
                      className="text-[#b3b9b8] text-sm flex items-center group hover:bg-[#1c2326] px-2 py-0.5 rounded-sm transition-colors"
                    >
                      <span className="text-[#232a2d] font-bold mr-2 select-none">
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

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import { engineeringProjects } from "@/data/engineering";

export default function EngineeringCaseStudies() {
  return (
    <section className="py-32 px-6 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        {/* Left Label */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <h2 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              Case_Studies_Log
            </h2>
          </div>
          <div className="h-px w-full bg-border" />
        </motion.div>

        {/* Content */}
        <div className="md:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {engineeringProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col h-full bg-background border border-border rounded-[2.5rem] p-8 md:p-10 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="flex justify-between items-start gap-4 mb-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] font-black text-accent uppercase tracking-widest bg-accent/10 px-2 py-1 rounded-full">
                      P_0{idx + 1}
                    </span>
                    <span className="text-slate-300 text-xs">/</span>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      {project.role}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-foreground tracking-tight leading-tight">
                    {project.name}
                  </h3>
                </div>

                <div
                  className="flex gap-2"
                  style={
                    {
                      "--project-accent": project.hoverColor,
                    } as React.CSSProperties
                  }
                >
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-slate-400 hover:text-(--project-accent) hover:border-(--project-accent) hover:bg-(--project-accent)/10 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-foreground text-background hover:bg-(--project-accent) transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] font-black text-slate-300 uppercase tracking-widest">
                    Technical_Summary
                  </span>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                    {project.details}
                  </p>
                </div>

                <div className="space-y-3 mt-auto pt-6 border-t border-border/50">
                  <span className="font-mono text-[9px] font-black text-slate-300 uppercase tracking-widest">
                    Stack_Deployment
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 text-[10px] font-bold text-slate-500 bg-muted rounded-md border border-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

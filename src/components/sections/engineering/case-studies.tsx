"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";
import Link from "next/link";

import { engineeringProjects } from "@/data/engineering";

export default function EngineeringCaseStudies() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-mono text-sm tracking-tight text-[#e57474] font-bold">
              [ case-studies.log ]
            </h2>
          </div>
          <div className="flex gap-1.5 h-0.5">
            <div className="w-4 bg-[#e57474]" />
            <div className="w-1 bg-[#e57474] opacity-50" />
            <div className="w-0.5 bg-[#e57474] opacity-30" />
          </div>
        </motion.div>

        <div className="md:col-span-3 space-y-16">
          {engineeringProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative border border-[#232a2d] bg-[#1c2326]/30 rounded-sm overflow-hidden border-l-4 border-l-[#e57474]"
            >
              {/* Header Tab */}
              <div className="bg-[#232a2d]/50 border-b border-[#232a2d] px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="w-3.5 h-3.5 text-[#e57474]" />
                  <span className="font-mono text-[10px] text-[#b3b9b8] uppercase tracking-widest">
                    Entry_{idx + 1}.json
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="text-[#b3b9b8] hover:text-[#e57474] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      className="text-[#b3b9b8] hover:text-[#e57474] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="p-8 md:p-10 font-mono">
                <div className="space-y-4">
                  <div className="text-[#b3b9b8] text-sm">
                    <span className="text-[#e57474]">project</span> &#123;
                  </div>

                  <div className="pl-6 space-y-2 border-l border-[#232a2d] ml-1">
                    <div className="text-sm">
                      <span className="text-[#f2cecf]/60 italic mr-2">
                        name:
                      </span>
                      <span className="text-[#dadada]">{`"${project.name}"`}</span>
                      ,
                    </div>
                    <div className="text-sm">
                      <span className="text-[#f2cecf]/60 italic mr-2">
                        role:
                      </span>
                      <span className="text-[#dadada]">{`"${project.role}"`}</span>
                      ,
                    </div>
                    <div className="text-sm">
                      <span className="text-[#f2cecf]/60 italic mr-2">
                        stack:
                      </span>
                      <span className="text-[#dadada]">
                        [ {project.stack.map((s) => `"${s}"`).join(", ")} ]
                      </span>
                      ,
                    </div>
                    <div className="text-sm">
                      <span className="text-[#f2cecf]/60 italic mr-2">
                        info:
                      </span>
                      <span className="text-[#b3b9b8]/80 text-[13px]">{`"${project.details}"`}</span>
                    </div>
                  </div>

                  <div className="text-[#b3b9b8] text-sm">&#125;</div>
                </div>

                {/* Subtle Pixel Detail Bottom Right */}
                <div className="absolute bottom-2 right-2 flex gap-1">
                  <div className="w-1 h-1 bg-[#e57474]/20" />
                  <div className="w-1 h-1 bg-[#e57474]/20" />
                  <div className="w-1 h-1 bg-[#e57474]/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

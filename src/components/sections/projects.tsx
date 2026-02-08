"use client";
import { getAllProjectsMetadata, ProjectMetadata } from "@/lib/mdx";
import { Briefcase, Code2, Globe, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BorderBeam } from "../ui/border-beam";
import { BentoCard, BentoGrid } from "../ui/bento-grid";

// Variabel animasi untuk container dan item
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda antar munculnya kartu
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Projects({
  projects,
}: {
  projects: ProjectMetadata[];
}) {
  // Ambil data dari folder src/content/projects

  return (
    <section id="projects" className="py-32 space-y-16 max-w-7xl mx-auto px-6">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Pengalaman & <span className="text-neutral-400">Hasil Kerja</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl md:text-xl">
          Saya membantu klien merapikan proses operasional yang sebelumnya
          manual menjadi lebih terstruktur, sehingga pekerjaan menjadi lebih
          cepat dan minim kesalahan.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <BentoGrid className="grid-cols-1 md:grid-cols-4">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              variants={itemVariants}
              className={`relative flex flex-col overflow-hidden rounded-xl border bg-background ${
                idx === 0 || idx === 3 ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <div
                key={project.slug}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl"
              >
                {/* Efek Border Beam untuk kesan premium */}
                <BorderBeam
                  size={250}
                  duration={12}
                  delay={idx * 2}
                  borderWidth={1.5}
                  className="z-50"
                />

                <BentoCard
                  key={project.slug}
                  name={project.title}
                  description={project.summary}
                  href={`/projects/${project.slug}`}
                  cta="View Case Study"
                  Icon={idx % 2 === 0 ? Code2 : Globe}
                  className="md:col-span-1 h-full"
                  background={
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority
                        className="absolute right-0 top-0 h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-105 group-hover:opacity-40"
                        style={{
                          maskImage:
                            "linear-gradient(to top, transparent 10%, black 100%)",
                          WebkitMaskImage:
                            "linear-gradient(to top, transparent 10%, black 100%)",
                        }}
                      />
                    </div>
                  }
                >
                  {/* Bungkus CTA atau Card dengan Link */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="absolute inset-0 z-20"
                  >
                    <span className="sr-only">
                      View details for {project.title}
                    </span>
                  </Link>
                </BentoCard>
              </div>
            </motion.div>
          ))}
        </BentoGrid>
      </motion.div>
    </section>
  );
}

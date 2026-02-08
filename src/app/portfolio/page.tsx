import React from "react";
import { GraduationCap, Briefcase, Code2, Rocket, ArrowUpRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
    return (
        <article className="min-h-screen h-full pb-20 pt-10 bg-background text-foreground">
            {/* Header Section */}
            <div className="mx-auto max-w-4xl px-6 mt-20 text-center md:text-left space-y-4">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl">Portfolio.</h1>
                <p className="text-neutral-500 text-lg max-w-2xl">
                    Eksplorasi solusi digital, arsitektur sistem, dan inovasi teknologi yang dibangun dengan presisi oleh devflow.
                </p>
            </div>

            <div className="mx-auto max-w-5xl px-6 mt-24 space-y-32">

                {/* 1. About Founder Section */}
                <section id="about-founder" className="space-y-10">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
                        <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400">The Human Behind</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                        <div className="md:col-span-4 aspect-square relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100">
                            <Image
                                src="/images/pasfoto-abdi.jpeg"
                                alt="M. Abdi Nugroho"
                                fill
                                className="object-cover  transition-all duration-500"
                            />
                        </div>
                        <div className="md:col-span-8 space-y-6">
                            <h3 className="text-3xl font-bold">M. Abdi Nugroho</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify">
                                Saya adalah mahasiswa **Sistem Informasi di UIN Raden Fatah Palembang** yang berfokus pada **Fullstack Web Development**. Ketertarikan saya pada teknologi mendorong saya untuk mendirikan **devflow.**, sebuah wadah untuk menciptakan solusi digital yang efisien dan automasi AI.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4 text-neutral-400" />
                                    <span>SI @ UIN Raden Fatah</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4 text-neutral-400" />
                                    <span>Founder of devflow.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Tech Stack Section */}
                <section id="tech-stack" className="space-y-10">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400">Core Expertise</h2>
                        <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "Frontend", tech: "Next.js, React, Tailwind" },
                            { name: "Backend", tech: "Node.js, Express, Laravel" },
                            { name: "Database", tech: "PostgreSQL, MySQL, Prisma" },
                            { name: "Specialized", tech: "AI Integration, RAG, Automation" }
                        ].map((item) => (
                            <MagicCard key={item.name} className="p-6 border-neutral-200 dark:border-neutral-800" gradientColor="#171717">
                                <h4 className="font-bold text-sm mb-2 uppercase tracking-wider">{item.name}</h4>
                                <p className="text-xs text-neutral-500 leading-relaxed">{item.tech}</p>
                            </MagicCard>
                        ))}
                    </div>
                </section>

                {/* 3. Featured Projects Section */}
                <section id="projects" className="space-y-10">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
                        <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400">Selected Works</h2>
                    </div>

                    <BentoGrid className="auto-rows-[25rem]">
                        <BentoCard
                            name="E-Skripsi System"
                            description="Sistem informasi akademik untuk manajemen tugas akhir di Fakultas Sains dan Teknologi."
                            Icon={GraduationCap}
                            className="md:col-span-2"
                            href="/projects/e-skripsi"
                            cta="Explore Case Study"
                            background={<div className="absolute inset-0 bg-neutral-100/50 dark:bg-neutral-900/50" />}
                        />
                        <BentoCard
                            name="Eco Masjid"
                            description="Platform digital berkelanjutan menggunakan MERN Stack untuk efisiensi energi."
                            Icon={Rocket}
                            className="md:col-span-1"
                            href="/projects/eco-masjid"
                            cta="View Project"
                            background={<div className="absolute inset-0 bg-neutral-100/50 dark:bg-neutral-900/50" />}
                        />
                    </BentoGrid>
                </section>

                {/* Footer CTA */}
                <footer className="pt-20 pb-10 text-center border-t border-neutral-100 dark:border-neutral-900">
                    <p className="text-neutral-500 text-sm mb-6">Punya ide proyek menarik untuk dikembangkan?</p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 text-lg font-bold hover:underline"
                    >
                        Mari Mulai Alur Kerjasama <ArrowUpRight className="h-5 w-5" />
                    </Link>
                </footer>
            </div>
        </article>
    );
}
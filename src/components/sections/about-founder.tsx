import { GraduationCap, Briefcase, Award, Code2, MapPin, Sparkles } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { getFounderData } from "@/lib/mdx";
import Image from "next/image";

export default async function AboutFounder() {
    const data = await getFounderData();
    const { name, username, role, avatar = "/images/profile-abdi.jpg", location, university, major } = data?.metadata || {};

    return (
        <section id="about" className="py-24 px-6 bg-background border-t border-neutral-200 dark:border-neutral-800">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Header Section */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-neutral-900 dark:text-neutral-100">
                        The Human Behind the Code
                    </h2>
                    <p className="text-neutral-500 mt-2 max-w-2xl">
                        Mengenal visi dan dedikasi profesional yang menggerakkan setiap solusi di devflow.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Sisi Kiri: Abstract Visual & Identitas Utama */}
                    <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">

                        <div className="relative aspect-square overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center p-0 shadow-inner group">
                            {/* Abstract Pixel Background */}
                            <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 opacity-50 transition-opacity group-hover:opacity-100" />

                            <Image
                                src={avatar}
                                alt="M. Abdi Nugroho - Founder devflow."
                                fill
                                priority
                                className="z-10 object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                                style={{ imageRendering: 'pixelated' }}
                            />

                            <div className="absolute bottom-4 left-4 z-20 bg-white/80 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800">
                                <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
                                    {/* Pakai nama asli atau brand lu biar lebih pro buat klien */}
                                    Founder: {username}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                                    {name}
                                </h3>
                                <p className="text-lg text-neutral-500 font-medium">
                                    {role}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {["Next.js", "Prisma ORM", "Tailwind CSS", "PostgreSQL", "AI Automation", "MYSQL"].map((tag) => (
                                    <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sisi Kanan: Detail Naratif Profesional */}
                    <div className="lg:col-span-7 space-y-12">

                        {/* 1. Akademik & Pendidikan */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-neutral-900 dark:text-neutral-100">
                                <GraduationCap className="h-5 w-5" />
                                <h4 className="text-xl font-bold uppercase tracking-tight">AKADEMIK & PENDIDIKAN</h4>
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify">
                                Sebagai mahasiswa {major} {university}, fokus profesional saya berpusat pada integrasi arsitektur data dengan solusi perangkat lunak yang skalabel. Saya berdedikasi untuk mentransformasi kompleksitas teknis menjadi sistem yang efisien dan tepat guna bagi kebutuhan bisnis modern.
                            </p>
                        </div>

                        {/* 2. Pengalaman Profesional */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-neutral-900 dark:text-neutral-100">
                                <Briefcase className="h-5 w-5" />
                                <h4 className="text-xl font-bold uppercase tracking-tight">PENGALAMAN</h4>
                            </div>
                            <div className="space-y-8 border-l border-neutral-200 dark:border-neutral-800 pl-6 ml-2.5">
                                <div className="relative">
                                    <div className="absolute -left-[30.5px] top-1.5 h-2 w-2 rounded-full bg-neutral-900 dark:bg-neutral-100" />
                                    <h5 className="font-bold text-lg leading-none">Frontend Engineer — E-Thesis System</h5>
                                    <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">University Internship Project</p>
                                    <p className="text-neutral-600 dark:text-neutral-400 mt-3 text-sm leading-relaxed">
                                        Mengoordinasi pengembangan antarmuka pengguna untuk platform manajemen tugas akhir universitas, sekaligus bertanggung jawab penuh atas standarisasi dokumentasi pengujian sistem guna memastikan reliabilitas aplikasi.
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[30.5px] top-1.5 h-2 w-2 rounded-full bg-neutral-400" />
                                    <h5 className="font-bold text-lg leading-none">Fullstack Developer — Eco Masjid</h5>
                                    <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">Technology & Sustainability Initiative</p>
                                    <p className="text-neutral-600 dark:text-neutral-400 mt-3 text-sm leading-relaxed text-justify">
                                        Mengimplementasikan MERN stack dalam membangun infrastruktur digital berorientasi keberlanjutan, mengoptimalkan proses komputasi untuk mencapai performa sistem yang responsif dan stabil.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Kapabilitas & Sertifikasi */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-neutral-900 dark:text-neutral-100">
                                <Sparkles className="h-5 w-5" />
                                <h4 className="text-xl font-bold uppercase tracking-tight">SERTIFIKASI & PENGHARGAAN</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <MagicCard className="p-5 border-neutral-200 dark:border-neutral-800" gradientColor="#171717">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Code2 className="h-4 w-4 text-neutral-400" />
                                        <span className="font-bold text-xs uppercase tracking-widest">Juara 3 Lomba Hackathon</span>
                                    </div>
                                    <p className="text-xs text-neutral-500 leading-relaxed">
                                        Juara 3 Lomba Hackathon yang diadakan oleh UIN Raden Fatah Palembang.
                                    </p>
                                </MagicCard>
                                <MagicCard className="p-5 border-neutral-200 dark:border-neutral-800" gradientColor="#171717">

                                    <div className="flex items-center gap-2 mb-3">
                                        <Award className="h-4 w-4 text-neutral-400" />
                                        <span className="font-bold text-xs uppercase tracking-widest">Profesional CV</span>
                                    </div>
                                    <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                                        Unduh CV terbaru untuk melihat detail pengalaman dan kualifikasi lengkap.
                                    </p>
                                    <a
                                        href="/CV-M-Abdi-Nugroho.jpg"
                                        download="CV-M-Abdi-Nugroho.jpg"
                                        className="inline-flex h-8 items-center justify-center rounded-md bg-neutral-900 dark:bg-neutral-100 px-4 text-xs font-medium text-neutral-50 dark:text-neutral-900 shadow transition-colors hover:bg-neutral-900/90 dark:hover:bg-neutral-100/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        Download CV
                                    </a>
                                </MagicCard>
                            </div>
                        </div>

                        {/* 4. Lokasi & Kontribusi Lokal */}
                        <div className="pt-6 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-3 w-3" />
                                <span>Operation: {location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
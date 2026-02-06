import { GraduationCap, Briefcase, MapPin, ArrowUpRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";
import Link from "next/link";

export default function AboutFounder() {
    return (
        <section className="py-20 px-6 bg-background " id="founder">
            <div className="max-w-4xl mx-auto rounded-xl">
                <MagicCard
                    className="p-8 md:p-12 border-neutral-200 dark:border-neutral-800"
                    gradientColor="#171717"
                >
                    <div className="flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
                        {/* Foto Profil Minimalis */}
                        <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
                            <Image
                                src="/images/pasfoto-abdi.jpeg"
                                alt="M. Abdi Nugroho"
                                fill
                                className="object-cover transition-all duration-500"
                            />
                        </div>

                        <div className="space-y-6 flex-1">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold tracking-tighter">M. Abdi Nugroho</h3>
                                <p className="text-neutral-500 font-medium">Junior Software Engineer</p>
                            </div>

                            {/* Info Singkat Berdasarkan Latar Belakang */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <GraduationCap className="h-4 w-4" />
                                    <span>Sistem Informasi</span>
                                </div>
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <Briefcase className="h-4 w-4" />
                                    <span>Fullstack Web Developer</span>
                                </div>
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <MapPin className="h-4 w-4" />
                                    <span>Palembang, Sumatera Selatan</span>
                                </div>
                            </div>

                            <p className="text-neutral-500 leading-relaxed text-sm max-w-xl">
                                Berpengalaman dalam pengembangan web berbasis JavaScript, dengan fokus pada pembangunan aplikasi web modern yang skalabel dan maintainable. Menguasai React.js untuk pengembangan antarmuka yang responsif serta Node.js untuk membangun backend dan API yang andal. Memiliki pemahaman yang kuat dalam pengelolaan data, perancangan arsitektur perangkat lunak, serta penerapan praktik pengembangan yang efisien dan terstruktur.
                            </p>

                            {/* Call to Action ke Portfolio */}
                            <div className="pt-4">
                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
                                >
                                    Lihat Portfolio Lengkap
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </MagicCard>
            </div>
        </section>
    );
}
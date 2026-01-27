import { GraduationCap, Briefcase, MapPin, Code2, BrainCircuit } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Header Section */}
                <section className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                        M. Abdi Nugroho
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Full-stack Developer & Founder of devflow.
                    </p>
                </section>

                {/* Biography Section */}
                <section className="grid gap-8">
                    <MagicCard className="p-8 space-y-6" gradientColor="#262626">
                        <div className="flex items-center gap-4 text-primary">
                            <GraduationCap className="h-8 w-8" />
                            <h2 className="text-2xl font-semibold text-foreground">Akademik & Latar Belakang</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Gue adalah mahasiswa **Sistem Informasi di UIN Raden Fatah Palembang**. Fokus utama gue adalah membangun jembatan antara kebutuhan bisnis dan solusi teknologi yang efisien. Pendidikan ini memberikan gue landasan kuat dalam mengelola arsitektur informasi dan logika sistem yang kompleks.
                        </p>
                    </MagicCard>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Internship Card */}
                        <MagicCard className="p-8 space-y-4" gradientColor="#262626">
                            <div className="flex items-center gap-3 text-primary">
                                <Briefcase className="h-6 w-6" />
                                <h3 className="text-xl font-semibold text-foreground">Pengalaman Magang</h3>
                            </div>
                            <p className="text-muted-foreground">
                                Selama masa **magang**, gue dipercaya untuk menangani fase *Quality Assurance* dan menyusun **testing logbook** untuk memastikan aplikasi web ujian skripsi berjalan tanpa celah teknis.
                            </p>
                        </MagicCard>

                        {/* Community Card */}
                        <MagicCard className="p-8 space-y-4" gradientColor="#262626">
                            <div className="flex items-center gap-3 text-primary">
                                <MapPin className="h-6 w-6" />
                                <h3 className="text-xl font-semibold text-foreground">Kontribusi Sosial</h3>
                            </div>
                            <p className="text-muted-foreground">
                                Pengalaman **KKN di Plaju, Palembang**, mengajarkan gue pentingnya teknologi yang humanis dan berdampak langsung pada masyarakat lokal.
                            </p>
                        </MagicCard>
                    </div>

                    {/* Tech Stack Section */}
                    <MagicCard className="p-8 space-y-6" gradientColor="#262626">
                        <div className="flex items-center gap-4 text-primary">
                            <Code2 className="h-8 w-8" />
                            <h2 className="text-2xl font-semibold text-foreground">Keahlian Teknis</h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                            <div className="bg-neutral-100 dark:bg-neutral-900 p-3 rounded-lg border border-border">Next.js & React</div>
                            <div className="bg-neutral-100 dark:bg-neutral-900 p-3 rounded-lg border border-border">Node.js & Laravel</div>
                            <div className="bg-neutral-100 dark:bg-neutral-900 p-3 rounded-lg border border-border">PostgreSQL & Prisma</div>
                            <div className="bg-neutral-100 dark:bg-neutral-900 p-3 rounded-lg border border-border">AI & Machine Learning</div>
                            <div className="bg-neutral-100 dark:bg-neutral-900 p-3 rounded-lg border border-border">Deep Learning</div>
                            <div className="bg-neutral-100 dark:bg-neutral-900 p-3 rounded-lg border border-border">Technical English</div>
                        </div>
                        <p className="text-muted-foreground mt-4 italic text-sm">
                            Gue mahir membaca dokumentasi teknis bahasa Inggris untuk memastikan setiap solusi yang gue bangun menggunakan standar industri terbaru.
                        </p>
                    </MagicCard>
                </section>

                {/* Closing Statement */}
                <section className="text-center pt-10">
                    <p className="text-muted-foreground">
                        Ingin berkolaborasi atau sekadar berdiskusi soal teknologi?
                    </p>
                    <a href="/#contact" className="inline-block mt-4 text-primary font-medium hover:underline">
                        Hubungi gue di devflow. &rarr;
                    </a>
                </section>
            </div>
        </main>
    );
}
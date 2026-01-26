import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { MagicCard } from "../ui/magic-card";
import { ShimmerButton } from "../ui/shimmer-button";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <MagicCard
                className="flex flex-col items-center justify-center p-10 text-center shadow-2xl"
                gradientColor="#262626" // Warna zinc yang halus untuk efek glow
            >
                <div className="z-10 space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Mari Bangun Solusi Bersama
                    </h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                        Punya ide project atau butuh automasi AI untuk bisnis lu?
                        Gue siap bantu mewujudkannya lewat <strong>DevFlow</strong>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        {/* Tombol Utama pakai Shimmer Effect */}
                        <a href="mailto:email-lu@example.com">
                            <ShimmerButton className="shadow-2xl">
                                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-950/10 lg:text-lg">
                                    Kirim Email
                                </span>
                                <Mail className="ml-2 h-4 w-4" />
                            </ShimmerButton>
                        </a>

                        {/* Link alternatif */}
                        <a
                            href="https://linkedin.com/in/username-lu"
                            target="_blank"
                            className="group inline-flex items-center justify-center text-sm font-medium transition-colors hover:text-primary"
                        >
                            Cek LinkedIn
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute inset-0 z-0 bg-dot-pattern opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
            </MagicCard>
        </section>
    );
}
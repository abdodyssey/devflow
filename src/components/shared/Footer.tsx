import Link from "next/link";
import { Github, Instagram, Mail } from "lucide-react"; // Ikon dari Lucide

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full max-w-4xl mx-auto border-t border-border/40 bg-background ">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">

                {/* Bagian Kiri: Copyright & Brand */}
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {currentYear} <span className="font-bold text-foreground">devflow.</span> All rights reserved.
                    </p>
                </div>

                {/* Bagian Kanan: Social Links */}
                <div className="flex items-center gap-6">
                     <Link
                        href="https://www.instagram.com/devflow___"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                        href="https://github.com/abdodyssey"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    
                    <Link
                        href="mailto:devflow99@gmail.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>

            </div>
        </footer>
    );
}
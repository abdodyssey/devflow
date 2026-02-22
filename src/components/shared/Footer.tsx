import Link from "next/link";
import { Github, Instagram, Mail } from "lucide-react";

/**
 * Premium Footer
 * - Simple & Clean
 * - Light Minimal Theme
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-muted/20 pt-20 pb-10 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto border-t border-border pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-foreground"
          >
            devflow<span className="text-accent">.</span>
          </Link>
          <p className="text-slate-400 text-sm font-medium tracking-tight">
            Handcrafted Digital Solutions © {currentYear}
          </p>
        </div>

        {/* Right Side: Social links */}
        <div className="flex items-center gap-8">
          <Link
            href="https://www.instagram.com/devflow___"
            target="_blank"
            className="text-slate-400 hover:text-accent transition-colors duration-300"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://github.com/abdodyssey"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-accent transition-colors duration-300"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="mailto:devflow99@gmail.com"
            className="text-slate-400 hover:text-accent transition-colors duration-300"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

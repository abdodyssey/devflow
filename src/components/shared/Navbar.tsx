"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { name: "Solutions", href: "#solution" },
  { name: "Process", href: "#how-i-work" },
  { name: "Clients", href: "#who-i-help" },
  { name: "Why Us", href: "#why-me" },
  { name: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isProjectPage =
    pathname?.startsWith("/projects/") || pathname?.startsWith("/portfolio");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    /* Floating Nav Bar */
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none w-full">
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-[2rem] shadow-2xl ${
          scrolled
            ? "border border-border bg-background/90 backdrop-blur-xl shadow-blue-900/5"
            : "border border-transparent bg-background/50 backdrop-blur-md shadow-none"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-8">
          {/* Logo devflow. */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2"
            >
              <Image
                src="/images/logo-devflow.png"
                alt="DevFlow Logo"
                width={28}
                height={28}
                className="h-7 w-auto transition-all dark:invert"
              />
              <span className="text-xl font-black tracking-tighter text-foreground">
                devflow<span className="text-accent">.</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {!isProjectPage && (
              <>
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Link
                      href={item.href}
                      className="relative text-sm font-bold text-slate-500 hover:text-accent transition-colors tracking-wide group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.div>
                ))}

                <ThemeToggle />
                <Link
                  href="https://wa.me/6285840858761"
                  target="_blank"
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent transition-all shadow-lg shadow-accent/10 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            {!isProjectPage && (
              <Sheet>
                <SheetTrigger asChild>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-foreground"
                    aria-label="Open Menu"
                  >
                    <Menu className="h-6 w-6" />
                  </motion.button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] border-l border-border p-8 bg-background text-foreground"
                >
                  <SheetTitle className="text-left font-black text-2xl tracking-tighter text-foreground mb-12">
                    devflow<span className="text-accent">.</span>
                  </SheetTitle>
                  <nav className="flex flex-col gap-8">
                    {navItems.map((item, idx) => (
                      <motion.div
                        key={item.href}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className="text-xl font-bold text-slate-500 hover:text-accent transition-colors"
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <SheetClose asChild>
                        <Link
                          href="https://wa.me/6285840858761"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 flex h-14 items-center justify-center rounded-2xl bg-primary px-8 text-lg font-bold text-primary-foreground w-full shadow-xl shadow-accent/10 hover:bg-accent transition-colors"
                        >
                          Let&apos;s Talk
                        </Link>
                      </SheetClose>
                    </motion.div>
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

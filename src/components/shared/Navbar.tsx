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
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { name: "Solutions", href: "#solution" },
  { name: "Process", href: "#how-i-work" },
  { name: "Clients", href: "#who-i-help" },
  { name: "Why Us", href: "#why-me" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isProjectPage =
    pathname?.startsWith("/projects/") || pathname?.startsWith("/portfolio");

  return (
    /* Floating Nav Bar */
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none w-full">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto w-full max-w-5xl border border-slate-200/50 bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-blue-900/5"
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
                className="h-7 w-auto mix-blend-multiply dark:mix-blend-screen"
              />
              <span className="text-xl font-black tracking-tighter text-[#0f172a]">
                devflow<span className="text-blue-600">.</span>
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
                      className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors tracking-wide"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <Link
                  href="https://wa.me/6285840858761"
                  target="_blank"
                  className="bg-[#0f172a] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/10 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            {!isProjectPage && (
              <Sheet>
                <SheetTrigger asChild>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-slate-600"
                    aria-label="Open Menu"
                  >
                    <Menu className="h-6 w-6" />
                  </motion.button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] border-l border-slate-100 p-8 bg-white text-slate-900"
                >
                  <SheetTitle className="text-left font-black text-2xl tracking-tighter text-[#0f172a] mb-12">
                    devflow<span className="text-blue-600">.</span>
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
                            className="text-xl font-bold text-slate-500 hover:text-blue-600 transition-colors"
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
                          className="mt-6 flex h-14 items-center justify-center rounded-2xl bg-[#0f172a] px-8 text-lg font-bold text-white w-full shadow-xl shadow-blue-900/10"
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

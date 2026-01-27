"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ModeToggle } from "../mode-toggle";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Home", href: "#" },
    { name: "Agency", href: "#agency" },
    { name: "Projects", href: "#projects" },
    { name: "Tech", href: "#tech" },
    { name: "Founder", href: "#founder" },
];

export default function Navbar() {
    const pathname = usePathname();
    const isProjectPage = pathname?.startsWith('/projects/');

    return (
        /* Wrapper untuk posisi floating di tengah atas */
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                /* Pointer-events-auto supaya klik kembali berfungsi di dalam navbar */
                className="pointer-events-auto w-full max-w-4xl border border-border/40 bg-background/80 backdrop-blur-md rounded-full shadow-lg"
            >
                <div className="container mx-auto flex h-14 items-center justify-between px-6">

                    {/* Logo devflow. */}
                    <Link href="#home" className="flex items-center gap-2">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2"
                        >
                            <img
                                src="/images/logo-devflow.png"
                                alt="DevFlow Logo"
                                className="h-8 w-auto mix-blend-multiply dark:mix-blend-screen dark:invert"
                            />
                            <span className="text-xl font-bold tracking-tighter">devflow<span className="text-primary">.</span></span>
                        </motion.div>
                    </Link>


                    {/* Desktop Menu (Hidden on Mobile) */}
                    <div className="hidden md:flex items-center gap-8">
                        {!isProjectPage && (
                            <>
                                {navItems.map((item, idx) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * idx }}
                                    >
                                        <Link href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
                                            {item.name}
                                        </Link>

                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href="#contact" className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                                        Hire Me
                                    </Link>
                                </motion.div>
                            </>
                        )}
                        <ModeToggle />
                    </div>

                    {/* Mobile Menu (Visible only on Mobile) */}
                    <div className="flex md:hidden items-center gap-2">
                        <ModeToggle />
                        {!isProjectPage && (
                            <Sheet>
                                <SheetTrigger asChild>
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2"
                                        aria-label="Open Menu"
                                    >
                                        <Menu className="h-6 w-6" />
                                    </motion.button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[300px] border-l border-border/40 p-8">
                                    <SheetTitle className="text-left font-bold tracking-tighter">Navigation</SheetTitle>
                                    <nav className="flex flex-col gap-6 mt-10">
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
                                                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
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
                                                    href="#contact"
                                                    className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground w-full"
                                                >
                                                    Hire Me
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
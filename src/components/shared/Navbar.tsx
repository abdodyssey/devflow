"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "../mode-toggle";

const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-6">

                {/* Logo devflow. */}
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        devflow<span className="text-primary">.</span>
                    </motion.div>
                </Link>


                {/* Desktop Menu (Hidden on Mobile) */}
                <div className="hidden md:flex items-center gap-8">
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
                        <Link href="#contact" className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                            Hire Me
                        </Link>
                    </motion.div>
                    <ModeToggle />
                </div>

                {/* Mobile Menu (Visible only on Mobile) */}
                <div className="flex md:hidden">
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
                                            className="mt-4 inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground w-full"
                                        >
                                            Hire Me
                                        </Link>
                                    </SheetClose>
                                </motion.div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </motion.nav>
    );
}
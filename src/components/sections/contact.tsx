"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { MagicCard } from "../ui/magic-card";
import { ShimmerButton } from "../ui/shimmer-button";
import { motion, AnimatePresence } from "framer-motion";
import { contactSchema } from "@/lib/validation";

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setStatus("loading");

        const formData = new FormData();
        formData.append("access_key", "d723b49c-7b34-44c3-9a2e-64ac05391a41");
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                toast.success("Pesan berhasil dikirim. Terima kasih!");
                reset();
            } else {
                toast.error("Pengiriman pesan gagal. Silakan coba kembali.");
                setStatus("idle");
            }
        } catch (error) {
            toast.error("Terjadi kendala koneksi. Silakan coba lagi.");
            setStatus("idle");
        }
    };

    return (
        <section id="contact" className="py-20 max-w-4xl mx-auto rounded-xl">
            <MagicCard
                className="flex flex-col items-center justify-center p-6 md:p-12 text-center shadow-2xl overflow-hidden"
                gradientColor="#262626"
            >
                <div className="z-10 w-full max-w-2xl space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Mari Bangun Solusi Bersama
                        </h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                            Punya ide proyek atau membutuhkan automasi berbasis AI? Hubungi{" "}
                            <strong>DevFlow</strong>.
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="py-10 space-y-4"
                            >
                                <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
                                <h3 className="text-xl font-bold text-foreground">
                                    Pesan Berhasil Dikirim
                                </h3>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="text-sm text-primary underline"
                                >
                                    Kirim pesan lainnya
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                onSubmit={handleSubmit(onSubmit)}
                                className="grid grid-cols-1 gap-4 text-left"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <input
                                            {...register("name")}
                                            placeholder="Nama lengkap"
                                            className="w-full rounded-lg border border-border/40 bg-background/50 p-3 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                        {errors.name && (
                                            <p className="text-xs text-red-500 ml-1">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-1">
                                        <input
                                            {...register("email")}
                                            placeholder="Alamat email"
                                            className="w-full rounded-lg border border-border/40 bg-background/50 p-3 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                        {errors.email && (
                                            <p className="text-xs text-red-500 ml-1">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <textarea
                                        {...register("message")}
                                        placeholder="Tuliskan kebutuhan Anda secara singkat dan jelas..."
                                        rows={4}
                                        className="w-full rounded-lg border border-border/40 bg-background/50 p-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                                    />
                                    {errors.message && (
                                        <p className="text-xs text-red-500 ml-1">
                                            {errors.message.message}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
                                    <ShimmerButton
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="shadow-2xl disabled:opacity-50"
                                    >
                                        <span className="text-sm font-medium lg:text-lg">
                                            {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
                                        </span>
                                        {status === "loading" ? (
                                            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                                        ) : (
                                            <Mail className="ml-2 h-4 w-4" />
                                        )}
                                    </ShimmerButton>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>

                <div className="absolute inset-0 z-0 bg-dot-pattern opacity-10 pointer-events-none" />
            </MagicCard>
        </section>
    );
}

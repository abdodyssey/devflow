"use client";

import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ProjectSliderProps {
    images: string[];
}

export default function ProjectSlider({ images }: ProjectSliderProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // Fungsi untuk navigasi slider
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <div className="group relative mx-auto mb-12 max-w-5xl overflow-hidden rounded-2xl border border-border/50 bg-zinc-950/50 p-2 shadow-2xl">
            {/* Viewport Carousel */}
            <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                <div className="flex">
                    {images.map((src, i) => (
                        <div className="relative min-w-0 flex-[0_0_100%] p-2" key={i}>
                            <motion.div
                                whileHover={{ scale: 0.99 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    setIndex(i);
                                    setOpen(true);
                                }}
                                className="relative aspect-video cursor-pointer overflow-hidden rounded-lg border border-border/40 bg-zinc-900"
                            >
                                <img
                                    src={src}
                                    alt={`Project Screenshot ${i + 1}`}
                                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Overlay Hover */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                                    <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/20">
                                        <Maximize2 className="h-4 w-4 text-white" />
                                        <span className="text-sm font-medium text-white">Perbesar Gambar</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tombol Navigasi - Muncul saat hover di desktop */}
            <button
                onClick={scrollPrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-all hover:bg-black/80 group-hover:opacity-100 focus:opacity-100"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                onClick={scrollNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-all hover:bg-black/80 group-hover:opacity-100 focus:opacity-100"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Lightbox - Terbuka saat gambar diklik */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images.map((src) => ({ src }))}
                // Animasi halus untuk lightbox
                animation={{ fade: 300, swipe: 500 }}
                styles={{
                    root: {
                        "--yarl__container_background_color": "rgba(0, 0, 0, 0.9)",
                        "--yarl__slide_image_max_height": "85vh",
                        "--yarl__slide_image_max_width": "85vw",
                        zIndex: 99999,
                    } as any,
                }}
            />

            {/* Indicator Dots */}
            <div className="mt-4 flex justify-center gap-2">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 w-1.5 rounded-full transition-all ${index === i ? "bg-primary w-4" : "bg-zinc-700"}`}
                    />
                ))}
            </div>
        </div>
    );
}
"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Physics for the main cursor (Star) - Fast response
    const springConfigMain = { damping: 25, stiffness: 700 };
    const mainX = useSpring(cursorX, springConfigMain);
    const mainY = useSpring(cursorY, springConfigMain);

    // Physics for the trailing orbit (Gravity effect) - Slower response
    const springConfigOrbit = { damping: 15, stiffness: 200, mass: 0.8 };
    const orbitX = useSpring(cursorX, springConfigOrbit);
    const orbitY = useSpring(cursorY, springConfigOrbit);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHoverChange = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Detect hoverable elements
            if (
                target.closest("a") ||
                target.closest("button") ||
                target.closest(".cursor-pointer") ||
                target.tagName === "INPUT" ||
                target.tagName === "TEXTAREA"
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleHoverChange);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleHoverChange);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* The Orbiting Ring (Dashed for space HUD effect) */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border-[1.5px] border-dashed border-primary mix-blend-difference"
                style={{
                    x: orbitX,
                    y: orbitY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    height: isHovered ? 60 : 35,
                    width: isHovered ? 60 : 35,
                    rotate: isHovered ? 180 : 0, // Rotates when hovering (engaging warp drive!)
                    scale: isHovered ? 1.1 : 1,
                    opacity: isHovered ? 1 : 0.5,
                }}
                transition={{ duration: 0.8, ease: "circOut" }}
            />

            {/* The Central Star */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-primary mix-blend-difference shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                style={{
                    x: mainX,
                    y: mainY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovered ? 0.5 : 1, // Focuses energy when hovering
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
}
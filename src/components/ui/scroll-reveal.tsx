"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

export const ScrollReveal = ({
  children,
  width = "100%",
}: ScrollRevealProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

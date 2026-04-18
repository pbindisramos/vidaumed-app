"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, viewportConfig } from "@/lib/animations";

type Background = "white" | "light" | "teal" | "dark";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: Background;
  animate?: boolean;
}

const backgrounds: Record<Background, string> = {
  white: "bg-white",
  light: "bg-stone-50",
  teal: "bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white",
  dark: "bg-stone-900 text-white",
};

export default function SectionWrapper({
  children,
  id,
  className,
  background = "white",
  animate = true,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 px-4", backgrounds[background], className)}>
      <motion.div
        className="max-w-6xl mx-auto"
        variants={animate ? fadeInUp : undefined}
        initial={animate ? "hidden" : undefined}
        whileInView={animate ? "visible" : undefined}
        viewport={animate ? viewportConfig : undefined}
      >
        {children}
      </motion.div>
    </section>
  );
}

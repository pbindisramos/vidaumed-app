"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "li";
}

export default function Card({
  children,
  className,
  hover = true,
  as: Tag = "div",
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: "0 12px 36px 0 rgb(0 0 0 / 0.12)" } : undefined}
      transition={{ duration: 0.2 }}
    >
      <Tag
        className={cn(
          "bg-white rounded-2xl border border-stone-100 p-6",
          "shadow-[0_2px_16px_0_rgb(0,0,0,0.06)]",
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  /** seconds per loop */
  duration?: number;
  reverse?: boolean;
  className?: string;
  gap?: string;
};

/** Seamless infinite marquee. Content is duplicated and translated -50%. */
export function Marquee({
  children,
  duration = 28,
  reverse = false,
  className,
  gap = "3.5rem",
}: MarqueeProps) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <motion.div
        className="flex shrink-0 items-center"
        style={{ gap, paddingRight: gap }}
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex shrink-0 items-center" style={{ gap }}>
          {children}
        </div>
        <div
          className="flex shrink-0 items-center"
          style={{ gap }}
          aria-hidden="true"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}

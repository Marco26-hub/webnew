"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type HorizontalScrollProps = {
  children: ReactNode;
  /** lead-in content pinned to the left before the track scrolls */
  intro?: ReactNode;
  className?: string;
};

/**
 * Pins a section and converts vertical scroll into horizontal travel. The
 * track distance is measured live, so the vertical scroll length matches the
 * horizontal overflow exactly — a smooth hand-off between the two axes.
 */
export function HorizontalScroll({
  children,
  intro,
  className,
}: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [children]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const x = useSpring(xRaw, { stiffness: 120, damping: 30, mass: 0.4 });

  // section is as tall as the horizontal travel (plus a viewport) so pacing matches
  const height = `calc(100vh + ${distance}px)`;

  return (
    <section ref={sectionRef} style={{ height }} className={className}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {intro}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max items-stretch gap-6 px-6 md:gap-8 md:px-10"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

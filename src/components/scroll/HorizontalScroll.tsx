"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type HorizontalScrollProps = {
  children: ReactNode;
  /** lead-in content pinned above the track */
  intro?: ReactNode;
  className?: string;
};

/**
 * Pins a section and converts vertical scroll into horizontal travel. The
 * track distance is measured live and read via a ref inside a *functional*
 * transform, so the mapping always uses the latest measurement (passing a
 * fresh [0, -distance] range to useTransform does NOT update reactively).
 */
export function HorizontalScroll({
  children,
  intro,
  className,
}: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const distanceRef = useRef(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const d = Math.max(0, track.scrollWidth - window.innerWidth);
      distanceRef.current = d;
      setDistance(d);
    };
    measure();
    const raf = requestAnimationFrame(measure);
    const t = setTimeout(measure, 400);
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, [children]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const xRaw = useTransform(scrollYProgress, (p) => -p * distanceRef.current);
  const x = useSpring(xRaw, { stiffness: 140, damping: 28, mass: 0.3 });

  // Section is as tall as the horizontal travel (plus a viewport) so 1px of
  // vertical scroll ≈ 1px of horizontal travel.
  const height = `calc(100vh + ${distance}px)`;

  return (
    <section ref={sectionRef} style={{ height }} className={className}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {intro}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max items-stretch gap-5 px-6 md:px-10"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

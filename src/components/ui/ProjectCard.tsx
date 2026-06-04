"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/content";
import { cn, pad } from "@/lib/utils";
import { ArrowUpRight } from "./Icons";

/** Generative-looking preview tile (no image assets needed). */
function Preview({ project }: { project: Project }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", project.accent)} />
      <div className="absolute inset-0 bg-base/55" />
      {/* concentric generative rings */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 mix-blend-screen transition-transform duration-700 group-hover:scale-110"
        width="420"
        height="420"
        viewBox="0 0 420 420"
        fill="none"
      >
        {[40, 80, 120, 160, 200].map((r, i) => (
          <circle
            key={r}
            cx="210"
            cy="210"
            r={r}
            stroke="white"
            strokeOpacity={0.5 - i * 0.07}
            strokeWidth="1"
          />
        ))}
        <circle cx="210" cy="210" r="6" fill="white" />
      </svg>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="grain absolute inset-0" />
      {/* metric overlay */}
      <div className="absolute bottom-5 left-5">
        <p className="font-mono text-5xl font-semibold tracking-tight text-white drop-shadow">
          {project.metric}
        </p>
        <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-widest text-white/70">
          {project.metricLabel}
        </p>
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  index,
  className,
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={cn("group", className)}
    >
      <Link href="/work" className="block">
        <div className="panel relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Preview project={project} />
          <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-base/60 backdrop-blur-md transition-colors duration-300 group-hover:bg-accent group-hover:text-ink-inverse">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-faint">
                {pad(index + 1)}
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-widest text-accent">
                {project.category}
              </span>
            </div>
            <h3 className="mt-2 text-xl font-medium tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
              {project.blurb}
            </p>
          </div>
          <span className="shrink-0 font-mono text-xs text-faint">
            {project.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

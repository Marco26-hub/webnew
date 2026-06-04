"use client";

import Link from "next/link";
import { projects } from "@/lib/content";
import { HorizontalScroll } from "@/components/scroll/HorizontalScroll";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArrowRight } from "@/components/ui/Icons";

export function WorkShowcase() {
  return (
    <HorizontalScroll
      className="bg-base"
      intro={
        <div className="shell mb-10 flex items-end justify-between md:mb-14">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Proof, not promises.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-muted md:block">
            Systems in production today — scroll sideways to move through them.
          </p>
        </div>
      }
    >
      {projects.map((project, i) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={i}
          className="w-[82vw] shrink-0 sm:w-[460px] md:w-[540px]"
        />
      ))}
      <Link
        href="/work"
        className="group flex w-[60vw] shrink-0 flex-col justify-center sm:w-[300px]"
      >
        <div className="panel grid aspect-[4/3] place-items-center rounded-2xl transition-colors duration-300 group-hover:border-accent/60">
          <div className="text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-line-bright transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5 text-accent" />
            </div>
            <p className="mt-4 text-lg font-medium">View all work</p>
          </div>
        </div>
      </Link>
    </HorizontalScroll>
  );
}

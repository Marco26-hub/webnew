"use client";

import Link from "next/link";
import { useI18n } from "@/components/providers/AppProviders";
import { HorizontalScroll } from "@/components/scroll/HorizontalScroll";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArrowRight } from "@/components/ui/Icons";

export function WorkShowcase() {
  const { t } = useI18n();

  return (
    <HorizontalScroll
      className="bg-base"
      intro={
        <div className="shell mb-10 flex items-end justify-between md:mb-14">
          <div>
            <p className="eyebrow">{t.work.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              {t.work.heading}
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-muted md:block">
            {t.work.note}
          </p>
        </div>
      }
    >
      {t.work.items.map((project, i) => (
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
            <p className="mt-4 text-lg font-medium">{t.work.viewAll}</p>
          </div>
        </div>
      </Link>
    </HorizontalScroll>
  );
}

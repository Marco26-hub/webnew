import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Stats } from "@/components/sections/Stats";
import { projects } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from Aether — intelligent systems running in production today.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Systems in production, not slideware."
        description="A sample of what we've shipped. Every engagement leaves a measurable mark — and a team better equipped to keep going."
        meta={
          <div className="flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs text-faint">
            <span>40+ products shipped</span>
            <span>6 industries</span>
            <span>2019 — present</span>
          </div>
        }
      />

      <section className="shell pb-28 md:pb-36">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              className={cn(i % 2 === 1 && "md:mt-24")}
            />
          ))}
        </div>
      </section>

      <Stats />
    </>
  );
}

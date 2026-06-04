import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Stats } from "@/components/sections/Stats";
import { Reveal } from "@/components/ui/Reveal";
import { Plus } from "@/components/ui/Icons";
import { capabilities } from "@/lib/content";
import { pad } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From AI strategy and generative product design to applied ML engineering and platform scale.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="From frontier research to dependable production."
        description="Four disciplines, run by senior people who do the work. Engage us for one, or all of them as a single system."
      />

      <section className="shell pb-8">
        {capabilities.map((cap) => (
          <Reveal key={cap.id}>
            <article className="group grid gap-8 border-t border-line py-14 md:grid-cols-[0.42fr_0.58fr] md:py-20">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-accent">
                    {pad(cap.index)}
                  </span>
                  <span className="h-px w-10 bg-line-bright transition-all duration-500 group-hover:w-16" />
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                  {cap.title}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  {cap.summary}
                </p>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-ink/90">
                  {cap.detail}
                </p>
                <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {cap.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2.5 text-sm text-muted"
                    >
                      <Plus className="h-3.5 w-3.5 shrink-0 text-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <ProcessSection />
      <Stats />
    </>
  );
}

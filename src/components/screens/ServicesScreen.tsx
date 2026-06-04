"use client";

import { useI18n } from "@/components/providers/AppProviders";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Stats } from "@/components/sections/Stats";
import { Reveal } from "@/components/ui/Reveal";
import { Plus } from "@/components/ui/Icons";
import { pad } from "@/lib/utils";

export function ServicesScreen() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader
        eyebrow={t.services.headerEyebrow}
        title={t.services.headerTitle}
        description={t.services.headerDesc}
      />

      <section className="shell pb-8">
        {t.capabilities.items.map((cap) => (
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

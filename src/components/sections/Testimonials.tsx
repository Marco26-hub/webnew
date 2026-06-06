"use client";

import { useI18n } from "@/components/providers/AppProviders";
import { Marquee } from "@/components/ui/Marquee";
import { SpotlightTilt } from "@/components/ui/SpotlightTilt";

function QuoteCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <SpotlightTilt className="panel flex h-full w-[80vw] shrink-0 flex-col justify-between rounded-2xl p-7 transition-colors duration-300 hover:border-accent/40 sm:w-[440px]">
      <blockquote className="relative z-10 text-lg leading-relaxed text-ink">
        “{quote}”
      </blockquote>
      <figcaption className="relative z-10 mt-8 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full border border-line-bright bg-elevated font-mono text-xs text-accent">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted">{role}</p>
        </div>
      </figcaption>
    </SpotlightTilt>
  );
}

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="shell mb-14">
        <p className="eyebrow">{t.testimonials.eyebrow}</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          {t.testimonials.headingA}
          <span className="text-muted"> {t.testimonials.headingB}</span>
        </h2>
      </div>
      <Marquee duration={42} className="mask-fade-x" gap="1.5rem" pauseOnHover>
        {t.testimonials.items.map((item) => (
          <QuoteCard key={item.name} {...item} />
        ))}
      </Marquee>
    </section>
  );
}

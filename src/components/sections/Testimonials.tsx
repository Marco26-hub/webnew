"use client";

import { testimonials } from "@/lib/content";
import { Marquee } from "@/components/ui/Marquee";

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
    <figure className="panel flex h-full w-[80vw] shrink-0 flex-col justify-between rounded-2xl p-7 sm:w-[440px]">
      <blockquote className="text-lg leading-relaxed text-ink">
        “{quote}”
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
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
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="shell mb-14">
        <p className="eyebrow">Word of mouth</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          The teams we build with
          <span className="text-muted"> keep us close.</span>
        </h2>
      </div>
      <Marquee duration={42} className="mask-fade-x" gap="1.5rem">
        {testimonials.map((t) => (
          <QuoteCard key={t.name} {...t} />
        ))}
      </Marquee>
    </section>
  );
}

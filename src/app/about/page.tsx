import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Manifesto } from "@/components/sections/Manifesto";
import { Stats } from "@/components/sections/Stats";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { values, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aether is a small, senior studio building the intelligence inside ambitious products.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A senior studio for the intelligence era."
        description="No layers, no hand-offs to juniors. The people who scope your problem are the people who ship the system."
      />

      <Manifesto />

      <section className="shell py-24 md:py-32">
        <SectionHeading eyebrow="Principles" title="What we hold to." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 0.06}
              className="bg-surface/40 p-8 md:p-10"
            >
              <div className="flex h-full flex-col">
                <span className="font-mono text-xs text-faint">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-xl font-medium tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell pb-28 md:pb-36">
        <SectionHeading eyebrow="The people" title="Small, senior, accountable." />
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div className="group">
                <div className="relative grid aspect-square place-items-center overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-elevated to-surface">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <span className="relative font-serif text-5xl text-glow transition-transform duration-500 group-hover:scale-110">
                    {m.initials}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-medium">{m.name}</h3>
                <p className="text-sm text-muted">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Stats />
    </>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Aether. Tell us what you're trying to build.",
};

const next = [
  { step: "01", text: "We read your note and reply within two working days." },
  { step: "02", text: "A 30-minute call to pressure-test the problem together." },
  { step: "03", text: "A short, fixed-scope proposal — no fluff, no retainer trap." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something intelligent."
        description="Tell us about the problem. The more specific, the better — we reply to every serious note."
      />

      <section className="shell pb-32 md:pb-40">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div className="flex flex-col gap-10">
            <Reveal>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-faint">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block text-xl text-ink transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-faint">
                  Studios
                </p>
                <p className="mt-2 text-xl text-ink">{site.location}</p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-faint">
                  What happens next
                </p>
                <ul className="mt-4 space-y-4">
                  {next.map((n) => (
                    <li key={n.step} className="flex gap-4">
                      <span className="font-mono text-sm text-accent">
                        {n.step}
                      </span>
                      <span className="max-w-xs text-sm leading-relaxed text-muted">
                        {n.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex gap-5 pt-2">
                {site.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

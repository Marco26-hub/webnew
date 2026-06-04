"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessSection() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="shell grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div className="md:sticky md:top-32 md:self-start">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            A method,
            <br />
            <span className="text-muted">not a gamble.</span>
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
            Four phases that turn a clever idea into a dependable system — and
            leave your team faster than we found it.
          </p>
        </div>

        <div>
          {process.map((step, i) => (
            <Reveal key={step.phase} delay={i * 0.05}>
              <div className="group grid grid-cols-[auto_1fr] gap-6 border-t border-line py-9 transition-colors last:border-b hover:border-line-bright md:gap-10 md:py-11">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm text-accent">
                    {step.phase}
                  </span>
                  <motion.span
                    aria-hidden
                    className="mt-2 block h-2 w-2 rounded-full bg-line-bright transition-colors duration-300 group-hover:bg-accent"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

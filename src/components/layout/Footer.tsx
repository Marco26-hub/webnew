"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { nav, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <div className="shell relative py-20 md:py-28">
        {/* CTA */}
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Let&apos;s build</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Have a problem worth
              <span className="serif italic text-glow"> solving well?</span>
            </h2>
          </div>
          <Button href="/contact" size="lg" arrow magnetic>
            Start a project
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-line pt-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-semibold">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
            <p className="mt-5 font-mono text-xs text-faint">{site.location}</p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-faint">
              Sitemap
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-faint">
              Social
            </p>
            <ul className="mt-4 space-y-2.5">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-faint">
              Contact
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block text-sm text-muted transition-colors hover:text-ink"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* oversized wordmark */}
      <div className="relative -mb-[2vw] select-none px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-[22vw] font-semibold leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_var(--color-line-bright)]"
        >
          {site.name}
        </motion.h2>
      </div>

      <div className="shell flex flex-col items-center justify-between gap-3 border-t border-line py-6 text-xs text-faint sm:flex-row">
        <p>
          © {year} {site.name}. Applied intelligence studio.
        </p>
        <p className="font-mono">{site.domain}</p>
      </div>
    </footer>
  );
}

# Aether — Project Handoff

_Last updated: this session. Production deploys from `main`._

## What this is
A cinematic, SEO/GEO-first marketing site for **Aether**, an AI studio.
Positioning: "Put AI to work across your business." Audience: SMB + enterprise.
Bilingual **IT (primary) / EN**.

## Stack
- **Next.js 15** (App Router) · **TypeScript** · **Tailwind CSS v4** (tokens via `@theme` in `src/app/globals.css`)
- **Three.js** (raw) — cinematic hero nebula + interactive particle field
- **Framer Motion** — scroll choreography, reveals, page transitions, premium card effects
- **Lenis** — smooth scroll · **Geist** + self-hosted **Instrument Serif** (`next/font`)
- **@vercel/analytics** + **speed-insights**

## Run
```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /it or /en
npm run build && npm start
```

## Architecture
- **Localized routing** `/it` + `/en` via `src/middleware.ts` (detect cookie → Accept-Language → `it`; 307-redirect non-prefixed paths; sets `x-locale` header). Pages live under `src/app/[lang]/`.
- **Root layout** `src/app/layout.tsx` owns `<html lang>`/`<body>`, reads `x-locale` + theme cookie; `force-dynamic`. **`[lang]/layout.tsx`** owns providers + chrome + Organization/WebSite JSON-LD.
- **i18n + theme**: `src/components/providers/AppProviders.tsx` (client context). Language switch navigates to the same path under the new locale. Theme = `light` class on `<html>` + cookie. All copy in **`src/lib/i18n.ts`** (`dictionaries.en/it`).
- **Content model**: `src/lib/i18n.ts` (pillars/services, work items, FAQ, all copy), `src/lib/caseStudies.ts` (case-study long-form, dev integrity check vs work slugs), `src/lib/content.ts` (brand-neutral: name, email, social, clients, `domain`).
- **SEO/GEO**: per-page `generateMetadata` + `src/lib/seo.ts` (canonical + hreflang `en/it/x-default`); `src/lib/structuredData.ts` + `src/components/seo/JsonLd.tsx` (Organization, WebSite, Service, FAQPage, BreadcrumbList); `src/app/sitemap.ts` (both locales), `src/app/robots.ts` (welcomes AI retrieval bots), `src/app/llms.txt/route.ts`. OG image: `src/lib/og.tsx` + `opengraph-image.tsx`/`twitter-image.tsx`.

## Services — 5 pillars (in `i18n.ts` `pillars.items`)
1. **AI Automation & Agents** — custom automations · multi-agent · SMB automation apps
2. **AI Voice & Reception** — 24/7 AI receptionist (answers calls, books appointments) · qualification & hand-off
3. **Websites & E-commerce** — landing → e-commerce → AI-automated site · redesign
4. **Social, automated** — social automation · manage social from your own site admin
5. **Visibility & Growth** — SEO/GEO · lead research

Shown on home as the orbit (`CapabilitiesOrbit`) + detailed bento on `/services` (`ServicesBento`).

## Premium UI effects
- **`SpotlightTilt`** (`src/components/ui/SpotlightTilt.tsx`): cursor spotlight + 3D tilt + glow border, mouse-only + reduced-motion-safe. Used on testimonials, services bento, team cards.
- **`ProjectCard`**: bespoke spotlight/tilt/aurora media.
- **Work carousel** (`WorkShowcase`): native scroll-snap, swipe + arrow buttons, left-aligned to content + full-bleed right (`.bleed-right`).
- Magnetic buttons, custom cursor, scroll-progress bar, page transitions, WebGL hero/particles.

## Deployment
- Vercel, production from **`main`** (`Marco26-hub/webnew`). Pushing to `main` redeploys.
- `site.domain` (in `content.ts`) drives `metadataBase`/canonical → **update to the real/custom domain when set**.

## Env vars (set on Vercel)
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (and optional `CONTACT_FROM_EMAIL`) — required for the contact form to actually send email (`src/app/api/contact/route.ts`). Without them the form works but only logs + returns `{ ok:true, delivered:false }`.

## Not built / future
- **No admin / client-management backend.** The site is a marketing front-end: no auth, DB, CMS or dashboard. "Manage social from your site admin" is a *described service offering*, not a built feature. A real admin/client area would be a separate build (suggest Next.js + Supabase for auth + DB + dashboard).
- Real (non-illustrative) case studies; case studies are currently labeled "illustrative example".
- Optional: per-project case-study pages already exist at `/[lang]/work/[slug]`.

## Reminders
- 🔴 Revoke the GitHub Personal Access Token used for pushes (it passed through chat).
- Validate JSON-LD (Google Rich Results) + hreflang after deploys.

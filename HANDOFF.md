# Aether — Project Handoff

_Marketing site for an AI studio. Production deploys from `main` on Vercel
(`Marco26-hub/webnew`). This doc is the single source of truth for a fresh
session — read the "Status" section first._

---

## ▶ STATUS — start here (new conversation)
Site is **live and complete** as a bilingual marketing site. Latest work:
localized `/it`+`/en` routing, 5 service pillars (incl. 24/7 AI receptionist),
GEO/SEO (JSON-LD, llms.txt, hreflang), premium card effects, native work
carousel. Everything below under "Architecture/Services" is **done & deployed**.

### Open decisions / not yet built (pick up here)
1. **Pricing / Plans section** — *proposed, not built; awaiting user's model choice.*
   Add a monthly-plans section (the missing "how much"). User must choose:
   **à la carte retainers per service** vs **3 tiered bundles** (Starter/Growth/Scale).
   Build in IT+EN with `Offer`/`AggregateOffer` JSON-LD. US 2026 MRR benchmarks
   (adapt to EU): AI receptionist $149–299/mo · managed automation retainer
   $500–5k/mo · SEO+GEO $1.5k–10k/mo · social mgmt $2k–7.5k/mo · website care plan.
2. **Admin dashboard (Supabase)** — *fully planned, not built.* See "Admin plan" below.
   Needs the user's Supabase env vars (or MCP authorization) + one seeded admin user.
3. **Proposed new "trendy" services** (not added) — AI chatbot/support + **WhatsApp Business** automation; **AI ad creatives/UGC**; **GEO/AEO audit** as a low-cost entry offer; **AI Readiness/Automation audit**. Fold into existing pillars if approved.
4. **Content gaps to consider** — pricing (above), a "who it's for"/segments block, and **real** case studies (current ones are labeled "illustrative example").

### How to push (IMPORTANT — read-only session)
This environment has **read-only GitHub** (git proxy + GitHub MCP both 403). All
pushes so far were done by pointing git at `github.com` directly with a
**user-provided Personal Access Token** pasted in chat:
`git push "https://<USER>:<PAT>@github.com/Marco26-hub/webnew.git" HEAD:refs/heads/main HEAD:refs/heads/claude/vigilant-goodall-fuIsx`.
A new session must either have write access granted, or ask the user for a fresh PAT.
Feature branch: `claude/vigilant-goodall-fuIsx` (kept in sync with `main`).

---

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
- **Localized routing** `/it` + `/en` via `src/middleware.ts` (detect cookie → Accept-Language → `it`; 307-redirect non-prefixed paths; sets `x-locale`). Pages under `src/app/[lang]/`.
- **Root layout** `src/app/layout.tsx` owns `<html lang>`/`<body>`, reads `x-locale` + theme cookie; `force-dynamic`. **`[lang]/layout.tsx`** owns providers + chrome + Organization/WebSite JSON-LD.
- **i18n + theme**: `src/components/providers/AppProviders.tsx` (client context). Language switch navigates to the same path under the new locale. Theme = `light` class on `<html>` + cookie. All copy in **`src/lib/i18n.ts`** (`dictionaries.en/it`).
- **Content model**: `src/lib/i18n.ts` (pillars/services, work items, FAQ, copy), `src/lib/caseStudies.ts` (case studies + dev integrity check vs work slugs), `src/lib/content.ts` (brand-neutral: name, email, social, clients, `domain`).
- **SEO/GEO**: per-page `generateMetadata` + `src/lib/seo.ts` (canonical + hreflang `en/it/x-default`); `src/lib/structuredData.ts` + `src/components/seo/JsonLd.tsx`; `src/app/sitemap.ts` (both locales), `src/app/robots.ts`, `src/app/llms.txt/route.ts`. OG: `src/lib/og.tsx` + `opengraph-image.tsx`/`twitter-image.tsx`.

## Services — 5 pillars (`i18n.ts` `pillars.items`)
1. **AI Automation & Agents** — automations · multi-agent · SMB automation apps
2. **AI Voice & Reception** — 24/7 AI receptionist (answers calls, books appointments) · qualification & hand-off
3. **Websites & E-commerce** — landing → e-commerce → AI-automated site · redesign
4. **Social, automated** — social automation · manage social from the site admin
5. **Visibility & Growth** — SEO/GEO · lead research

Home: `CapabilitiesOrbit` (orbit of pillars) + FAQ. `/services`: `ServicesBento` + Process + FAQ.

## Premium UI effects
- **`SpotlightTilt`** (`src/components/ui/SpotlightTilt.tsx`): cursor spotlight + 3D tilt + glow, mouse-only + reduced-motion-safe. On testimonials, services bento, team cards.
- **`ProjectCard`**: bespoke spotlight/tilt/aurora media.
- **Work carousel** (`WorkShowcase`): native scroll-snap, swipe + arrow buttons, left-aligned to content + full-bleed right (`.bleed-right` utility in globals). Marquee (`Marquee`) is rAF-based + pauses on hover.
- Magnetic buttons, custom cursor, scroll-progress bar, page transitions, WebGL hero/particles.

## Admin plan (Supabase) — design ready, NOT implemented
Audience: **agency team only now, role-ready** for a future client portal. Modules:
**Leads, Clients, Appointments**. Auth: **email+password** (no public signup). DB:
**existing Supabase project** via env (do not create one).
- Deps: `@supabase/ssr`, `@supabase/supabase-js`, `server-only`.
- `src/lib/supabase/{client,server,admin,middleware}.ts` (browser / SSR-cookies server / service-role / `updateSession`).
- **Middleware**: add an `/admin`+`/api/admin` branch that runs `updateSession` and returns BEFORE the locale logic (so admin is never locale-redirected); add `"/api/admin/:path*"` to the matcher.
- Routes under `src/app/admin/` (outside `[lang]`): `login/` (unguarded) + `(protected)/` route group (guard via `auth.getUser()` → redirect `/admin/login`) with `page` (dashboard), `leads/`, `clients/`, `appointments/`. Mutations = Server Actions in `admin/actions.ts`; sign-in is client-side via the browser client.
- **Contact route** inserts the lead via the service-role client (guarded by `SUPABASE_SERVICE_ROLE_KEY`, never breaks email).
- **SQL migration** `supabase/migrations/0001_admin_dashboard_init.sql`: `profiles`(role), `clients`, `leads`, `appointments` + enums + `is_admin()` + RLS (admin-all; service role bypasses; `client_id` FK reserved for future scoping). Apply via Supabase SQL editor or `mcp__Supabase__apply_migration`. Seed admin: create user in Supabase Auth, then `insert into profiles(id,role) values('<uuid>','admin')`.
- Admin UI reuses tokens (`panel`, `--color-positive/warn/accent`) + `Button`/`Icons`; new `src/components/admin/*` (Sidebar, Table, StatusBadge, Field, StatCard, LoginForm, SignOutButton). Force dark via `className="dark"` on the shell.
- Env to add: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (server-only). Add `.env.example`.

## Env vars (Vercel)
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (+ optional `CONTACT_FROM_EMAIL`) — contact form email (`src/app/api/contact/route.ts`); without them it logs + returns `{ ok:true, delivered:false }`.
- (Admin, when built) the three `SUPABASE_*` vars above.

## Reminders
- 🔴 **Revoke the GitHub PAT** used for pushes (it passed through chat).
- Set `RESEND_*` to receive contact emails; set `site.domain` to the real/custom domain (drives canonical/OG).
- Validate JSON-LD (Google Rich Results) + hreflang after deploys; check Vercel Analytics/Speed Insights are enabled in the dashboard.

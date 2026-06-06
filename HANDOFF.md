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
2. **Admin dashboard** — ✅ *built* on **Neon Postgres + Drizzle + Better Auth** (replaces the
   earlier Supabase plan). Leads/Clients/Appointments at `/admin`. Just needs env vars +
   `npm run db:migrate` + `npm run db:seed`. See "Admin dashboard (implemented)" below.
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

## Admin dashboard (implemented) — Neon + Drizzle + Better Auth
Internal tool for the **agency team** (no public signup), role-ready for a future client
portal. Modules: **Leads, Clients, Appointments**. Lives at **`/admin`**, OUTSIDE `[lang]`
(middleware bypasses `/admin` so it's never locale-redirected). Forced dark theme.

- **Stack**: Neon Postgres · Drizzle ORM (`drizzle-orm/node-postgres` + `pg`) · Better Auth
  (email+password, `disableSignUp`, `admin()` plugin for roles). Auth tables + business
  tables share one Postgres DB.
- **Files**: `src/lib/db/{schema,index}.ts` (Drizzle schema + pooled client),
  `src/lib/auth.ts` (Better Auth server) + `src/lib/auth-client.ts` (browser client),
  `src/lib/admin/{auth,queries,format}.ts`, `src/app/api/auth/[...all]/route.ts` (Better Auth
  handler), `src/app/admin/` (`login/` + `(protected)/` group: dashboard, `leads/`,
  `clients/`, `appointments/`), `src/app/admin/actions.ts` (Server Actions — each re-checks
  `requireAdmin()`), `src/components/admin/*` (Sidebar, Table, StatusBadge, StatCard, Field,
  LoginForm, SignOutButton, StatusSelect, DeleteButton).
- **Auth guard**: `(protected)/layout.tsx` calls `requireAdmin()` (`auth.api.getSession` →
  redirect `/admin/login`; checks `role === "admin"`). Sign-in/out via the browser client.
- **Contact route** also persists each enquiry as a `leads` row (best-effort; never blocks
  the email — guarded by `DATABASE_URL`, dynamic import).
- **DB tooling** (package scripts): `db:generate` (✅ first migration committed at
  `drizzle/0000_*.sql`) · `db:migrate` / `db:push` (apply) · `db:studio` · `db:seed`
  (create first admin). Drizzle config: `drizzle.config.ts`.
- **Reuses site tokens** (`panel`, `--color-accent/positive/warn`, `Icons`).
- ⚠️ **kysely pin**: `overrides.kysely = 0.28.17` in `package.json` — Better Auth 1.6's bundled
  `@better-auth/kysely-adapter` imports `DEFAULT_MIGRATION_TABLE`/`_LOCK_TABLE` from `kysely`'s
  main entry, which **kysely 0.29.2 moved** to `kysely/migration`. The pin keeps the build green;
  revisit when Better Auth updates the adapter.

### Setup (one-time)
1. Create a **Neon** project → copy the **pooled** connection string (keep `?sslmode=require`).
2. `cp .env.example .env.local`, then fill `DATABASE_URL`, `BETTER_AUTH_SECRET`
   (`openssl rand -base64 32`), `BETTER_AUTH_URL`, and `SEED_ADMIN_*`.
3. `npm run db:migrate` (or `db:push`) → creates the tables.
4. `npm run db:seed` → creates the first admin. Sign in at `/admin/login`.
5. On **Vercel** set `DATABASE_URL`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL` (Production).

## Env vars (Vercel)
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (+ optional `CONTACT_FROM_EMAIL`) — contact form email (`src/app/api/contact/route.ts`); without them it logs + returns `{ ok:true, delivered:false }`.
- **Admin dashboard**: `DATABASE_URL` (Neon pooled, `?sslmode=require`), `BETTER_AUTH_SECRET`
  (`openssl rand -base64 32`), `BETTER_AUTH_URL` (prod URL). `SEED_ADMIN_*` are read only once by
  `npm run db:seed`. See `.env.example`.

## Reminders
- 🔴 **Revoke the GitHub PAT** used for pushes (it passed through chat).
- Set `RESEND_*` to receive contact emails; set `site.domain` to the real/custom domain (drives canonical/OG).
- Validate JSON-LD (Google Rich Results) + hreflang after deploys; check Vercel Analytics/Speed Insights are enabled in the dashboard.

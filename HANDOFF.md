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
The **admin dashboard is now LIVE in production** (Neon + Better Auth, login working).
Recent tweaks shipped to `main`: official email → `info@socialwebautomation.com`, the
**Testimonials section was removed**, softer card-marquee edge fade (`.mask-fade-x-wide`),
and a readability fix so forced-dark sections keep light text in light mode.

### Open decisions / not yet built (pick up here)
1. **Pricing / Plans section** — *proposed, not built; awaiting user's model choice.*
   Add a monthly-plans section (the missing "how much"). User must choose:
   **à la carte retainers per service** vs **3 tiered bundles** (Starter/Growth/Scale).
   Build in IT+EN with `Offer`/`AggregateOffer` JSON-LD. US 2026 MRR benchmarks
   (adapt to EU): AI receptionist $149–299/mo · managed automation retainer
   $500–5k/mo · SEO+GEO $1.5k–10k/mo · social mgmt $2k–7.5k/mo · website care plan.
2. **Admin dashboard** — ✅ **LIVE in production** on **Neon Postgres + Drizzle + Better Auth**.
   Leads/Clients/Appointments at `/admin`. Neon project created, schema + first admin seeded,
   and `DATABASE_URL`/`BETTER_AUTH_SECRET`/`BETTER_AUTH_URL` set on Vercel — login works.
   See "Admin dashboard (implemented)" below. **Pending:** harden the admin password (a weak one
   may have been set) and set `CONTACT_TO_EMAIL` so the contact form also emails enquiries.
3. **Proposed new "trendy" services** (not added) — AI chatbot/support + **WhatsApp Business** automation; **AI ad creatives/UGC**; **GEO/AEO audit** as a low-cost entry offer; **AI Readiness/Automation audit**. Fold into existing pillars if approved.
4. **Content gaps to consider** — pricing (above), a "who it's for"/segments block, and **real** case studies (current ones are labeled "illustrative example").

### How to push (IMPORTANT — read-only env + network allowlist)
This managed cloud env is **read-only for git**: the git proxy AND the GitHub MCP both return
**403 on writes**. Even `git push` to `github.com` directly is intercepted (403). Pushes are
therefore done via the **GitHub REST / Git-Data API** with a **user-provided fine-grained PAT**
(scopes: Contents + Pull requests = Read/Write):
- single file → `PUT /repos/.../contents/<path>` (needs the file's current `sha`);
- multi-file commit → create blobs → tree (`base_tree` = main's tree) → commit → `PATCH refs/heads/main`.
⚠️ The local working tree is on `claude/sleepy-pascal-tFOD1` and **diverges from `main`** (pushes
go straight to `main` via API). Before editing a file to push, **re-sync it from `main`** first
(`GET .../contents/<path>?ref=main` raw) so you don't revert other API-only changes.

**Network allowlist** (sandbox egress): npm + `api.github.com` work, but **`*.vercel.app`,
`*.neon.tech`, and browser CDNs (`cdn.playwright.dev`) are BLOCKED**. So this session **cannot**
reach the live site, the Neon DB, or download a browser. Verify deploys via the **GitHub
deployments API** (poll Production status for the pushed SHA) and ask the user to confirm visuals.
To run/seed the DB you must be where Neon is reachable (user's machine, or Neon's SQL editor).

This session's branch: `claude/sleepy-pascal-tFOD1` (PR #1 merged to `main`). The older
`claude/vigilant-goodall-fuIsx` branch is **stale** (0 commits ahead of `main`) — safe to delete.

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

### Setup — ✅ DONE in production
Neon project created; schema applied + first admin seeded (run as one SQL script in Neon's SQL
editor, since the sandbox can't reach Neon); `DATABASE_URL`, `BETTER_AUTH_SECRET`,
`BETTER_AUTH_URL` set on Vercel (Production); login verified live.
- **Login:** `/admin/login`. Seeded admin = `admin@aether.studio` (a rename to
  `marco@aether.studio` + a weak password may have been applied via SQL — confirm with the user).
- **Change credentials** (no admin UI for it yet) → run SQL on Neon. Hash a password with Better
  Auth scrypt: `node -e "import('better-auth/crypto').then(m=>m.hashPassword('<pw>').then(console.log))"`,
  then `UPDATE "user" SET email=…, name=… WHERE …;` and `UPDATE account SET password='<hash>'
  WHERE provider_id='credential' AND user_id=(SELECT id FROM "user" WHERE email=…);`.
- To set up fresh elsewhere: `cp .env.example .env.local` → fill `DATABASE_URL` +
  `BETTER_AUTH_SECRET` + `SEED_ADMIN_*` → `npm run db:migrate` (or `db:push`) → `npm run db:seed`.

## Env vars (Vercel)
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (+ optional `CONTACT_FROM_EMAIL`) — contact form email (`src/app/api/contact/route.ts`); without them it logs + returns `{ ok:true, delivered:false }`.
- **Admin dashboard** (✅ all three set on Vercel Production): `DATABASE_URL` (Neon pooled,
  `?sslmode=require`), `BETTER_AUTH_SECRET` (`openssl rand -base64 32`), `BETTER_AUTH_URL` (prod URL).
  `SEED_ADMIN_*` are read only once by `npm run db:seed`. See `.env.example`.

## Reminders
- 🔴 **Revoke the GitHub PAT** used for pushes (it passed through chat) once done iterating.
- 🔴 **Harden the admin password** (a weak one may be live) + align the admin login to the official email.
- Set **`CONTACT_TO_EMAIL`** (+ `RESEND_API_KEY`) on Vercel so the contact form also emails enquiries
  to `info@socialwebautomation.com` (leads already persist to `/admin/leads` regardless).
- Set `site.domain` to the real/custom domain (drives canonical/OG). Public email is now
  `info@socialwebautomation.com` (`src/lib/content.ts` → `site.email`).
- **Delete the stale branch** `claude/vigilant-goodall-fuIsx` (0 commits ahead of `main`).
- Leftovers from the testimonials removal: `t.testimonials` copy still sits unused in `i18n.ts` and
  `.mask-fade-x-wide` is now unused — harmless, tidy up if desired.
- Validate JSON-LD (Google Rich Results) + hreflang after deploys; check Vercel Analytics/Speed Insights are enabled in the dashboard.

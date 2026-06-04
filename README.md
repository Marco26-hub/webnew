# Aether — Cinematic AI Agency Site

A cutting-edge, "Premium DNA" website for an AI engineering studio. Editorial &
bold design language (navy + cyan glow), scroll-driven storytelling, live WebGL,
and production-grade Next.js.

## Stack

- **Next.js 15** (App Router) · **TypeScript** · **Tailwind CSS v4** (design tokens via `@theme`)
- **Three.js** — raw WebGL for the cinematic hero background and interactive particle depth
- **Framer Motion** — scroll choreography, reveals, page transitions, micro-interactions
- **Lenis** — buttered smooth scroll, synced with Framer Motion's `useScroll`

## What's inside

| Feature | Where |
| --- | --- |
| Cinematic WebGL hero (domain-warped nebula) | `components/webgl/CinematicBackground.tsx` |
| Interactive WebGL particle depth (cursor parts the field) | `components/webgl/ParticleField.tsx` |
| "Chaos → Order" — scroll-scrubbed particle sequence | `components/scroll/ChaosToOrder.tsx` |
| Orbital scroll choreography (elements recompose) | `components/sections/CapabilitiesOrbit.tsx` |
| Horizontal scroll (vertical → horizontal hand-off) | `components/scroll/HorizontalScroll.tsx` |
| Magnetic buttons / custom cursor / scroll progress | `components/ui/*` |
| Design tokens (color, type, radius, motion, easing) | `app/globals.css` (`@theme`) |
| All copy in one place ("context graph") | `lib/content.ts` |

Pages: **Home**, **Work**, **Services**, **About**, **Contact**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Customize

- **Brand & copy** → `src/lib/content.ts`
- **Design tokens** (palette, type, radius, easing) → `@theme` block in `src/app/globals.css`
- **Real video / frame assets** → see `public/assets/README.md`

Everything reads from the tokens and the content model, so re-skinning or
rebranding is a small, contained edit — not a rewrite.

# Pieraksts — Web Landing

Marketing / landing site for **Pieraksts**, a mobile-first beauty and personal
care booking marketplace for Latvia, starting in Riga.

> Make booking a salon as simple and fast as ordering a ride: no calls, no DMs,
> real availability.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, and
`next/font` (Manrope for display, Inter for body) — mirroring the Expo app's
brand system.

## Landing variants

Three landing-page variants are shipped side by side so the team can compare
directions. A floating **variant switcher** (bottom-right of every page) hops
between them.

| Route    | Name                   | Concept                                                       |
| -------- | ---------------------- | ------------------------------------------------------------ |
| `/one`   | Riga-First Editorial   | Riga hero image, then calm sections. Local trust first.      |
| `/two`   | Product UI Mosaic      | Shows the product via recreated app UI fragments (no shots). |
| `/three` | Split-Audience Utility | Direct, documentation-calm page organised by role.           |

`/` redirects to `/one` (the default, set in `src/lib/variants.ts`).

## Project layout

```txt
src/
  app/
    page.tsx              # redirects to the default variant
    one|two|three/page.tsx
    layout.tsx            # fonts + global variant switcher
    globals.css           # brand tokens (mirrors constants/design-system.ts)
  components/
    site-header.tsx
    site-footer.tsx
    variant-switcher.tsx  # floating control (client component)
    landing-button.tsx    # pill CTA
    role-section.tsx
    app-ui-mockups.tsx    # recreated app UI fragments for /two
    section.tsx, brand-mark.tsx
    ui/button.tsx         # shadcn
  lib/
    content.ts            # all landing copy + product facts (i18n-ready)
    variants.ts           # variant registry + default
public/brand/             # logo, Riga hero, category tiles (copied from the app)
```

All copy lives in `src/lib/content.ts` so the variants share one source of
truth and i18n can be added later without touching JSX.

## Develop

```bash
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Deploy

Targeted at Vercel with the purchased domain `pieraksts.app`; SSL is handled by
Vercel after the domain is assigned. No backend secrets live in this repo —
waitlist / "list your salon" CTAs currently use `mailto:` and should be swapped
for a real form when available.

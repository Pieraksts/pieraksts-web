# Pieraksts — Web Landing

Marketing / landing site for **Pieraksts**, a mobile-first beauty and personal
care booking marketplace for Latvia, starting in Riga.

> Make booking a salon as simple and fast as ordering a ride: no calls, no DMs,
> real availability.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui,
`next-intl` for localisation, and `next/font` (Manrope for display, Inter for
body) — mirroring the Expo app's brand system.

## Localisation (Latvian-first)

Uses **`next-intl`** with locale-prefixed routing. Latvian is the default and
lives at the root with **no prefix**; English is served from `/en`.

| URL     | Locale  |
| ------- | ------- |
| `/`     | Latvian |
| `/en`   | English |
| `/lv`   | → redirects to `/` (default locale is never prefixed) |

- Browser language detection is **off** — visitors always land on Latvian and
  opt into English via the header switcher (`localeDetection: false` in
  `src/i18n/routing.ts`). Flip it on there if you want Accept-Language detection.
- A minimal **LV / EN switcher** sits in the header; switching keeps the user on
  the same page.
- All copy lives in `messages/lv.json` and `messages/en.json`.

## Project layout

```txt
messages/
  lv.json, en.json        # all translated copy (the source of truth)
src/
  i18n/
    routing.ts            # locales, default, as-needed prefix, detection
    navigation.ts         # locale-aware Link / useRouter / usePathname
    request.ts            # loads messages per request
  proxy.ts                # next-intl middleware (Next 16 "proxy" convention)
  app/
    [locale]/
      layout.tsx          # fonts, <html lang>, NextIntlClientProvider, metadata
      page.tsx            # the landing page
    globals.css           # brand tokens (mirrors constants/design-system.ts)
  components/
    site-header.tsx       # brand, language switcher, CTAs
    site-footer.tsx
    language-switcher.tsx  # minimal LV / EN toggle (client)
    landing-button.tsx     # pill CTA
    reveal.tsx             # scroll-reveal wrapper (IntersectionObserver)
    app-ui-mockups.tsx     # recreated app UI fragments (cascading card deck)
    section.tsx, brand-mark.tsx
    ui/button.tsx         # shadcn
  lib/
    site-config.ts        # locale-independent constants (name, CTA mailtos)
public/brand/             # logo, Riga hero, category tiles (copied from the app)
```

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

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
- UI copy lives in `messages/lv.json` and `messages/en.json`. Legal documents
  live in `src/lib/legal/*.ts`.

## Project layout

```txt
messages/
  lv.json, en.json          # UI copy (legal documents are in src/lib/legal/)
public/brand/               # logo, OG image, Riga hero, category tiles
src/
  proxy.ts                  # next-intl middleware (Next 16 "proxy" convention)
  i18n/
    routing.ts              # locales, default, as-needed prefix, detection
    navigation.ts           # locale-aware Link / useRouter / usePathname
    request.ts              # loads messages per request
  app/
    [locale]/
      layout.tsx            # fonts, <html lang>, NextIntlClientProvider, metadata
      page.tsx              # the landing page
      billing/
        return/page.tsx     # web checkout return (noindex)
        cancelled/page.tsx  # web checkout cancel (noindex)
      legal/
        terms-of-service/, privacy-policy/, cookie-policy/,
        community-guidelines/, account-deletion/   # one page.tsx each
    api/waitlist/route.ts   # waitlist signup, calls the Supabase join_waitlist RPC
    globals.css             # brand tokens (mirrors constants/design-system.ts)
    robots.ts, sitemap.ts
    icon.png, apple-icon.png, favicon.ico
  components/
    site-header.tsx         # brand, language switcher, CTAs
    site-footer.tsx         # brand, legal links
    language-switcher.tsx   # LV / EN toggle (client)
    landing-button.tsx      # ctaVariants, the pill CTA styles
    waitlist-cta.tsx        # CTA button that opens the waitlist dialog (client)
    waitlist-form.tsx       # waitlist form, POSTs to /api/waitlist (client)
    billing-outcome.tsx     # shared body of the two billing pages
    legal-page.tsx          # shared chrome for the legal pages
    legal-document.tsx      # renders the legal Markdown subset
    reveal.tsx              # scroll-reveal wrapper (IntersectionObserver)
    app-ui-mockups.tsx      # recreated app UI fragments (cascading card deck)
    section.tsx, brand-mark.tsx
    ui/button.tsx           # shadcn
  lib/
    site-config.ts          # brand name, site URL, App Store Connect legal URLs
    legal-content.ts        # legal document exports, effective date, LEGAL_ROUTES
    legal/                  # one module per legal document, plus company.ts
    consent.ts              # waitlist roles and consent version
    app-return.ts           # allow-lists the billing pages' app_return URL
    utils.ts                # cn()
```

## App Store Connect URLs

These are the legal URLs to enter in App Store Connect. `src/lib/site-config.ts`
holds the same values.

| Document             | URL                                                |
| -------------------- | -------------------------------------------------- |
| Terms of Service     | https://pieraksts.app/legal/terms-of-service       |
| Privacy Policy       | https://pieraksts.app/legal/privacy-policy         |
| Cookie Policy        | https://pieraksts.app/legal/cookie-policy          |
| Community Guidelines | https://pieraksts.app/legal/community-guidelines   |
| Account deletion     | https://pieraksts.app/legal/account-deletion       |

## Develop

```bash
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Deploy

Targeted at Vercel with the purchased domain `pieraksts.app`; SSL is handled by
Vercel after the domain is assigned.

The waitlist form POSTs to `/api/waitlist`. That route calls Supabase, so set
`SUPABASE_URL` and `SUPABASE_ANON_KEY` in the Vercel project. Both are
server-only. Do not prefix them with `NEXT_PUBLIC_`. See `.env.example`. For
local development, copy it to `.env.local` and fill in the values.

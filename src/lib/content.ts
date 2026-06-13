/**
 * Centralised landing copy and product facts.
 * Kept in one place so all three variants share the same truth and so i18n
 * can be layered on later without hunting through JSX.
 *
 * Terminology follows UBIQUITOUS_LANGUAGE.md: Client (not customer),
 * Salon Owner (not generic business user), Salon, Service, Specialist, Booking.
 */

export const site = {
  name: "Pieraksts",
  tagline: "Beauty bookings in Riga, without calls or DMs",
  description:
    "Pieraksts helps clients find real salon availability and helps salon owners keep services, specialists, and bookings in one calm schedule.",
  location: "Riga, Latvia",
  // No backend form yet — CTAs point at mailto. Swap for a real form later.
  clientCtaHref: "mailto:hello@pieraksts.app?subject=Join%20the%20Pieraksts%20waitlist",
  ownerCtaHref: "mailto:salons@pieraksts.app?subject=List%20my%20salon%20on%20Pieraksts",
} as const;

export const hero = {
  eyebrow: "Beauty & personal care · Riga",
  headline: "Beauty bookings in Riga, without calls or DMs",
  subhead:
    "As simple and fast as ordering a ride: no calls, no DMs, real availability. Discover salons, pick a time, and confirm in a few taps.",
  primaryCta: "Join the waitlist",
  secondaryCta: "For salon owners",
  note: "Free to join during launch · Pay your salon directly, at the salon",
} as const;

/** The two audiences the product speaks to. */
export const audiences = {
  client: {
    eyebrow: "For clients",
    title: "Find a salon and book in minutes",
    description:
      "Discover salons near you, see real availability, and keep your routine in one place.",
    cta: "Join the waitlist",
    points: [
      "Discover salons across Riga by service",
      "See real availability — no back-and-forth messages",
      "Book a visit and manage upcoming bookings",
      "Keep your favourite salons one tap away",
    ],
  },
  owner: {
    eyebrow: "For salon owners",
    title: "Your services, specialists, and bookings in one calm schedule",
    description:
      "Set up your salon once, then manage your day without the phone glued to your hand.",
    cta: "List your salon",
    points: [
      "Set up your salon profile, services, and working hours",
      "Add your specialists and what each one offers",
      "Manage incoming bookings and add manual bookings",
      "Block time off so your schedule always tells the truth",
    ],
  },
} as const;

/** Client booking flow, three steps. */
export const steps = [
  {
    n: "01",
    title: "Discover",
    body: "Browse salons in Riga by the service you want, from a haircut to a manicure.",
  },
  {
    n: "02",
    title: "Choose a time",
    body: "See real availability for a specialist and pick a slot that actually works.",
  },
  {
    n: "03",
    title: "Confirm",
    body: "Book in a few taps. Your upcoming bookings stay in one place.",
  },
] as const;

/** What a salon owner gets — short value strip. */
export const ownerValue = [
  { title: "Services", body: "List what you offer with durations and prices." },
  { title: "Specialists", body: "Add your team and the services each one performs." },
  { title: "Working hours", body: "Set opening hours so availability is always accurate." },
  { title: "Manual bookings", body: "Add walk-ins and phone bookings to keep one schedule." },
] as const;

/** Honest MVP business model — no payments/subscriptions promised as launched. */
export const model = {
  eyebrow: "How it works at launch",
  title: "Free to join. Pay at the salon.",
  points: [
    {
      title: "Free for clients",
      body: "Discovering salons and booking visits costs nothing.",
    },
    {
      title: "Free for salons at launch",
      body: "Join early and set up your salon at no cost while we grow in Riga.",
    },
    {
      title: "Pay directly at the salon",
      body: "No in-app payments, deposits, or subscriptions in the first release.",
    },
  ],
} as const;

/** Service categories — mirror the app's category tiles. */
export const categories = [
  { label: "Hair", image: "/brand/category-tiles/hair.jpg" },
  { label: "Manicure", image: "/brand/category-tiles/manicure.jpg" },
  { label: "Lashes", image: "/brand/category-tiles/lashes.jpg" },
  { label: "Barber", image: "/brand/category-tiles/barber.jpg" },
  { label: "Facial", image: "/brand/category-tiles/facial.jpg" },
  { label: "Makeup", image: "/brand/category-tiles/makeup.jpg" },
] as const;

export const footer = {
  blurb: "A beauty and personal care booking marketplace for Latvia, starting in Riga.",
  note: "Launching soon in Riga.",
} as const;

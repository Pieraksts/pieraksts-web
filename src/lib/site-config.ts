/** Locale-independent site constants (brand name, contact links). */
export const siteConfig = {
  name: "Pieraksts",
  url: "https://pieraksts.app",
  // No backend form yet — CTAs point at mailto. Swap for a real form later.
  clientCtaHref:
    "mailto:hello@pieraksts.app?subject=Pieraksts%20waitlist",
  ownerCtaHref:
    "mailto:salons@pieraksts.app?subject=List%20my%20salon%20on%20Pieraksts",
} as const;

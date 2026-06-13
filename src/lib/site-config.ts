/** Locale-independent site constants (brand name, contact links). */
export const siteConfig = {
  name: "Pieraksts",
  url: "https://pieraksts.app",
  // Signups go through the waitlist form (POST /api/waitlist), not mailto.
  privacyUrl: "https://pieraksts.app/legal/privacy-policy",
  termsUrl: "https://pieraksts.app/legal/terms-of-service",
} as const;

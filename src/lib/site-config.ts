/** Locale-independent site constants (brand name, contact links). */
export const siteConfig = {
  name: "Pieraksts",
  url: "https://pieraksts.app",
  // Signups go through the waitlist form (POST /api/waitlist), not mailto.
  // Absolute URLs — these are what go into App Store Connect. The privacy and
  // support URLs are required for every submission; accountDeletionUrl is
  // required for any app with account creation (Review Guideline 5.1.1(v)).
  termsUrl: "https://pieraksts.app/legal/terms-of-service",
  privacyUrl: "https://pieraksts.app/legal/privacy-policy",
  cookiesUrl: "https://pieraksts.app/legal/cookie-policy",
  guidelinesUrl: "https://pieraksts.app/legal/community-guidelines",
  accountDeletionUrl: "https://pieraksts.app/legal/account-deletion",
} as const;

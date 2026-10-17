/**
 * Public entry point for the site's legal documents.
 *
 * Each document lives in its own module under `src/lib/legal/`, holds Latvian
 * and English versions, and is written in the small Markdown subset that
 * <LegalDocument> renders (## / ### headings, "- " bullets, paragraphs and
 * [text](/path) links). The operator's legal identity is interpolated from
 * `legal/company.ts` so it only has to be maintained in one place.
 *
 * NOTE: this is operator-provided documentation, not legal advice. Have it
 * reviewed by a qualified lawyer before launch. When the wording materially
 * changes, bump LEGAL_EFFECTIVE_DATE below and, for the waitlist consent copy,
 * CONSENT_VERSION in src/lib/consent.ts.
 */

export { termsDoc } from "./legal/terms";
export { privacyDoc } from "./legal/privacy";
export { cookiesDoc } from "./legal/cookies";
export { guidelinesDoc } from "./legal/guidelines";
export { deletionDoc } from "./legal/deletion";

export const LEGAL_EFFECTIVE_DATE = "2026-10-17";

/** Every legal route, in the order they appear in the footer and sitemap. */
export const LEGAL_ROUTES = [
  "/legal/terms-of-service",
  "/legal/privacy-policy",
  "/legal/cookie-policy",
  "/legal/community-guidelines",
  "/legal/account-deletion",
] as const;

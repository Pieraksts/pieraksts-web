/**
 * Version stamp for the waitlist consent copy. Bump this (and the matching
 * `waitlist.consentNote` translations) whenever the wording materially changes,
 * so each stored signup records exactly which consent text the person agreed to.
 */
export const CONSENT_VERSION = "2026-06-13";

export const WAITLIST_ROLES = ["client", "salon_owner", "both"] as const;
export type WaitlistRole = (typeof WAITLIST_ROLES)[number];

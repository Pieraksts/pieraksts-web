import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["lv", "en"],
  defaultLocale: "lv",
  // Default locale has no prefix (/), others are prefixed (/en).
  localePrefix: "as-needed",
  // Hard default to Latvian — don't auto-redirect by browser language.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

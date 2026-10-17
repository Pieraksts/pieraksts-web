import { useTranslations } from "next-intl";
import { BrandMark } from "@/components/brand-mark";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";

/** Footer legal nav. Mirrors LEGAL_ROUTES in src/lib/legal-content.ts. */
const LEGAL_LINKS = [
  { href: "/legal/terms-of-service", key: "terms" },
  { href: "/legal/privacy-policy", key: "privacy" },
  { href: "/legal/cookie-policy", key: "cookies" },
  { href: "/legal/community-guidelines", key: "guidelines" },
  { href: "/legal/account-deletion", key: "deletion" },
] as const;

export function SiteFooter() {
  const t = useTranslations();

  return (
    <footer className="border-t border-hairline bg-warm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-col gap-2">
          <BrandMark />
          <p className="max-w-sm text-sm text-ink-muted">{t("footer.blurb")}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-ink-soft sm:items-end">
          <nav
            aria-label={t("footer.legalHeading")}
            className="flex flex-wrap gap-x-4 gap-y-1.5 sm:justify-end"
          >
            {LEGAL_LINKS.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-foreground"
              >
                {t(`footer.${key}`)}
              </Link>
            ))}
          </nav>
          <span>{t("footer.note")}</span>
          <span>
            {t("footer.rights", {
              year: new Date().getFullYear(),
              name: siteConfig.name,
              location: t("site.location"),
            })}
          </span>
        </div>
      </div>
    </footer>
  );
}

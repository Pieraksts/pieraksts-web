import { useTranslations } from "next-intl";
import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: { className?: string }) {
  const t = useTranslations();

  return (
    <footer className={cn("border-t border-hairline bg-warm", className)}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-col gap-2">
          <BrandMark />
          <p className="max-w-sm text-sm text-ink-muted">{t("footer.blurb")}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-ink-soft sm:items-end">
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

import { useTranslations } from "next-intl";
import { BrandMark } from "@/components/brand-mark";
import { WaitlistCta } from "@/components/waitlist-cta";
import { LanguageSwitcher } from "@/components/language-switcher";

export function SiteHeader() {
  const t = useTranslations("hero");

  return (
    <header className="sticky top-0 z-30 w-full border-b border-hairline/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
        <BrandMark wordmarkClassName="hidden xs:inline-block" />
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <WaitlistCta
            role="salon_owner"
            label={t("secondaryCta")}
            variant="ghost"
            size="md"
            className="hidden sm:inline-flex"
          />
          <WaitlistCta
            role="client"
            label={t("primaryCta")}
            variant="primary"
            size="md"
          />
        </div>
      </div>
    </header>
  );
}

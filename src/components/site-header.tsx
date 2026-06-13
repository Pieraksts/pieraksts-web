import { useTranslations } from "next-intl";
import { BrandMark } from "@/components/brand-mark";
import { LandingButton } from "@/components/landing-button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader({ className }: { className?: string }) {
  const t = useTranslations("hero");

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full border-b border-hairline/80 bg-background/80 backdrop-blur-md",
        className
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
        <BrandMark wordmarkClassName="hidden xs:inline-block" />
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <LandingButton
            href={siteConfig.ownerCtaHref}
            variant="ghost"
            size="md"
            className="hidden sm:inline-flex"
          >
            {t("secondaryCta")}
          </LandingButton>
          <LandingButton href={siteConfig.clientCtaHref} variant="primary" size="md">
            {t("primaryCta")}
          </LandingButton>
        </div>
      </div>
    </header>
  );
}

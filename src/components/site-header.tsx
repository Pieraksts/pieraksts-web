import { BrandMark } from "@/components/brand-mark";
import { LandingButton } from "@/components/landing-button";
import { hero, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full border-b border-hairline/80 bg-background/80 backdrop-blur-md",
        className
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <BrandMark />
        <div className="flex items-center gap-2">
          <LandingButton
            href={site.ownerCtaHref}
            variant="ghost"
            size="md"
            className="hidden sm:inline-flex"
          >
            {hero.secondaryCta}
          </LandingButton>
          <LandingButton href={site.clientCtaHref} variant="primary" size="md">
            {hero.primaryCta}
          </LandingButton>
        </div>
      </div>
    </header>
  );
}

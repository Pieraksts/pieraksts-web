"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/**
 * Minimal LV / EN toggle. Switching keeps the user on the same page; the
 * default locale (lv) has no URL prefix, English is served from /en.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-hairline bg-background p-0.5",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            aria-pressed={active}
            disabled={active || isPending}
            onClick={() =>
              startTransition(() => {
                router.replace(pathname, { locale: l });
              })
            }
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
              active
                ? "bg-foreground text-background"
                : "cursor-pointer text-ink-muted hover:text-foreground"
            )}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, X } from "lucide-react";
import { VARIANTS } from "@/lib/variants";
import { cn } from "@/lib/utils";

/**
 * Floating control for hopping between the three landing-page variants.
 * Lives in the root layout so it is available on every route.
 */
export function VariantSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeSlug = VARIANTS.find((v) => pathname?.startsWith(v.path))?.slug;

  return (
    <div className="fixed bottom-4 right-4 z-50 print:hidden">
      {open ? (
        <div className="w-72 overflow-hidden rounded-2xl border border-hairline bg-background/95 shadow-[0_8px_30px_rgba(26,22,18,0.12)] backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
            <span className="eyebrow">Landing variants</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close variant switcher"
              className="grid size-7 place-items-center rounded-full text-ink-muted transition-colors hover:bg-warm-strong hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
          <ul className="flex flex-col p-2">
            {VARIANTS.map((v) => {
              const active = v.slug === activeSlug;
              return (
                <li key={v.slug}>
                  <Link
                    href={v.path}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors",
                      active
                        ? "bg-brand-soft"
                        : "hover:bg-warm-strong"
                    )}
                  >
                    <span className="flex items-center justify-between">
                      <span
                        className={cn(
                          "font-display text-sm font-bold tracking-tight",
                          active ? "text-brand-strong" : "text-foreground"
                        )}
                      >
                        {v.path} · {v.name}
                      </span>
                      {active ? (
                        <span className="size-2 rounded-full bg-brand" />
                      ) : null}
                    </span>
                    <span className="text-xs leading-snug text-ink-muted">
                      {v.description}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 items-center gap-2 rounded-full border border-hairline bg-background/95 pl-3 pr-4 text-sm font-medium text-foreground shadow-[0_8px_30px_rgba(26,22,18,0.12)] backdrop-blur-md transition-colors hover:bg-warm-strong"
        >
          <Layers className="size-4 text-brand" />
          Variant
          <span className="font-display font-bold tracking-tight text-brand-strong">
            {activeSlug ? `/${activeSlug}` : "—"}
          </span>
        </button>
      )}
    </div>
  );
}

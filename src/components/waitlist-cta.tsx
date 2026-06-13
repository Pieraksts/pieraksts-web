"use client";

import { useState } from "react";
import { Dialog } from "radix-ui";
import { type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { ctaVariants } from "@/components/landing-button";
import { WaitlistForm } from "@/components/waitlist-form";
import { type WaitlistRole } from "@/lib/consent";
import { cn } from "@/lib/utils";

type WaitlistCtaProps = VariantProps<typeof ctaVariants> & {
  /** Pre-selects the role in the form based on which CTA was clicked. */
  role?: WaitlistRole;
  label: string;
  className?: string;
};

export function WaitlistCta({
  role = "client",
  label,
  variant,
  size,
  className,
}: WaitlistCtaProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("waitlist");

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={cn(ctaVariants({ variant, size, className }))}>
        {label}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-warm-border bg-background p-6 shadow-[0_24px_70px_-20px_rgba(26,22,18,0.45)] focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95">
          <div className="mb-4 flex flex-col gap-1 pr-8">
            <Dialog.Title className="font-display text-xl font-extrabold tracking-tight text-foreground">
              {t("title")}
            </Dialog.Title>
            <Dialog.Description className="text-sm text-ink-muted">
              {t("subtitle")}
            </Dialog.Description>
          </div>
          <Dialog.Close
            aria-label={t("close")}
            className="absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-warm-strong hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 focus:outline-none"
          >
            <X className="size-4" />
          </Dialog.Close>
          <WaitlistForm defaultRole={role} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

import { getTranslations } from "next-intl/server";
import { CheckCircle2, Info, Smartphone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ctaVariants } from "@/components/landing-button";
import { cn } from "@/lib/utils";

/**
 * Shared chrome for the two billing landing pages. The page reads no state,
 * so the copy never says the plan is active: only the verified provider
 * webhook grants access. Two endings: with an allow-listed `appReturnUrl` a
 * button opens the app; without one, a titled block tells the owner to open it.
 */
export async function BillingOutcomePage({
  outcome,
  appReturnUrl,
}: {
  outcome: "return" | "cancelled";
  /** Already allow-listed by `resolveAppReturnUrl`; `null` when absent or refused. */
  appReturnUrl: string | null;
}) {
  const t = await getTranslations("billing");
  const isReturn = outcome === "return";
  const Icon = isReturn ? CheckCircle2 : Info;

  return (
    <main className="flex flex-1 flex-col">
      <SiteHeader />

      <article className="mx-auto flex w-full max-w-xl flex-col px-5 py-14 sm:px-8 sm:py-24">
        {/* Announced together, so assistive tech reads the outcome as one
            message rather than an icon followed by an orphaned heading. */}
        <div role="status" className="flex flex-col">
          <span
            className={cn(
              "flex size-12 shrink-0 items-center justify-center rounded-2xl",
              isReturn
                ? "bg-brand-soft text-brand-strong"
                : "bg-warm-strong text-ink-muted"
            )}
          >
            <Icon className="size-6" aria-hidden />
          </span>

          <h1 className="mt-7 text-balance font-display text-3xl leading-[1.1] font-extrabold tracking-tight text-foreground sm:text-4xl">
            {t(isReturn ? "return.title" : "cancelled.title")}
          </h1>

          <p className="mt-4 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            {t(isReturn ? "return.body" : "cancelled.body")}
          </p>
        </div>

        {appReturnUrl ? (
          <div className="mt-9 flex flex-col items-start gap-3 border-t border-hairline pt-8">
            {/* A custom scheme, so a plain anchor rather than `next/link`: this
                leaves the site rather than navigating within it. */}
            <a
              href={appReturnUrl}
              className={cn(ctaVariants({ variant: "brand" }), "w-full sm:w-auto")}
            >
              {t("openApp")}
            </a>
            <p className="text-pretty text-sm leading-relaxed text-ink-muted">
              {t(isReturn ? "return.nextStep" : "cancelled.nextStep")}
            </p>
          </div>
        ) : (
          <div className="mt-9 flex gap-4 rounded-2xl border border-warm-border bg-warm p-5 sm:p-6">
            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-warm-strong text-ink-muted">
              <Smartphone className="size-[1.15rem]" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="font-display text-base font-bold tracking-tight text-foreground">
                {t("openApp")}
              </p>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-muted">
                {t(
                  isReturn ? "return.nextStepManual" : "cancelled.nextStepManual"
                )}
              </p>
            </div>
          </div>
        )}
      </article>

      <SiteFooter />
    </main>
  );
}

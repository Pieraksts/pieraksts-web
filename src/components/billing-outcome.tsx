import { getTranslations } from "next-intl/server";
import { CheckCircle2, Info, Smartphone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ctaVariants } from "@/components/landing-button";
import { cn } from "@/lib/utils";

/**
 * Shared chrome for the two PAY-1 billing landing pages.
 *
 * These pages are where the payment provider returns a Salon Owner after web
 * checkout. They are deliberately inert: they hold no Supabase session, no
 * service-role key, and no Stripe key, and they read no state at all.
 *
 * That is why the copy never says the subscription is active. Entitlement is
 * granted only by a verified provider webhook reaching the backend, which may
 * land a moment after the owner is redirected here. Claiming success on this
 * page would be the one place in the system where a payment redirect, rather
 * than a verified event, appeared to grant access.
 *
 * The visual treatment carries the same restraint. The success page is warm but
 * not celebratory, because what happened is "we have your card", not "you are
 * live" — and the owner finds out which in the app, not here.
 *
 * PAY-008 adds one thing and changes none of the above: a link back into the
 * app. Under PAY-1 these pages were where the owner stopped, which is why the
 * app could never tell a cancelled checkout from a closed browser. The link is
 * still just a link — it reports nothing, grants nothing, and the app re-reads
 * canonical server state when it receives it.
 *
 * The page therefore has two genuinely different endings, and both are
 * designed rather than one being the other minus a button:
 *
 * - with an allow-listed return target, the button *is* the way back, so the
 *   text beside it says what happens next instead of repeating the instruction
 *   the button already carries;
 * - without one — the parameter was absent, repeated, or refused by the
 *   allow-list — there is no link this page is permitted to build, so the way
 *   back becomes an explicit, titled instruction rather than a paragraph left
 *   standing where a button used to be.
 */
export async function BillingOutcomePage({
  outcome,
  appReturnUrl,
}: {
  outcome: "return" | "cancelled";
  /** Already allow-listed by `resolveAppReturnUrl`; `null` when absent or refused. */
  appReturnUrl?: string | null;
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

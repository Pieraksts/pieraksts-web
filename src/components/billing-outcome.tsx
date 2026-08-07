import { getTranslations } from "next-intl/server";
import { CheckCircle2, Info } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

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
 */
export async function BillingOutcomePage({
  outcome,
}: {
  outcome: "return" | "cancelled";
}) {
  const t = await getTranslations("billing");
  const isReturn = outcome === "return";
  const Icon = isReturn ? CheckCircle2 : Info;

  return (
    <main className="flex flex-1 flex-col">
      <SiteHeader />

      <article className="mx-auto flex w-full max-w-xl flex-col px-5 py-16 sm:px-8 sm:py-24">
        {/* Announced together, so assistive tech reads the outcome as one
            message rather than an icon followed by an orphaned heading. */}
        <div role="status" className="flex flex-col">
          <span
            className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${
              isReturn
                ? "bg-brand-soft text-brand-strong"
                : "bg-warm-strong text-ink-muted"
            }`}
          >
            <Icon className="size-6" aria-hidden />
          </span>

          <h1 className="mt-7 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {t(isReturn ? "return.title" : "cancelled.title")}
          </h1>

          <p className="mt-4 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            {t(isReturn ? "return.body" : "cancelled.body")}
          </p>
        </div>

        <p className="mt-8 rounded-2xl border border-warm-border bg-warm px-5 py-4 text-sm leading-relaxed text-ink-muted">
          {t(isReturn ? "return.nextStep" : "cancelled.nextStep")}
        </p>
      </article>

      <SiteFooter />
    </main>
  );
}

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
      <article className="mx-auto w-full max-w-xl px-5 py-16 sm:px-8 sm:py-24">
        <Icon
          className={`size-10 ${isReturn ? "text-foreground" : "text-ink-muted"}`}
          aria-hidden
        />
        <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {t(isReturn ? "return.title" : "cancelled.title")}
        </h1>
        <p className="mt-4 text-base text-ink-soft">
          {t(isReturn ? "return.body" : "cancelled.body")}
        </p>
        <p className="mt-6 rounded-xl border border-warm-border bg-warm px-4 py-3 text-sm text-ink-muted">
          {t(isReturn ? "return.nextStep" : "cancelled.nextStep")}
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}

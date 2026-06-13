import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section, SectionHeading, Eyebrow } from "@/components/section";
import { WaitlistCta } from "@/components/waitlist-cta";
import { Reveal } from "@/components/reveal";
import {
  AppUiMosaic,
  OwnerDaySummary,
  SalonCard,
  SlotPicker,
} from "@/components/app-ui-mockups";

type Step = { n: string; title: string; body: string };

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const steps = t.raw("steps") as Step[];
  const clientPoints = t.raw("audiences.client.points") as string[];
  const ownerPoints = t.raw("audiences.owner.points") as string[];

  return (
    <main className="flex flex-1 flex-col">
      <SiteHeader />

      {/* Hero — Riga image banner with CTAs, staggered entrance */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/brand/riga-hero.png"
          alt="Riga"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171614]/72 via-[#171614]/55 to-[#171614]/82" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-5 py-24 sm:px-8 sm:py-32">
          <p className="eyebrow hero-rise text-white/70" style={{ animationDelay: "0ms" }}>
            {t("hero.eyebrow")}
          </p>
          <h1
            className="hero-rise max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            {t("hero.headline")}
          </h1>
          <p
            className="hero-rise max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {t("hero.subhead")}
          </p>
          <div
            className="hero-rise mt-2 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <WaitlistCta
              role="client"
              label={t("hero.primaryCta")}
              variant="brand"
              className="transition-transform hover:-translate-y-0.5"
            />
            <WaitlistCta
              role="salon_owner"
              label={t("hero.secondaryCta")}
              variant="outline"
              className="border-white/30 bg-white/10 text-white backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:bg-white/20"
            />
          </div>
          <p className="hero-rise text-sm text-white/70" style={{ animationDelay: "320ms" }}>
            {t("hero.note")}
          </p>
        </div>
      </section>

      {/* Showcase — the 3-card stack moved out of the hero into its own section */}
      <Section className="py-14 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>{t("showcase.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-4xl">
              {t("showcase.title")}
            </h2>
            <p className="max-w-md text-base leading-relaxed text-ink-muted">
              {t("showcase.body")}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <WaitlistCta
                role="client"
                label={t("hero.primaryCta")}
                variant="primary"
                size="md"
                className="transition-transform hover:-translate-y-0.5"
              />
              <WaitlistCta
                role="salon_owner"
                label={t("hero.secondaryCta")}
                variant="outline"
                size="md"
                className="transition-transform hover:-translate-y-0.5"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <AppUiMosaic className="my-6 sm:my-8" />
          </Reveal>
        </div>
      </Section>

      {/* Client feature band */}
      <Section className="border-t border-hairline bg-warm py-14 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2">
          <Reveal className="order-2 flex justify-center lg:order-1">
            <SalonCard className="w-full max-w-sm shadow-[0_24px_70px_-40px_rgba(26,22,18,0.45)]" />
          </Reveal>
          <Reveal delay={100} className="order-1 flex flex-col gap-4 lg:order-2">
            <Eyebrow>{t("audiences.client.eyebrow")}</Eyebrow>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              {t("audiences.client.title")}
            </h2>
            <p className="max-w-md text-[0.95rem] leading-relaxed text-ink-muted">
              {t("audiences.client.description")}
            </p>
            <ul className="flex flex-col gap-2.5">
              {clientPoints.map((p) => (
                <li key={p} className="text-[0.95rem] leading-snug text-foreground">
                  — {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Salon owner feature band */}
      <Section className="py-14 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-4">
            <Eyebrow>{t("audiences.owner.eyebrow")}</Eyebrow>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              {t("audiences.owner.title")}
            </h2>
            <p className="max-w-md text-[0.95rem] leading-relaxed text-ink-muted">
              {t("audiences.owner.description")}
            </p>
            <ul className="flex flex-col gap-2.5">
              {ownerPoints.map((p) => (
                <li key={p} className="text-[0.95rem] leading-snug text-foreground">
                  — {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="flex justify-center lg:justify-end">
            <OwnerDaySummary className="w-full max-w-sm shadow-[0_24px_70px_-40px_rgba(26,22,18,0.45)]" />
          </Reveal>
        </div>
      </Section>

      {/* Booking flow */}
      <Section className="border-t border-hairline bg-warm py-14 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow={t("flow.eyebrow")}
            title={t("flow.title")}
            description={t("flow.description")}
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_360px]">
          <ol className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={i * 90}
                className="flex items-start gap-4 rounded-2xl border border-warm-border bg-background p-5 transition-shadow hover:shadow-[0_18px_50px_-34px_rgba(26,22,18,0.5)]"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-soft font-display text-sm font-bold text-brand-strong">
                  {step.n}
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-display text-base font-bold tracking-tight text-foreground">
                    {step.title}
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-ink-muted">
                    {step.body}
                  </span>
                </span>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={120}>
            <SlotPicker />
          </Reveal>
        </div>
        <p className="mt-12 text-center text-sm text-ink-soft">
          {t("flow.trust", { location: t("site.location") })}
        </p>
      </Section>

      {/* CTA footer band */}
      <Section className="py-16 sm:py-24">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <SectionHeading className="items-center text-center" title={t("cta.title")} />
          <div className="flex flex-col gap-3 sm:flex-row">
            <WaitlistCta
              role="client"
              label={t("hero.primaryCta")}
              variant="primary"
              className="transition-transform hover:-translate-y-0.5"
            />
            <WaitlistCta
              role="salon_owner"
              label={t("audiences.owner.cta")}
              variant="outline"
              className="transition-transform hover:-translate-y-0.5"
            />
          </div>
        </Reveal>
      </Section>

      <SiteFooter />
    </main>
  );
}

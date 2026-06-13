import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section, SectionHeading, Eyebrow } from "@/components/section";
import { LandingButton } from "@/components/landing-button";
import {
  AppUiMosaic,
  OwnerDaySummary,
  SalonCard,
  SlotPicker,
} from "@/components/app-ui-mockups";
import { audiences, hero, site, steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "See how it works",
  description: site.description,
};

export default function VariantTwo() {
  return (
    <main className="flex flex-1 flex-col">
      <SiteHeader />

      {/* Light hero with app-like UI composition */}
      <Section className="py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-6">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              {hero.headline}
            </h1>
            <p className="max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
              {hero.subhead}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <LandingButton href={site.clientCtaHref} variant="primary">
                {hero.primaryCta}
              </LandingButton>
              <LandingButton href={site.ownerCtaHref} variant="outline">
                {hero.secondaryCta}
              </LandingButton>
            </div>
            <p className="text-sm text-ink-soft">{hero.note}</p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <AppUiMosaic className="mt-8 mb-12 lg:my-12" />
          </div>
        </div>
      </Section>

      {/* Feature bands: Client */}
      <Section className="border-t border-hairline bg-warm py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 flex justify-center lg:order-1">
            <SalonCard className="w-full max-w-sm" />
          </div>
          <div className="order-1 flex flex-col gap-4 lg:order-2">
            <Eyebrow>{audiences.client.eyebrow}</Eyebrow>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              {audiences.client.title}
            </h2>
            <p className="max-w-md text-[0.95rem] leading-relaxed text-ink-muted">
              {audiences.client.description}
            </p>
            <ul className="flex flex-col gap-2.5">
              {audiences.client.points.map((p) => (
                <li
                  key={p}
                  className="text-[0.95rem] leading-snug text-foreground"
                >
                  — {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Feature bands: Salon Owner */}
      <Section className="py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Eyebrow>{audiences.owner.eyebrow}</Eyebrow>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              {audiences.owner.title}
            </h2>
            <p className="max-w-md text-[0.95rem] leading-relaxed text-ink-muted">
              {audiences.owner.description}
            </p>
            <ul className="flex flex-col gap-2.5">
              {audiences.owner.points.map((p) => (
                <li
                  key={p}
                  className="text-[0.95rem] leading-snug text-foreground"
                >
                  — {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <OwnerDaySummary className="w-full max-w-sm" />
          </div>
        </div>
      </Section>

      {/* Compact booking flow visualization */}
      <Section className="border-t border-hairline bg-warm py-20 sm:py-24">
        <SectionHeading
          eyebrow="The booking flow"
          title="Real availability, picked in seconds"
          description="No calls, no DMs — clients see open slots for a specialist and confirm."
        />
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_360px]">
          <ol className="flex flex-col gap-4">
            {steps.map((step) => (
              <li
                key={step.n}
                className="flex items-start gap-4 rounded-2xl border border-warm-border bg-background p-5"
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
              </li>
            ))}
          </ol>
          <SlotPicker />
        </div>

        {/* Trust note */}
        <p className="mt-12 text-center text-sm text-ink-soft">
          Built for Riga beauty salons · {site.location}
        </p>
      </Section>

      {/* CTA footer band */}
      <Section className="py-20 sm:py-24">
        <div className="flex flex-col items-center gap-5 text-center">
          <SectionHeading
            className="items-center text-center"
            title="Ready when Pieraksts opens in Riga"
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <LandingButton href={site.clientCtaHref} variant="primary">
              {hero.primaryCta}
            </LandingButton>
            <LandingButton href={site.ownerCtaHref} variant="outline">
              {audiences.owner.cta}
            </LandingButton>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}

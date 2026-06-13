import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section, SectionHeading } from "@/components/section";
import { RoleSection } from "@/components/role-section";
import { LandingButton } from "@/components/landing-button";
import { audiences, hero, ownerValue, site, steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Riga beauty bookings",
  description: site.description,
};

export default function VariantOne() {
  return (
    <main className="flex flex-1 flex-col">
      <SiteHeader />

      {/* Hero — Riga image as a first-viewport local signal */}
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
          <p className="eyebrow text-white/70">{hero.eyebrow}</p>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {hero.headline}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {hero.subhead}
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <LandingButton href={site.clientCtaHref} variant="brand">
              {hero.primaryCta}
            </LandingButton>
            <LandingButton
              href={site.ownerCtaHref}
              variant="outline"
              className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              {hero.secondaryCta}
            </LandingButton>
          </div>
          <p className="text-sm text-white/70">{hero.note}</p>
        </div>
      </section>

      {/* Two audience rows */}
      <Section className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Built for two sides"
          title="One app for clients and salon owners"
          description="Pieraksts connects people looking for beauty and personal care in Riga with the salons that serve them."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <RoleSection
            eyebrow={audiences.client.eyebrow}
            title={audiences.client.title}
            description={audiences.client.description}
            points={audiences.client.points}
            cta={audiences.client.cta}
            ctaHref={site.clientCtaHref}
            ctaVariant="brand"
          />
          <RoleSection
            eyebrow={audiences.owner.eyebrow}
            title={audiences.owner.title}
            description={audiences.owner.description}
            points={audiences.owner.points}
            cta={audiences.owner.cta}
            ctaHref={site.ownerCtaHref}
            ctaVariant="primary"
          />
        </div>
      </Section>

      {/* How it works */}
      <Section className="border-y border-hairline bg-warm py-20 sm:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="Book in three calm steps"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className="flex flex-col gap-3 rounded-2xl border border-warm-border bg-background p-6"
            >
              <span className="font-display text-sm font-bold tracking-widest text-brand">
                {step.n}
              </span>
              <h3 className="font-display text-lg font-extrabold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="text-[0.95rem] leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Owner value strip */}
      <Section className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="For salon owners"
          title="Everything your salon runs on, in one place"
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-warm-border bg-warm-border sm:grid-cols-2 lg:grid-cols-4">
          {ownerValue.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 bg-background p-6"
            >
              <h3 className="font-display text-base font-bold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Soft launch / waitlist */}
      <Section className="pb-24">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-warm-border bg-[#171614] px-6 py-16 text-center">
          <p className="eyebrow text-white/60">Launching soon in Riga</p>
          <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Be first to book when Pieraksts opens
          </h2>
          <p className="max-w-xl text-base text-white/80">
            Join the waitlist as a client, or list your salon early. Free to join
            during launch.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LandingButton href={site.clientCtaHref} variant="brand">
              {hero.primaryCta}
            </LandingButton>
            <LandingButton
              href={site.ownerCtaHref}
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10"
            >
              {audiences.owner.cta}
            </LandingButton>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}

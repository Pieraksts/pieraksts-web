import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section, SectionHeading, Eyebrow } from "@/components/section";
import { LandingButton } from "@/components/landing-button";
import {
  audiences,
  categories,
  hero,
  model,
  site,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "For clients and salons",
  description: site.description,
};

export default function VariantThree() {
  return (
    <main className="flex flex-1 flex-col">
      <SiteHeader />

      {/* Concise promise + role anchors */}
      <Section className="py-16 sm:py-24">
        <div className="flex max-w-3xl flex-col gap-6">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
            {hero.subhead}
          </p>
          <div className="flex flex-wrap gap-3">
            <LandingButton href="#clients" variant="primary" size="md">
              I&apos;m a client
            </LandingButton>
            <LandingButton href="#salons" variant="outline" size="md">
              I run a salon
            </LandingButton>
          </div>
        </div>
      </Section>

      {/* Client section */}
      <Section
        id="clients"
        className="scroll-mt-20 border-t border-hairline py-16 sm:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <SectionHeading
            eyebrow={audiences.client.eyebrow}
            title={audiences.client.title}
            description={audiences.client.description}
          />
          <div className="flex flex-col gap-8">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {audiences.client.points.map((p) => (
                <li
                  key={p}
                  className="border-t border-hairline pt-3 text-[0.95rem] leading-snug text-foreground"
                >
                  {p}
                </li>
              ))}
            </ul>
            <div>
              <p className="eyebrow mb-3">Discover by service</p>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                {categories.map((cat) => (
                  <div
                    key={cat.label}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-warm-border">
                      <Image
                        src={cat.image}
                        alt={cat.label}
                        fill
                        sizes="(max-width: 640px) 30vw, 120px"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-medium text-ink-muted">
                      {cat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <LandingButton
                href={site.clientCtaHref}
                variant="brand"
                size="md"
              >
                {audiences.client.cta}
              </LandingButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Salon Owner section */}
      <Section
        id="salons"
        className="scroll-mt-20 border-t border-hairline bg-warm py-16 sm:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <SectionHeading
            eyebrow={audiences.owner.eyebrow}
            title={audiences.owner.title}
            description={audiences.owner.description}
          />
          <div className="flex flex-col gap-8">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {audiences.owner.points.map((p) => (
                <li
                  key={p}
                  className="border-t border-warm-border pt-3 text-[0.95rem] leading-snug text-foreground"
                >
                  {p}
                </li>
              ))}
            </ul>
            <div>
              <LandingButton
                href={site.ownerCtaHref}
                variant="primary"
                size="md"
              >
                {audiences.owner.cta}
              </LandingButton>
            </div>
          </div>
        </div>
      </Section>

      {/* MVP model section */}
      <Section className="border-t border-hairline py-16 sm:py-20">
        <SectionHeading eyebrow={model.eyebrow} title={model.title} />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {model.points.map((point) => (
            <div
              key={point.title}
              className="flex flex-col gap-2 rounded-2xl border border-warm-border bg-warm p-6"
            >
              <h3 className="font-display text-base font-bold tracking-tight text-foreground">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA footer */}
      <Section className="pb-24">
        <div className="flex flex-col items-start gap-5 rounded-3xl border border-warm-border bg-warm px-6 py-12 sm:px-10">
          <h2 className="max-w-2xl font-display text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
            Join Pieraksts as it launches in Riga
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LandingButton href={site.clientCtaHref} variant="brand">
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

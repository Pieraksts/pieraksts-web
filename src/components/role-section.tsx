import { Check } from "lucide-react";
import { LandingButton } from "@/components/landing-button";
import { Eyebrow } from "@/components/section";
import { cn } from "@/lib/utils";

type RoleSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: readonly string[];
  cta: string;
  ctaHref: string;
  ctaVariant?: "primary" | "brand" | "outline";
  className?: string;
};

export function RoleSection({
  eyebrow,
  title,
  description,
  points,
  cta,
  ctaHref,
  ctaVariant = "primary",
  className,
}: RoleSectionProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-5 rounded-2xl border border-warm-border bg-warm p-6 sm:p-8",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="font-display text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h3>
        <p className="text-[0.95rem] leading-relaxed text-ink-muted">
          {description}
        </p>
      </div>
      <ul className="flex flex-1 flex-col gap-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-strong">
              <Check className="size-3" />
            </span>
            <span className="text-[0.95rem] leading-snug text-foreground">
              {point}
            </span>
          </li>
        ))}
      </ul>
      <div>
        <LandingButton href={ctaHref} variant={ctaVariant} size="md">
          {cta}
        </LandingButton>
      </div>
    </div>
  );
}

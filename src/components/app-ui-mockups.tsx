import Image from "next/image";
import { useTranslations } from "next-intl";
import { Check, Clock, Heart, MapPin, Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * App-inspired UI fragments recreated in HTML/CSS — no real screenshots, so they
 * never go stale while the mobile app evolves. Used on the landing showcase.
 * Copy is localised under the `mock` namespace.
 */

type Day = { d: string; n: string };
type Booking = { time: string; who: string; svc: string; specialist: string };

/** A salon discovery card, like the marketplace list. */
export function SalonCard({ className }: { className?: string }) {
  const t = useTranslations("mock");
  const services = t.raw("services") as string[];

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-warm-border bg-warm",
        className
      )}
    >
      <div className="relative h-32 w-full">
        <Image
          src="/brand/category-tiles/hair.jpg"
          alt={t("salonName")}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover"
        />
        <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-background/90 text-brand backdrop-blur-sm">
          <Heart className="size-4" />
        </span>
      </div>
      <div className="flex flex-col gap-1.5 p-4">
        <div className="flex items-center justify-between">
          <span className="font-display text-[0.95rem] font-bold tracking-tight text-foreground">
            {t("salonName")}
          </span>
          <span className="inline-flex items-center gap-1 text-sm text-ink-muted">
            <Star className="size-3.5 fill-current text-ink-soft" />
            {t("rating")}
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm text-ink-muted">
          <MapPin className="size-3.5" />
          {t("salonMeta")}
        </span>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {services.map((s) => (
            <span
              key={s}
              className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand-strong"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/** A booking slot picker, like the time-selection step. */
export function SlotPicker({ className }: { className?: string }) {
  const t = useTranslations("mock");
  const days = t.raw("days") as Day[];
  const slots = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"];
  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-warm-border bg-background p-4",
        className
      )}
    >
      <p className="eyebrow mb-3">{t("chooseTime")}</p>
      <div className="grid grid-cols-4 gap-2">
        {days.map((day, i) => (
          <div
            key={day.d}
            className={cn(
              "flex flex-col items-center rounded-xl border py-2",
              i === 2
                ? "border-brand bg-brand-soft text-brand-strong"
                : "border-warm-border text-ink-muted"
            )}
          >
            <span className="text-[0.7rem] uppercase tracking-wide">{day.d}</span>
            <span className="font-display text-sm font-bold">{day.n}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {slots.map((slot, i) => (
          <div
            key={slot}
            className={cn(
              "flex items-center justify-center rounded-lg border py-2 text-sm",
              i === 1
                ? "border-foreground bg-foreground text-background"
                : "border-warm-border text-foreground"
            )}
          >
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
}

/** A salon owner's day summary, like the owner schedule. */
export function OwnerDaySummary({ className }: { className?: string }) {
  const t = useTranslations("mock");
  const bookings = t.raw("bookings") as Booking[];
  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-warm-border bg-background p-4",
        className
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="eyebrow">{t("today")}</p>
          <span className="font-display text-sm font-bold tracking-tight text-foreground">
            {t("summaryLine")}
          </span>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand-strong">
          <Clock className="size-3" />
          {t("onTime")}
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {bookings.map((b) => (
          <li
            key={b.time}
            className="flex items-center gap-3 rounded-xl border border-warm-border bg-warm px-3 py-2.5"
          >
            <span className="font-display text-sm font-bold tabular-nums text-foreground">
              {b.time}
            </span>
            <span className="h-8 w-px bg-warm-border" />
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-sm font-medium text-foreground">
                {b.who} · {b.svc}
              </span>
              <span className="text-xs text-ink-soft">
                {t("with", { name: b.specialist })}
              </span>
            </span>
            <Check className="size-4 text-ink-soft" />
          </li>
        ))}
      </ul>
    </div>
  );
}

const STACK_SHADOW = "shadow-[0_24px_70px_-32px_rgba(26,22,18,0.5)]";

/**
 * A cascading deck of the three app fragments — all cards fully visible, each
 * card's identity peeking from under the one in front. The deck gently spreads
 * on hover. Used as the product showcase.
 */
export function AppUiMosaic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group relative mx-auto h-[470px] w-full max-w-[340px] sm:h-[540px] sm:max-w-[380px]",
        className
      )}
    >
      {/* Back — salon owner's day */}
      <div className="absolute left-0 top-0 z-10 w-[230px] -rotate-[3deg] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:-translate-x-3 group-hover:-translate-y-2 group-hover:-rotate-[5deg] sm:w-[270px]">
        <OwnerDaySummary className={STACK_SHADOW} />
      </div>

      {/* Middle — salon discovery card */}
      <div className="absolute left-7 top-24 z-20 w-[230px] rotate-[1.5deg] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform sm:left-12 sm:top-28 sm:w-[270px]">
        <SalonCard className={STACK_SHADOW} />
      </div>

      {/* Front — booking slot picker */}
      <div className="absolute left-14 top-56 z-30 w-[230px] rotate-[4deg] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:translate-x-3 group-hover:translate-y-2 group-hover:rotate-[6deg] sm:left-24 sm:top-64 sm:w-[270px]">
        <SlotPicker className={STACK_SHADOW} />
      </div>
    </div>
  );
}

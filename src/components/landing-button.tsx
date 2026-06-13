import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/40 active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Deep graphite pill — the app's primary action
        primary:
          "bg-primary text-primary-foreground hover:bg-[#1b1a18]",
        // Carmine brand pill
        brand:
          "bg-brand text-white hover:bg-brand-strong",
        // Hairline outline on white/warm surfaces
        outline:
          "border border-border bg-background text-foreground hover:bg-warm-strong",
        ghost: "text-foreground hover:bg-warm-strong",
      },
      size: {
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-[0.95rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

type LandingButtonProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof ctaVariants>;

export function LandingButton({
  className,
  variant,
  size,
  ...props
}: LandingButtonProps) {
  return (
    <Link className={cn(ctaVariants({ variant, size, className }))} {...props} />
  );
}

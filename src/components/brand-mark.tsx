import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content";

export function BrandMark({
  className,
  withWordmark = true,
  size = 28,
}: {
  className?: string;
  withWordmark?: boolean;
  size?: number;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/brand/logo.png"
        alt={site.name}
        width={size}
        height={size}
        priority
        className="object-contain"
      />
      {withWordmark ? (
        <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
          {site.name}
        </span>
      ) : null}
    </span>
  );
}

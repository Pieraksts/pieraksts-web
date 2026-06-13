import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function BrandMark({
  className,
  withWordmark = true,
  wordmarkClassName,
  size = 28,
}: {
  className?: string;
  withWordmark?: boolean;
  /** Extra classes on the wordmark (e.g. to hide it on small screens) */
  wordmarkClassName?: string;
  size?: number;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/brand/logo.png"
        alt={siteConfig.name}
        width={size}
        height={size}
        priority
        className="object-contain"
      />
      {withWordmark ? (
        <span
          className={cn(
            "font-display text-lg font-extrabold tracking-tight text-foreground",
            wordmarkClassName
          )}
        >
          {siteConfig.name}
        </span>
      ) : null}
    </span>
  );
}

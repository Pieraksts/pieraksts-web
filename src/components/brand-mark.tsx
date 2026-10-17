import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function BrandMark({
  wordmarkClassName,
}: {
  /** Extra classes on the wordmark (e.g. to hide it on small screens) */
  wordmarkClassName?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <Image
        src="/brand/logo.png"
        alt={siteConfig.name}
        width={28}
        height={28}
        priority
        className="object-contain"
      />
      <span
        className={cn(
          "font-display text-lg font-extrabold tracking-tight text-foreground",
          wordmarkClassName
        )}
      >
        {siteConfig.name}
      </span>
    </span>
  );
}

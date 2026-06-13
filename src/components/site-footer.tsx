import { BrandMark } from "@/components/brand-mark";
import { footer, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t border-hairline bg-warm", className)}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-col gap-2">
          <BrandMark />
          <p className="max-w-sm text-sm text-ink-muted">{footer.blurb}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-ink-soft sm:items-end">
          <span>{footer.note}</span>
          <span>
            © {new Date().getFullYear()} {site.name} · {site.location}
          </span>
        </div>
      </div>
    </footer>
  );
}

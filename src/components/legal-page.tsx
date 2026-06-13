import { getTranslations } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalDocument } from "@/components/legal-document";
import { Link } from "@/i18n/navigation";
import { LEGAL_EFFECTIVE_DATE } from "@/lib/legal-content";

/** Shared chrome for the Terms and Privacy pages. */
export async function LegalPage({
  title,
  markdown,
}: {
  title: string;
  markdown: string;
}) {
  const t = await getTranslations("legal");

  return (
    <main className="flex flex-1 flex-col">
      <SiteHeader />
      <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {t("backHome")}
        </Link>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          {t("effectiveDate", { date: LEGAL_EFFECTIVE_DATE })}
        </p>
        <div className="mt-8">
          <LegalDocument markdown={markdown} />
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}

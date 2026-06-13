import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";
import { termsDoc } from "@/lib/legal-content";
import { routing } from "@/i18n/routing";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  const path =
    locale === routing.defaultLocale
      ? "/legal/terms-of-service"
      : `/${locale}/legal/terms-of-service`;
  return {
    title: t("termsTitle"),
    alternates: { canonical: path },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");
  const markdown = locale === "lv" ? termsDoc.lv : termsDoc.en;

  return <LegalPage title={t("termsTitle")} markdown={markdown} />;
}

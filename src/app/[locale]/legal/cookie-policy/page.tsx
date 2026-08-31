import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";
import { cookiesDoc } from "@/lib/legal-content";
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
      ? "/legal/cookie-policy"
      : `/${locale}/legal/cookie-policy`;
  return {
    title: t("cookiesTitle"),
    alternates: { canonical: path },
  };
}

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");
  const markdown = locale === "lv" ? cookiesDoc.lv : cookiesDoc.en;

  return <LegalPage title={t("cookiesTitle")} markdown={markdown} />;
}

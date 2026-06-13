import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";
import { privacyDoc } from "@/lib/legal-content";
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
      ? "/legal/privacy-policy"
      : `/${locale}/legal/privacy-policy`;
  return {
    title: t("privacyTitle"),
    alternates: { canonical: path },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");
  const markdown = locale === "lv" ? privacyDoc.lv : privacyDoc.en;

  return <LegalPage title={t("privacyTitle")} markdown={markdown} />;
}

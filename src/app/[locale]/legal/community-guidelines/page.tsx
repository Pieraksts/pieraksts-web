import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";
import { guidelinesDoc } from "@/lib/legal-content";
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
      ? "/legal/community-guidelines"
      : `/${locale}/legal/community-guidelines`;
  return {
    title: t("guidelinesTitle"),
    alternates: { canonical: path },
  };
}

export default async function CommunityGuidelinesPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");
  const markdown = locale === "lv" ? guidelinesDoc.lv : guidelinesDoc.en;

  return <LegalPage title={t("guidelinesTitle")} markdown={markdown} />;
}

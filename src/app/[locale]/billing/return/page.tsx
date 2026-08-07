import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BillingOutcomePage } from "@/components/billing-outcome";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "billing" });
  return {
    title: t("return.title"),
    // A transactional landing page reached only by redirect. It carries no
    // marketing value and should not appear in search results.
    robots: { index: false, follow: false },
  };
}

export default async function BillingReturnPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <BillingOutcomePage outcome="return" />;
}

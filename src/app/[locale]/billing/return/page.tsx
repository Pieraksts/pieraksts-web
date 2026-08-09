import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BillingOutcomePage } from "@/components/billing-outcome";
import { APP_RETURN_QUERY_PARAM, resolveAppReturnUrl } from "@/lib/app-return";

type Params = { locale: string };
type Search = { [key: string]: string | string[] | undefined };

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
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<Search>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // PAY-008. Supplied by the backend through the provider, and allow-listed
  // before it is rendered.
  const appReturnUrl = resolveAppReturnUrl(
    (await searchParams)[APP_RETURN_QUERY_PARAM]
  );

  return <BillingOutcomePage outcome="return" appReturnUrl={appReturnUrl} />;
}

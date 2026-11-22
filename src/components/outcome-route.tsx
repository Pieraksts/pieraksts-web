import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { OutcomePage, type OutcomeSpec } from "@/components/outcome-page";
import { APP_RETURN_QUERY_PARAM, resolveAppReturnUrl } from "@/lib/app-return";

type Params = { locale: string };
type Search = { [key: string]: string | string[] | undefined };

/** The metadata and page for one landing route, so each `page.tsx` only names its spec. */
export function outcomeRoute(spec: OutcomeSpec) {
  async function generateMetadata({
    params,
  }: {
    params: Promise<Params>;
  }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: spec.namespace });
    return {
      title: t(`${spec.outcome}.title`),
      // A transactional landing page reached only by redirect. It carries no
      // marketing value and should not appear in search results.
      robots: { index: false, follow: false },
    };
  }

  async function Page({
    params,
    searchParams,
  }: {
    params: Promise<Params>;
    searchParams: Promise<Search>;
  }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const appReturnUrl = resolveAppReturnUrl(
      (await searchParams)[APP_RETURN_QUERY_PARAM]
    );

    return <OutcomePage {...spec} appReturnUrl={appReturnUrl} />;
  }

  return { generateMetadata, Page };
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { LEGAL_ROUTES } from "@/lib/legal-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = siteConfig.url;

  // lv lives at the root, en at /en; each entry is cross-linked via hreflang.
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  ): MetadataRoute.Sitemap[number] => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        lv: `${base}${path}`,
        en: `${base}/en${path}`,
      },
    },
  });

  return [
    page("", 1, "weekly"),
    ...LEGAL_ROUTES.map((path) => page(path, 0.3, "yearly")),
  ];
}

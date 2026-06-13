import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

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
    page("/legal/terms-of-service", 0.3, "yearly"),
    page("/legal/privacy-policy", 0.3, "yearly"),
  ];
}

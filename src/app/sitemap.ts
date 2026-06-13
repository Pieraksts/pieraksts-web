import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Single landing page; lv at the root, en at /en, cross-linked via hreflang.
  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          lv: siteConfig.url,
          en: `${siteConfig.url}/en`,
        },
      },
    },
  ];
}

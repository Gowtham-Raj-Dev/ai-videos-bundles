import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "daily", priority: 1, lastModified: now },
    { url: `${base}/privacy-policy`, changeFrequency: "monthly", priority: 0.4, lastModified: now },
    { url: `${base}/terms-conditions`, changeFrequency: "monthly", priority: 0.4, lastModified: now },
    { url: `${base}/refund-policy`, changeFrequency: "monthly", priority: 0.4, lastModified: now },
  ];

  return staticPages;
}

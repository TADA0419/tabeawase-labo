import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllSlugs } from "@/lib/tabeawase-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
    {
      url: `${siteConfig.url}/tabeawase`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { url: `${siteConfig.url}/about`, changeFrequency: "yearly", priority: 0.5 },
    {
      url: `${siteConfig.url}/privacy`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteConfig.url}/contact`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const pairRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${siteConfig.url}/tabeawase/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...pairRoutes];
}

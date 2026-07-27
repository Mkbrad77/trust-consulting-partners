import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { serviceSlugs } from "@/config/services";
import { articles } from "@/config/articles";
import { routing } from "@/i18n/routing";

function buildAlternates(path: string) {
  const cleanPath = path === "/" ? "" : path;
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    languages[locale] = `${siteConfig.domain}${prefix}${cleanPath}`;
  }
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;
  const now = new Date();

  const staticPaths = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/notre-cabinet", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/actualites", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/politique-confidentialite", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPaths.flatMap(({ path, priority, changeFrequency }) =>
    routing.locales.map((locale) => {
      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      const cleanPath = path === "/" ? "" : path;
      return {
        url: `${base}${prefix}${cleanPath}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages: buildAlternates(path) },
      };
    })
  );

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.flatMap((slug) =>
    routing.locales.map((locale) => {
      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      const path = `/services/${slug}`;
      return {
        url: `${base}${prefix}${path}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: { languages: buildAlternates(path) },
      };
    })
  );

  const articleRoutes: MetadataRoute.Sitemap = articles.flatMap((a) =>
    routing.locales.map((locale) => {
      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      const path = `/actualites/${a.slug}`;
      return {
        url: `${base}${prefix}${path}`,
        lastModified: new Date(a.date),
        changeFrequency: "yearly" as const,
        priority: 0.5,
        alternates: { languages: buildAlternates(path) },
      };
    })
  );

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
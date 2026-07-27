import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";

/**
 * Génère les balises hreflang pour une page donnée, à utiliser dans
 * generateMetadata() de chaque page. `path` est le chemin SANS préfixe
 * de langue, ex: "/services/daf-externalisee" ou "/" pour l'accueil.
 */
export function getAlternates(path: string) {
  const cleanPath = path === "/" ? "" : path;

  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    languages[locale] = `${siteConfig.domain}${prefix}${cleanPath}`;
  }
  // x-default pointe vers la version par défaut (français)
  languages["x-default"] = `${siteConfig.domain}${cleanPath}`;

  return {
    canonical: languages[routing.defaultLocale] === languages[routing.defaultLocale]
      ? undefined
      : undefined,
    languages,
  };
}
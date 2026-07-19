export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // format "2026-07-19"
  content: string; // markdown ou texte simple
};

// Ajoute un objet ici pour chaque nouvel article publié.
// La page /actualites et /actualites/[slug] se génèrent automatiquement.
export const articles: Article[] = [];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
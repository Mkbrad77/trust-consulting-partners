export type LocalizedText = {
  fr: string;
  en: string;
};

export type Article = {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  date: string; // format "2026-07-19"
  content: LocalizedText; // markdown ou texte simple
};

// Ajoute un objet ici pour chaque nouvel article publié, avec le texte
// fourni dans les deux langues (fr et en).
// La page /actualites et /actualites/[slug] se génèrent automatiquement.
export const articles: Article[] = [];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
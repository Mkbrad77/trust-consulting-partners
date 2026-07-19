import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";
import { articles, getArticleBySlug } from "@/config/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  return { title: article ? `${article.title} | Trust Consulting Partners` : "Article" };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return notFound();

  return (
    <Section className="bg-background pt-12">
      <Container className="max-w-2xl">
        <p className="text-sm text-muted">
          {new Date(article.date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-primary md:text-4xl">
          {article.title}
        </h1>
        <div className="prose prose-sm mt-8 max-w-none text-foreground">
          {article.content}
        </div>
      </Container>
    </Section>
  );
}
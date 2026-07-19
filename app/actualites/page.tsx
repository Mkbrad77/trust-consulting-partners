import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";
import { articles } from "@/config/articles";
import { Cta } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Actualités | Trust Consulting Partners",
  description:
    "Nos publications et analyses sur la finance d'entreprise en zone CEMAC/UEMOA.",
};

export default function ActualitesPage() {
  return (
    <>
      <Section className="bg-background pt-12">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Ressources
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-primary md:text-5xl">
            Actualités
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Nos analyses et publications sur la finance d&apos;entreprise en
            zone CEMAC/UEMOA.
          </p>
        </Container>

        <Container className="mt-14 max-w-3xl">
          {articles.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border px-8 py-16 text-center">
              <p className="text-base font-medium text-foreground">
                Aucun article publié pour le moment.
              </p>
              <p className="mt-2 text-sm text-muted">
                Revenez bientôt pour découvrir nos premières analyses.
              </p>
            </div>
          ) : (
            <div className="grid gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/actualites/${article.slug}`}
                  className="rounded-2xl border border-border p-8 hover:border-primary/40"
                >
                  <p className="text-xs font-medium text-muted">
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-foreground">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>
      <Cta />
    </>
  );
}
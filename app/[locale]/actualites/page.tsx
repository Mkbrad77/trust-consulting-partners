import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";
import { articles } from "@/config/articles";
import { Cta } from "@/components/home/cta";
import type { Locale } from "@/i18n/routing";
import { getAlternates } from "@/lib/seo";
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("actualitesPage.meta");
  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates("/actualites"),
  };
}

export default async function ActualitesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("actualitesPage");
  const dateLocale = locale === "fr" ? "fr-FR" : "en-US";

  return (
    <>
      <Section className="bg-background pt-12">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {t("eyebrow")}
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-primary md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {t("description")}
          </p>
        </Container>

        <Container className="mt-14 max-w-3xl">
          {articles.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border px-8 py-16 text-center">
              <p className="text-base font-medium text-foreground">
                {t("emptyTitle")}
              </p>
              <p className="mt-2 text-sm text-muted">{t("emptyDescription")}</p>
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
                    {new Date(article.date).toLocaleDateString(dateLocale, {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-foreground">
                    {article.title[locale]}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{article.excerpt[locale]}</p>
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
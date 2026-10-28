import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";
import { ToolFrame } from "@/components/tools/tool-frame";
import { Cta } from "@/components/home/cta";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("diagnosticPage.meta");
  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates("/diagnostic"),
  };
}

export default async function DiagnosticPage() {
  const t = await getTranslations("diagnosticPage");

  return (
    <>
      <Section className="bg-background pt-12 pb-10 md:pb-12">
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
          {t.has("languageNote") && (
            <p className="mt-3 text-sm text-muted">{t("languageNote")}</p>
          )}
        </Container>
      </Section>

      <Container className="max-w-4xl pb-20">
        <ToolFrame src="/outils/dossierpret.html" title={t("frameTitle")} />
      </Container>

      <Cta />
    </>
  );
}

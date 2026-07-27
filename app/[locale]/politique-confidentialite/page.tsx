import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { legalInfo } from "@/config/legal";
import type { Locale } from "@/i18n/routing";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("legal.privacy.meta");
  return {
    title: t("title"),
    robots: { index: false, follow: true },
    alternates: getAlternates("/politique-confidentialite"),
  };
}

export default async function PolitiqueConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("legal.privacy");
  const dateLocale = locale === "fr" ? "fr-FR" : "en-US";

  return (
    <Section className="bg-background pt-12">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold text-primary md:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-sm text-muted">
          {t("lastUpdated", {
            date: new Date().toLocaleDateString(dateLocale, {
              year: "numeric",
              month: "long",
            }),
          })}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground">
          <div>
            <h2 className="text-lg font-semibold text-primary">{t("dataTitle")}</h2>
            <p className="mt-3">{t("dataText")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">{t("purposeTitle")}</h2>
            <p className="mt-3">{t("purposeText")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">{t("retentionTitle")}</h2>
            <p className="mt-3">{t("retentionText")}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">{t("rightsTitle")}</h2>
            <p className="mt-3">
              {t("rightsTextBefore")}{" "}
              <Link
                href={`mailto:${siteConfig.contact.emailGeneral}`}
                className="text-primary underline hover:text-primary-dark"
              >
                {siteConfig.contact.emailGeneral}
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">{t("cookiesTitle")}</h2>
            <p className="mt-3">
              {t("cookiesText", { host: legalInfo.host.name })}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">{t("contactTitle")}</h2>
            <p className="mt-3">
              {t("contactText", {
                company: legalInfo.companyName,
                email: siteConfig.contact.emailGeneral,
              })}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
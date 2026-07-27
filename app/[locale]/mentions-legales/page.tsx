import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";
import { legalInfo } from "@/config/legal";
import { siteConfig } from "@/config/site";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("legal.mentions.meta");
  return {
    title: t("title"),
    robots: { index: false, follow: true },
    alternates: getAlternates("/mentions-legales"),
  };
}

export default async function MentionsLegalesPage() {
  const t = await getTranslations("legal.mentions");

  return (
    <Section className="bg-background pt-12">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold text-primary md:text-4xl">
          {t("title")}
        </h1>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground">
          <div>
            <h2 className="text-lg font-semibold text-primary">{t("editorTitle")}</h2>
            <p className="mt-3">
              {t("editorIntro", {
                company: legalInfo.companyName,
                legalForm: legalInfo.legalForm,
              })}
              <br />
              {t("headOfficeLabel")} {t("headOfficeValue")}
              <br />
              {t("rcLabel")} {legalInfo.rc}
              <br />
              {t("taxpayerLabel")} {legalInfo.taxpayerNumber}
              <br />
              {t("phoneLabel")} {siteConfig.contact.phones.map((p) => p.number).join(" / ")}
              <br />
              {t("emailLabel")} {siteConfig.contact.emailGeneral}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">
              {t("publicationDirectorTitle")}
            </h2>
            <p className="mt-3">{legalInfo.publicationDirector}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">{t("hostingTitle")}</h2>
            <p className="mt-3">
              {legalInfo.host.name}
              <br />
              {legalInfo.host.address}
              <br />
              {legalInfo.host.website}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">{t("domainTitle")}</h2>
            <p className="mt-3">
              {t("domainText", {
                domain: siteConfig.domain,
                registrar: legalInfo.registrar.name,
                registrarUrl: legalInfo.registrar.website,
              })}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">{t("ipTitle")}</h2>
            <p className="mt-3">
              {t("ipText", { company: legalInfo.companyName })}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">{t("liabilityTitle")}</h2>
            <p className="mt-3">
              {t("liabilityText", { company: legalInfo.companyName })}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { legalInfo } from "@/config/legal";
import Link from "next/link"; // Importation de Link pour de meilleures performances de navigation

export const metadata: Metadata = {
  title: "Politique de confidentialité | Trust Consulting Partners",
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <Section className="bg-background pt-12">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold text-primary md:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="mt-4 text-sm text-muted">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground">
          <div>
            <h2 className="text-lg font-semibold text-primary">
              Données collectées
            </h2>
            <p className="mt-3">
              Lorsque vous utilisez le formulaire de contact de ce site, nous
              collectons les informations que vous nous transmettez
              volontairement : nom, adresse email, numéro de téléphone
              (facultatif), entreprise (facultatif), pôle de service concerné
              et contenu de votre message.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">
              Finalité du traitement
            </h2>
            <p className="mt-3">
              Ces données sont utilisées exclusivement pour répondre à votre
              demande de contact ou de diagnostic flash gratuit. Elles ne
              sont ni vendues, ni cédées, ni louées à des tiers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">
              Conservation des données
            </h2>
            <p className="mt-3">
              Les données transmises via le formulaire de contact sont
              conservées le temps nécessaire au traitement de votre demande,
              puis archivées ou supprimées conformément à nos obligations
              professionnelles de confidentialité.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">
              Vos droits
            </h2>
            <p className="mt-3">
              Vous pouvez à tout moment demander l'accès, la
              rectification ou la suppression de vos données personnelles en
              nous contactant à l'adresse{" "}
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
            <h2 className="text-lg font-semibold text-primary">Cookies</h2>
            <p className="mt-3">
              Ce site n'utilise pas de cookies de suivi publicitaire. Des
              cookies techniques strictement nécessaires au fonctionnement du
              site peuvent être utilisés par notre hébergeur ({legalInfo.host.name}).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">Contact</h2>
            <p className="mt-3">
              Pour toute question relative à cette politique de
              confidentialité, contactez {legalInfo.companyName} à{" "}
              {siteConfig.contact.emailGeneral}.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
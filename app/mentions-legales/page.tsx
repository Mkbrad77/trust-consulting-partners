import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";
import { legalInfo } from "@/config/legal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales | Trust Consulting Partners",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <Section className="bg-background pt-12">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold text-primary md:text-4xl">
          Mentions légales
        </h1>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground">
          <div>
            <h2 className="text-lg font-semibold text-primary">Éditeur du site</h2>
            <p className="mt-3">
              {legalInfo.companyName}, {legalInfo.legalForm}.
              <br />
              Siège social : {legalInfo.headOffice}
              <br />
              Registre du commerce (RC) : {legalInfo.rc}
              <br />
              Numéro contribuable : {legalInfo.taxpayerNumber}
              <br />
              Téléphone : {siteConfig.contact.phones.map((p) => p.number).join(" / ")}
              <br />
              Email : {siteConfig.contact.emailGeneral}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">
              Directeur de la publication
            </h2>
            <p className="mt-3">{legalInfo.publicationDirector}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">Hébergement</h2>
            <p className="mt-3">
              {legalInfo.host.name}
              <br />
              {legalInfo.host.address}
              <br />
              {legalInfo.host.website}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">Nom de domaine</h2>
            <p className="mt-3">
              Le nom de domaine {siteConfig.domain} est enregistré auprès de{" "}
              {legalInfo.registrar.name} ({legalInfo.registrar.website}).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">
              Propriété intellectuelle
            </h2>
            <p className="mt-3">
              L&apos;ensemble des contenus présents sur ce site (textes, logo,
              identité visuelle, structure) est la propriété de{" "}
              {legalInfo.companyName}, sauf mention contraire. Toute
              reproduction, représentation ou diffusion, en tout ou partie,
              sans autorisation préalable écrite, est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">
              Limitation de responsabilité
            </h2>
            <p className="mt-3">
              {legalInfo.companyName} s&apos;efforce d&apos;assurer
              l&apos;exactitude et la mise à jour des informations diffusées
              sur ce site, sans garantie d&apos;exhaustivité. Les informations
              présentées ont une valeur informative et ne sauraient engager la
              responsabilité contractuelle du cabinet en dehors d&apos;une
              lettre de mission signée.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
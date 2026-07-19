import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";

export function CabinetIntro() {
  return (
    <Section className="bg-background pt-12">
      <Container className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Notre cabinet
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-primary md:text-5xl">
          Un cabinet de conseil financier au service des entreprises de la
          zone CEMAC / UEMOA
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Trust Consulting Partners accompagne les PME et groupes camerounais
          avec des solutions sur mesure, adaptées aux réalités du contexte
          local : normes SYSCOHADA révisées, droit OHADA, réglementation
          COBAC, CIMA et BCEAO. Fondé par des professionnels justifiant de
          plus de 18 ans d&apos;expérience en finance d&apos;entreprise en
          Afrique centrale et occidentale, notre cabinet met son expertise au
          service de la performance et de la sécurisation financière de ses
          clients.
        </p>
      </Container>
    </Section>
  );
}
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/layout/container";

const sectors = [
  "Industrie",
  "Commerce",
  "Commerce général & la grande distribution",
  "BTP",
  "Logistique",
  "Assurance",
  "Prestations de services",
  "Agro-industrie",
  "Gestion du patrimoine et transactions immobilières",
];

export function Sectors() {
  return (
    <Section className="bg-background">
      <Container className="text-center">
        <SectionHeading
          eyebrow="Secteurs"
          title="Différents secteurs d'activités de nos clients"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {sectors.map((sector) => (
            <span
              key={sector}
              className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground"
            >
              {sector}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
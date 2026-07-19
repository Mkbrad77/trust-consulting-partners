import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/layout/container";

const sectors = [
  "Industrie",
  "Commerce",
  "BTP",
  "Logistique",
  "Assurance",
  "Services",
  "Agro-industrie",
  "Immobilier",
];

export function Sectors() {
  return (
    <Section className="bg-background">
      <Container className="text-center">
        <SectionHeading
          eyebrow="Nos secteurs"
          title="Des missions menées dans des secteurs variés"
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
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/layout/container";

const steps = [
  {
    number: "01",
    title: "Diagnostic flash gratuit",
    description: "Entretien avec le dirigeant (2h), évaluation financière, fiscale et organisationnelle.",
  },
  {
    number: "02",
    title: "Lettre de mission",
    description: "Périmètre, livrables, calendrier et honoraires définis par écrit, signés par les deux parties.",
  },
  {
    number: "03",
    title: "Mise en place",
    description: "Accès aux données, état des lieux, réunion de cadrage, mise en place des outils de reporting.",
  },
  {
    number: "04",
    title: "Exécution & pilotage",
    description: "Production des livrables, points réguliers, alertes proactives, ajustements continus.",
  },
  {
    number: "05",
    title: "Bilan & recommandations",
    description: "Revue annuelle, rapport de synthèse, renouvellement ou évolution du mandat.",
  },
];

export function Methodology() {
  return (
    <Section className="bg-[#F7F9FC]">
      <Container>
        <SectionHeading
          eyebrow="Notre méthodologie"
          title="Une démarche d'intervention en 5 étapes"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-5">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-3xl font-semibold text-accent">{step.number}</span>
              <h3 className="mt-3 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
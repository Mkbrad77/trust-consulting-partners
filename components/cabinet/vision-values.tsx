import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/layout/container";

const values = [
  "Intégrité",
  "Innovation",
  "Excellence",
  "Esprit d'équipe",
  "Responsabilité sociale",
  "Orientation client",
  "Confidentialité",
  "Engagement",
];

export function VisionValues() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Notre vision"
              title="Créer des solutions audacieuses, ensemble"
              center={false}
            />
            <p className="mt-6 text-base leading-relaxed text-muted">
              Agir avec transparence et honnêteté pour créer des solutions
              audacieuses, en plaçant le client au centre de nos décisions et
              en construisant la réussite ensemble.
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Nos valeurs"
              title="Ce qui guide chacune de nos missions"
              center={false}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="rounded-full bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
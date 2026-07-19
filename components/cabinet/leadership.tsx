import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/layout/container";

const founders = [
  { name: "TAKOU Maurice Rodrigue", role: "Co-fondateur" },
  { name: "MOYO KAMDEM Léopold", role: "Co-fondateur" },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => part === part.toUpperCase())
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function Leadership() {
  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading
          eyebrow="Notre équipe dirigeante"
          title="Deux co-fondateurs, une même exigence"
          description="Des professionnels justifiant de plus de 18 ans d'expérience en finance d'entreprise en Afrique centrale et occidentale."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 sm:max-w-xl sm:mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-2xl border border-border p-8 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                {initials(founder.name)}
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{founder.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
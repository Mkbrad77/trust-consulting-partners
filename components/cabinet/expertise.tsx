import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/layout/container";
import { Check } from "lucide-react";

const points = [
  "Plus de 18 ans d'expérience en finance de groupe, consolidation multi-entités et reporting",
  "Maîtrise des normes SYSCOHADA révisées, OHADA, COBAC, CIMA et BCEAO",
  "Expérience opérationnelle dans des groupes CEMAC & UEMOA",
  "Réseaux établis auprès des banques, administrations fiscales et partenaires financiers",
];

export function Expertise() {
  return (
    <Section className="bg-[#F7F9FC]">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Une équipe de profil senior"
          title="Une expertise éprouvée sur le terrain"
        />
        <ul className="mt-10 space-y-5">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-base leading-relaxed text-foreground">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
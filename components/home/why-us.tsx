import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/layout/container";

const reasons = [
  {
    title: "Expertise locale & internationale",
    description:
      "18+ ans d'expérience au Cameroun, au Gabon et en Côte d'Ivoire, avec une maîtrise fine des normes SYSCOHADA, OHADA, COBAC et CIMA.",
  },
  {
    title: "Interlocuteur senior dédié",
    description:
      "Un référent unique et stable vous accompagne pour toute la durée du mandat.",
  },
  {
    title: "Confidentialité absolue",
    description:
      "Charte signée et discrétion totale sur l'ensemble des informations transmises.",
  },
  {
    title: "Réactivité & disponibilité",
    description:
      "Réponse sous 24h ouvrées, avec mobilisation en urgence si la situation l'exige.",
  },
  {
    title: "Coût optimisé vs recrutement",
    description:
      "Jusqu'à 70 % d'économie par rapport au recrutement d'un profil senior à temps plein.",
  },
];

export function WhyUs() {
  return (
    <Section className="bg-[#F7F9FC]">
      <Container>
        <SectionHeading
          eyebrow="Pourquoi nous choisir"
          title="Un accompagnement pensé pour les dirigeants exigeants"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="border-l-2 border-accent pl-6">
              <h3 className="text-base font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
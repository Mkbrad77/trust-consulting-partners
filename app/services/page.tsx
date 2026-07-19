import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";
import { ServicesPreview } from "@/components/home/services-preview";
import { Methodology } from "@/components/home/methodology";
import { Cta } from "@/components/home/cta";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Nos Services | Trust Consulting Partners",
  description:
    "Cinq pôles d'expertise : DAF externalisée, audit et contrôle interne, conseil fiscal, financement bancaire, restructuration financière.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-background pt-12">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Nos services
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-primary md:text-5xl">
            Cinq pôles au service de votre performance financière
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Toutes nos missions débutent par un diagnostic flash gratuit (2h)
            et se formalisent par une lettre de mission précisant le
            périmètre, les livrables et les honoraires.
          </p>
        </Container>
      </Section>
      <ServicesPreview />
      <FadeIn>
        <Methodology />
      </FadeIn>
      <Cta />
    </>
  );
}
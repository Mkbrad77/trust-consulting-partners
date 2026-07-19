import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactMap } from "@/components/contact/map";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Contact | Trust Consulting Partners",
  description:
    "Contactez Trust Consulting Partners pour un diagnostic flash gratuit : téléphone, email, WhatsApp ou formulaire en ligne.",
};

export default function ContactPage() {
  return (
    <Section className="bg-background pt-12">
      <Container className="max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-primary md:text-5xl">
          Parlons de votre performance financière
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Toutes nos missions débutent par un diagnostic flash gratuit, sans
          engagement. Écrivez-nous ou contactez-nous directement.
        </p>
      </Container>

      <Container className="mt-16 grid gap-16 lg:grid-cols-2">
        <FadeIn>
          <ContactForm />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="space-y-10">
            <ContactInfo />
            <ContactMap />
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
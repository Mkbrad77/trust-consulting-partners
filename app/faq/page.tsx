import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/config/faq";
import { Cta } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "FAQ | Trust Consulting Partners",
  description:
    "Réponses aux questions fréquentes sur nos missions, nos honoraires et notre méthodologie d'intervention.",
};

export default function FaqPage() {
  return (
    <>
      <Section className="bg-background pt-12">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            FAQ
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-primary md:text-5xl">
            Questions fréquentes
          </h1>

          <Accordion className="mt-12">
            {faqItems.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>
      <Cta />
    </>
  );
}
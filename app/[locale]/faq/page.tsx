import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cta } from "@/components/home/cta";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("faqPage.meta");
  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates("/faq"),
  };
}

export default async function FaqPage() {
  const t = await getTranslations("faqPage");
  const items = t.raw("items") as { question: string; answer: string }[];

  return (
    <>
      <Section className="bg-background pt-12">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {t("eyebrow")}
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-primary md:text-5xl">
            {t("title")}
          </h1>

          <Accordion className="mt-12">
            {items.map((item, i) => (
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
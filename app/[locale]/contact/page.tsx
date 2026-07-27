import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactMap } from "@/components/contact/map";
import { FadeIn } from "@/components/motion/fade-in";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact.meta");
  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates("/contact"),
  };
}
export default async function ContactPage() {
  const t = await getTranslations("contact.hero");

  return (
    <Section className="bg-background pt-12">
      <Container className="max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {t("eyebrow")}
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-primary md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          {t("description")}
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
"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";

export function CabinetIntro() {
  const t = useTranslations("cabinet.intro");

  return (
    <Section className="bg-background pt-12">
      <Container className="max-w-3xl">
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
    </Section>
  );
}
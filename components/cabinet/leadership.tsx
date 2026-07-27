"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/layout/container";

const founders = [
  { name: "TAKOU Maurice Rodrigue" },
  { name: "MOYO KAMDEM Léopold" },
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
  const t = useTranslations("cabinet.leadership");

  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
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
              <p className="mt-1 text-sm text-muted">{t("role")}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
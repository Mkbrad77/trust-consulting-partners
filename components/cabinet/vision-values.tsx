"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/layout/container";

export function VisionValues() {
  const t = useTranslations("cabinet.visionValues");
  const values = t.raw("values") as string[];

  return (
    <Section className="bg-background">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={t("visionEyebrow")}
              title={t("visionTitle")}
              center={false}
            />
            <p className="mt-6 text-base leading-relaxed text-muted">
              {t("visionText")}
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow={t("valuesEyebrow")}
              title={t("valuesTitle")}
              center={false}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="rounded-full bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
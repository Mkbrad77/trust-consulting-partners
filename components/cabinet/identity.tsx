"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";

export function CabinetIdentity() {
  const t = useTranslations("cabinet.identity");
  const rows = t.raw("rows") as { label: string; value: string }[];

  return (
    <Section className="bg-[#F7F9FC]">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-semibold text-primary">{t("title")}</h2>
        <dl className="mt-8 divide-y divide-border rounded-2xl border border-border bg-background">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-3 sm:gap-4"
            >
              <dt className="text-sm font-medium text-muted">{row.label}</dt>
              <dd className="text-sm font-medium text-foreground sm:col-span-2">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
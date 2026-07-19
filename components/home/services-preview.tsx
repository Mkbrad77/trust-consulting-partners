import Link from "next/link";
import {
  Wallet,
  ShieldCheck,
  Landmark,
  Banknote,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

const icons = [Wallet, ShieldCheck, Landmark, Banknote, RefreshCcw];

export function ServicesPreview() {
  const services =
    siteConfig.mainNav.find((item) => item.label === "Nos Services")
      ?.children ?? [];

  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading
          eyebrow="Nos pôles d'expertise"
          title="Cinq pôles au service de votre performance financière"
          description="Chaque mission débute par un diagnostic flash gratuit et se formalise par une lettre de mission précisant le périmètre, les livrables et les honoraires."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i] ?? Wallet;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-border bg-background p-8 transition-colors hover:border-primary/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {service.label}
                </h3>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  En savoir plus
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
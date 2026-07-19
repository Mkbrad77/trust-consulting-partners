import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import type { ServiceData } from "@/config/services";
import { services } from "@/config/services";

export function ServicePageTemplate({ service }: { service: ServiceData }) {
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Section className="bg-background pt-12">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Nos services
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-primary md:text-4xl">
            {service.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {service.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link href="/contact">Demander un diagnostic gratuit</Link>
            </Button>
            <span className="text-sm font-medium text-muted">
              Honoraires : {service.fee}
            </span>
          </div>
          {service.target && (
            <p className="mt-3 text-sm text-muted">Cible : {service.target}</p>
          )}
        </Container>
      </Section>

      <FadeIn>
        <Section className="bg-[#F7F9FC]">
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-primary">
              Ce que couvre cette mission
            </h2>
            <ul className="mt-8 space-y-5">
              {service.offerings.map((offering) => (
                <li key={offering} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">
                    {offering}
                  </span>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      </FadeIn>

      {service.tiers && (
        <FadeIn>
          <Section className="bg-background">
            <Container>
              <h2 className="text-2xl font-semibold text-primary">
                Trois formats d&apos;intervention
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {service.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="rounded-2xl border border-border p-8"
                  >
                    <h3 className="text-lg font-semibold text-foreground">
                      {tier.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{tier.detail}</p>
                    <p className="mt-6 text-base font-semibold text-primary">
                      {tier.price}
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        </FadeIn>
      )}

      {service.highlight && (
        <FadeIn>
          <Section className="bg-[#0F1B33] text-white">
            <Container className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                {service.highlight.title}
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                {service.highlight.description}
              </p>
              <p className="mt-6 rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-sm text-white/80">
                {service.highlight.note}
              </p>
            </Container>
          </Section>
        </FadeIn>
      )}

      <FadeIn>
        <Section className="bg-[#F7F9FC]">
          <Container>
            <h2 className="text-2xl font-semibold text-primary">
              Découvrir nos autres pôles
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 text-sm font-medium text-foreground hover:border-primary/40"
                >
                  {s.navLabel}
                  <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      </FadeIn>
    </>
  );
}
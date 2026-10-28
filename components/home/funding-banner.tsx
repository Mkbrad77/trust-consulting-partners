"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

export function FundingBanner() {
  const t = useTranslations("home.fundingBanner");

  return (
    <section className="bg-background py-12 md:py-16">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-[#F7F9FC] px-8 py-10 md:flex-row md:items-center md:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              {t("eyebrow")}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-primary md:text-3xl">
              {t("title")}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {t("description")}
            </p>
          </div>
          <Link
            href="/diagnostic"
            className={cn(
              buttonVariants({ size: "lg" }),
              "shrink-0 bg-primary hover:bg-primary-dark"
            )}
          >
            {t("cta")}
          </Link>
        </div>
      </Container>
    </section>
  );
}

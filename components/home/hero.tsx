"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <Container className="grid gap-12 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Cabinet de conseil financier — Zone CEMAC / UEMOA
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-primary md:text-5xl">
            {siteConfig.slogan}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Direction financière externalisée, audit, conseil fiscal et
            financement bancaire : nous accompagnons les entreprises et
            groupes du Cameroun, du Gabon, du Congo-Brazzaville et de Côte
            d&apos;Ivoire avec l&apos;exigence d&apos;un cabinet international
            et la maîtrise fine du cadre SYSCOHADA, OHADA, COBAC et CIMA.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary hover:bg-primary-dark"
              )}
            >
              Réserver un diagnostic gratuit
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Découvrir nos services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-border">
            <Image
              src="/hero-image.jpg"
              alt={siteConfig.legalName}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
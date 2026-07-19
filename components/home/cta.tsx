import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function Cta() {
  return (
    <section className="bg-[#0F1B33] py-20 text-white">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
          Prêt à sécuriser et développer votre performance financière ?
        </h2>
        <p className="mt-4 max-w-xl text-white/60">
          Toutes nos missions débutent par un diagnostic flash gratuit,
          sans engagement.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-accent text-[#173404] hover:bg-accent/90"
            )}
          >
            Prendre rendez-vous
          </Link>
          
          {/* Rétablissement de la balise ouvrante <a> pour le mail */}
          <a
            href={`mailto:${siteConfig.contact.emailGeneral}`}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "border-white/30 text-white hover:bg-white/10"
            )}
          >
            <Mail className="mr-2 h-4 w-4" />
            Nous écrire
          </a>
          
          {/* Rétablissement de la balise ouvrante <a> pour le téléphone */}
          <a
            href={siteConfig.contact.phones[0].href}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "border-white/30 text-white hover:bg-white/10"
            )}
          >
            <Phone className="mr-2 h-4 w-4" />
            {siteConfig.contact.phones[0].number}
          </a>
        </div>
      </Container>
    </section>
  );
}
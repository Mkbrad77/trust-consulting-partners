"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "./container";
import { siteConfig } from "@/config/site";
import { serviceSlugs } from "@/config/services";

export function Footer() {
  const t = useTranslations();
  const officesList = t.raw("offices.list") as { label: string; address: string }[];
  const tf = useTranslations("footer");
  const year = new Date().getFullYear();

  const navLabels: Record<string, string> = {
    "Notre Cabinet": t("nav.notreCabinet"),
    "Nos Services": t("nav.nosServices"),
    "Ressources": t("nav.ressources"),
    "Contact": t("nav.contact"),
  };

  return (
    <footer className="bg-[#0F1B33] text-white">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src="/logo-full-white.png"
            alt={siteConfig.legalName}
            width={220}
            height={32}
            className="h-8 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {tf("tagline")}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{tf("navigation")}</h3>
          <ul className="mt-4 space-y-2">
            {siteConfig.mainNav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-white/60 hover:text-accent">
                  {navLabels[item.label] ?? item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{tf("nosPoles")}</h3>
          <ul className="mt-4 space-y-2">
            {serviceSlugs.map((slug) => (
              <li key={slug}>
                <Link href={`/services/${slug}`} className="text-sm text-white/60 hover:text-accent">
                  {t(`services.${slug}.navLabel`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{tf("contact")}</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{officesList[0].label} — {siteConfig.offices[0].city}, {officesList[0].address}</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{siteConfig.offices[2].city} — {officesList[2].address}</span>
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <span>
                <a href={siteConfig.contact.phones[0].href} className="hover:text-accent">
                  {siteConfig.contact.phones[0].number}
                </a>
                {" / "}
                <a href={siteConfig.contact.phones[1].href} className="hover:text-accent">
                  {siteConfig.contact.phones[1].number}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${siteConfig.contact.emailGeneral}`} className="hover:text-accent">
                {siteConfig.contact.emailGeneral}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-xs text-white/40">
            © {year} {siteConfig.legalName}. {tf("tousDroits")}
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-xs text-white/40 hover:text-accent">
              {tf("mentionsLegales")}
            </Link>
            <Link href="/politique-confidentialite" className="text-xs text-white/40 hover:text-accent">
              {tf("politiqueConfidentialite")}
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
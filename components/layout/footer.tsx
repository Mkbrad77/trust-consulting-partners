"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "./container";
import { siteConfig } from "@/config/site";
import { serviceSlugs } from "@/config/services";

export function Footer() {
  const t = useTranslations();
  const tf = useTranslations("footer");

  const officesList = t.raw("offices.list") as {
    city: string;
    tag: string;
    country: string;
    address: string;
  }[];
  const year = new Date().getFullYear();

  const navLabels: Record<string, string> = {
    "Notre Cabinet": t("nav.notreCabinet"),
    "Nos Services": t("nav.nosServices"),
    "Ressources": t("nav.ressources"),
    "Contact": t("nav.contact"),
  };

  const cameroonOffices = officesList.filter((o) => o.country === t("offices.cameroonLabel"));
  const ivoryCoastOffices = officesList.filter((o) => o.country === t("offices.ivoryCoastLabel"));

  return (
    <footer className="bg-[#0F1B33] text-white">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src="/logo-full-white.png"
            alt={siteConfig.legalName}
            width={229}
            height={32}
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
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${siteConfig.contact.emailGeneral}`} className="hover:text-accent">
                {siteConfig.contact.emailGeneral}
              </a>
            </li>
            <li>
              <Link href="/contact" className="text-sm font-medium text-accent hover:underline">
                {tf("contactLink")}
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      {/* Bloc "Contacts" façon plaquette : regroupement par pays */}
      <div className="border-t border-white/10 bg-black/10">
        <Container className="py-12">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            {t("offices.sectionTitle")}
          </p>
          <div className="mt-6 grid gap-10 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
                {t("offices.cameroonLabel")}
              </h4>
              <div className="mt-4 space-y-4">
                {cameroonOffices.map((office) => (
                  <div key={office.city} className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {office.city}
                        {office.tag && <span className="text-white/60"> - {office.tag}</span>}
                      </p>
                      <p className="text-sm text-white/60">{office.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
                {t("offices.ivoryCoastLabel")}
              </h4>
              <div className="mt-4 space-y-4">
                {ivoryCoastOffices.map((office) => (
                  <div key={office.city} className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {office.city}
                        {office.tag && <span className="text-white/60"> - {office.tag}</span>}
                      </p>
                      <p className="text-sm text-white/60">{office.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <span className="font-medium text-white">{t("offices.phoneLabel")}:</span>
              <span>
                {siteConfig.contact.phones.map((p) => p.number).join(" | ")}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <span className="font-medium text-white">{t("offices.emailLabel")}:</span>
              <a href={`mailto:${siteConfig.contact.emailGeneral}`} className="hover:text-accent">
                {siteConfig.contact.emailGeneral}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Globe className="h-4 w-4 shrink-0 text-accent" />
              <span className="font-medium text-white">{t("offices.webLabel")}:</span>
              <span>www.trust-consulting-partners.com</span>
            </div>
          </div>
        </Container>
      </div>

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
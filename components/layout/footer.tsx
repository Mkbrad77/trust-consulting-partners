import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./container";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

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
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Navigation</h3>
          <ul className="mt-4 space-y-2">
            {siteConfig.mainNav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-white/60 hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Nos pôles</h3>
          <ul className="mt-4 space-y-2">
            {siteConfig.mainNav
              .find((item) => item.label === "Nos Services")
              ?.children?.map((child) => (
                <li key={child.href}>
                  <Link href={child.href} className="text-sm text-white/60 hover:text-accent">
                    {child.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{siteConfig.offices[0].label} — {siteConfig.offices[0].city}, {siteConfig.offices[0].address}</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{siteConfig.offices[2].city} — {siteConfig.offices[2].address}</span>
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
            © {year} {siteConfig.legalName}. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-xs text-white/40 hover:text-accent">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-xs text-white/40 hover:text-accent">
              Politique de confidentialité
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
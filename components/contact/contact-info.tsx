import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Nos coordonnées</h2>
        <p className="mt-2 text-sm text-muted">
          Lundi – Vendredi | 8h00 – 18h00 | Réponse sous 24h ouvrées
        </p>
      </div>

      <div className="space-y-4">
        {/* Correction de la boucle des téléphones */}
        {siteConfig.contact.phones.map((phone) => (
          <a
            key={phone.href}
            href={phone.href}
            className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/5 text-primary">
              <Phone className="h-4 w-4" />
            </span>
            {phone.number}
            <span className="text-xs text-muted">({phone.country})</span>
          </a>
        ))}

        {/* Correction du lien WhatsApp */}
        <a
          href={siteConfig.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
            <MessageCircle className="h-4 w-4" />
          </span>
          Discuter sur WhatsApp
        </a>

        {/* Correction du lien Email */}
        <a
          href={`mailto:${siteConfig.contact.emailGeneral}`}
          className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/5 text-primary">
            <Mail className="h-4 w-4" />
          </span>
          {siteConfig.contact.emailGeneral}
        </a>
      </div>

      <div className="space-y-4 border-t border-border pt-6">
        {siteConfig.offices.map((office) => (
          <div key={office.city} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
              <MapPin className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">
                {office.city} {office.label && `— ${office.label}`}
              </p>
              <p className="text-sm text-muted">{office.address}</p>
            </div>
          </div>
        ))}
        
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
            <Clock className="h-4 w-4" />
          </span>
          <p className="text-sm text-muted">
            Réponse sous 24h ouvrées, mobilisation en urgence si nécessaire
          </p>
        </div>
      </div>
    </div>
  );
}
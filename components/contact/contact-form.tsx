"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/config/services";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot : si ce champ caché est rempli, c'est un robot
    if (data.get("website")) {
      setStatus("success");
      return;
    }

    const newErrors: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2) newErrors.name = "Merci d'indiquer votre nom complet.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Merci d'indiquer une adresse email valide.";
    if (message.length < 10)
      newErrors.message = "Votre message doit contenir au moins 10 caractères.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("loading");
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");
    data.append("subject", `Nouveau message via trust-consulting-partners.com`);
    data.append("from_name", "Site Trust Consulting Partners");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot anti-spam — champ invisible pour les humains */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email professionnel
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Téléphone <span className="text-muted">(optionnel)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Entreprise <span className="text-muted">(optionnel)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="text-sm font-medium text-foreground">
          Pôle concerné <span className="text-muted">(optionnel)</span>
        </label>
        <select
          id="service"
          name="service"
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
        >
          <option value="">Sélectionner un pôle</option>
          {services.map((s) => (
            <option key={s.slug} value={s.navLabel}>
              {s.navLabel}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="w-full bg-primary hover:bg-primary-dark sm:w-auto"
      >
        {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Envoyer le message
      </Button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm font-medium text-green-700">
          <CheckCircle2 className="h-4 w-4" />
          Votre message a bien été envoyé. Nous vous répondrons sous 24h ouvrées.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm font-medium text-red-600">
          <AlertCircle className="h-4 w-4" />
          Une erreur est survenue. Merci de réessayer ou de nous contacter directement par téléphone.
        </p>
      )}
    </form>
  );
}
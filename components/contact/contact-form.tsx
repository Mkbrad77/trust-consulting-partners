"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { serviceSlugs } from "@/config/services";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const t = useTranslations();
  const tf = useTranslations("contact.form");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      setStatus("success");
      return;
    }

    const newErrors: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2) newErrors.name = tf("errors.name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = tf("errors.email");
    if (message.length < 10) newErrors.message = tf("errors.message");

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
            {tf("name")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            {tf("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            {tf("phone")} <span className="text-muted">({tf("optional")})</span>
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
            {tf("company")} <span className="text-muted">({tf("optional")})</span>
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
          {tf("service")} <span className="text-muted">({tf("optional")})</span>
        </label>
        <select
          id="service"
          name="service"
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
        >
          <option value="">{tf("servicePlaceholder")}</option>
          {serviceSlugs.map((slug) => (
            <option key={slug} value={t(`services.${slug}.navLabel`)}>
              {t(`services.${slug}.navLabel`)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          {tf("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="w-full bg-primary hover:bg-primary-dark sm:w-auto"
      >
        {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {tf("submit")}
      </Button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm font-medium text-green-700">
          <CheckCircle2 className="h-4 w-4" />
          {tf("success")}
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm font-medium text-red-600">
          <AlertCircle className="h-4 w-4" />
          {tf("error")}
        </p>
      )}
    </form>
  );
}
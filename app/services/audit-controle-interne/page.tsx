import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { getServiceBySlug } from "@/config/services";
import { Cta } from "@/components/home/cta";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Audit & Contrôle Interne | Trust Consulting Partners",
  description:
    "Audit comptable et financier, due diligence, contrôle interne et audit des trop-perçus bancaires pour entreprises en zone CEMAC/UEMOA.",
};

export default function Page() {
  const service = getServiceBySlug("audit-controle-interne");
  if (!service) return notFound();
  return (
    <>
      <ServicePageTemplate service={service} />
      <Cta />
    </>
  );
}
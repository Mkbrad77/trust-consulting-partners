import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { getServiceBySlug } from "@/config/services";
import { Cta } from "@/components/home/cta";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Restructuration & Redressement | Trust Consulting Partners",
  description:
    "Diagnostic de liquidité, restructuration de la dette et procédures OHADA de prévention pour entreprises en zone CEMAC/UEMOA.",
};

export default function Page() {
  const service = getServiceBySlug("restructuration-financiere");
  if (!service) return notFound();
  return (
    <>
      <ServicePageTemplate service={service} />
      <Cta />
    </>
  );
}
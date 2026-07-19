import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { getServiceBySlug } from "@/config/services";
import { Cta } from "@/components/home/cta";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "DAF Externalisée (DAF-X™) | Trust Consulting Partners",
  description:
    "Direction Administrative et Financière externalisée : pilotage financier, reporting, trésorerie et sécurisation pour PME et groupes en zone CEMAC/UEMOA.",
};

export default function Page() {
  const service = getServiceBySlug("daf-externalisee");
  if (!service) return notFound();
  return (
    <>
      <ServicePageTemplate service={service} />
      <Cta />
    </>
  );
}
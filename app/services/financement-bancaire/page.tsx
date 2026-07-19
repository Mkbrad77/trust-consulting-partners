import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { getServiceBySlug } from "@/config/services";
import { Cta } from "@/components/home/cta";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Financement Bancaire | Trust Consulting Partners",
  description:
    "Business plan, montage de dossier de crédit et financements alternatifs pour entreprises en zone CEMAC/UEMOA.",
};

export default function Page() {
  const service = getServiceBySlug("financement-bancaire");
  if (!service) return notFound();
  return (
    <>
      <ServicePageTemplate service={service} />
      <Cta />
    </>
  );
}
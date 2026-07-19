import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { getServiceBySlug } from "@/config/services";
import { Cta } from "@/components/home/cta";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Accompagnement Business Plans | Trust Consulting Partners",
  description:
    "Conception et suivi de l'implémentation de business plans pour vos projets en zone CEMAC/UEMOA.",
};

export default function Page() {
  const service = getServiceBySlug("conception-suivi-business-plans");
  if (!service) return notFound();
  return (
    <>
      <ServicePageTemplate service={service} />
      <Cta />
    </>
  );
}
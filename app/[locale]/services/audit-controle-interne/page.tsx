// import type { Metadata } from "next";
// import { ServicePageTemplate } from "@/components/services/service-page-template";
// import { getServiceBySlug } from "@/config/services";
// import { Cta } from "@/components/home/cta";
// import { notFound } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Audit & Contrôle Interne | Trust Consulting Partners",
//   description:
//     "Audit comptable et financier, due diligence, contrôle interne et audit des trop-perçus bancaires pour entreprises en zone CEMAC/UEMOA.",
// };

// export default function Page() {
//   const service = getServiceBySlug("audit-controle-interne");
//   if (!service) return notFound();
//   return (
//     <>
//       <ServicePageTemplate service={service} />
//       <Cta />
//     </>
//   );
// }
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { Cta } from "@/components/home/cta";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("services.audit-controle-interne");
  return {
    title: `${t("title")} | Trust Consulting Partners`,
    description: t("summary"),
    alternates: getAlternates("/services/audit-controle-interne"),
  };
}
export default function Page() {
  return (
    <>
      <ServicePageTemplate slug="audit-controle-interne" />
      <Cta />
    </>
  );
}
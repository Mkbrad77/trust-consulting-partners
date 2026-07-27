// import type { Metadata } from "next";
// import { ServicePageTemplate } from "@/components/services/service-page-template";
// import { getServiceBySlug } from "@/config/services";
// import { Cta } from "@/components/home/cta";
// import { notFound } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Conseil Fiscal & Optimisation | Trust Consulting Partners",
//   description:
//     "Fiscalité courante, optimisation fiscale, contentieux DGI et prix de transfert pour entreprises en zone CEMAC/UEMOA.",
// };

// export default function Page() {
//   const service = getServiceBySlug("conseil-fiscal");
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
  const t = await getTranslations("services.conseil-fiscal");
  return {
    title: `${t("title")} | Trust Consulting Partners`,
    description: t("summary"),
    alternates: getAlternates("/services/conseil-fiscal"),
  };
}

export default function Page() {
  return (
    <>
      <ServicePageTemplate slug="conseil-fiscal" />
      <Cta />
    </>
  );
}
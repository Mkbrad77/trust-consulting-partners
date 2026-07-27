// import type { Metadata } from "next";
// import { ServicePageTemplate } from "@/components/services/service-page-template";
// import { getServiceBySlug } from "@/config/services";
// import { Cta } from "@/components/home/cta";
// import { notFound } from "next/navigation";

// export const metadata: Metadata = {
//   title: "DAF Externalisée (DAF-X™) | Trust Consulting Partners",
//   description:
//     "Direction Administrative et Financière externalisée : pilotage financier, reporting, trésorerie et sécurisation pour PME et groupes en zone CEMAC/UEMOA.",
// };

// export default function Page() {
//   const service = getServiceBySlug("daf-externalisee");
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
  const t = await getTranslations("services.daf-externalisee");
  return {
    title: `${t("title")} | Trust Consulting Partners`,
    description: t("summary"),
    alternates: getAlternates("/services/daf-externalisee"),
  };
}
export default function Page() {
  return (
    <>
      <ServicePageTemplate slug="daf-externalisee" />
      <Cta />
    </>
  );
}
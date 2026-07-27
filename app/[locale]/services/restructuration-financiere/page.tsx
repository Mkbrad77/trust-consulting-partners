// import type { Metadata } from "next";
// import { ServicePageTemplate } from "@/components/services/service-page-template";
// import { getServiceBySlug } from "@/config/services";
// import { Cta } from "@/components/home/cta";
// import { notFound } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Restructuration & Redressement | Trust Consulting Partners",
//   description:
//     "Diagnostic de liquidité, restructuration de la dette et procédures OHADA de prévention pour entreprises en zone CEMAC/UEMOA.",
// };

// export default function Page() {
//   const service = getServiceBySlug("restructuration-financiere");
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
  const t = await getTranslations("services.restructuration-financiere");
  return {
    title: `${t("title")} | Trust Consulting Partners`,
    description: t("summary"),
    alternates: getAlternates("/services/restructuration-financiere"),
  };
}
export default function Page() {
  return (
    <>
      <ServicePageTemplate slug="restructuration-financiere" />
      <Cta />
    </>
  );
}
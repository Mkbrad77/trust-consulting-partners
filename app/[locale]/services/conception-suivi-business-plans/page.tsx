// import type { Metadata } from "next";
// import { ServicePageTemplate } from "@/components/services/service-page-template";
// import { getServiceBySlug } from "@/config/services";
// import { Cta } from "@/components/home/cta";
// import { notFound } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Accompagnement Business Plans | Trust Consulting Partners",
//   description:
//     "Conception et suivi de l'implémentation de business plans pour vos projets en zone CEMAC/UEMOA.",
// };

// export default function Page() {
//   const service = getServiceBySlug("conception-suivi-business-plans");
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
  const t = await getTranslations("services.conception-suivi-business-plans");
  return {
    title: `${t("title")} | Trust Consulting Partners`,
    description: t("summary"),
    alternates: getAlternates("/services/conception-suivi-business-plans"),
  };
}
export default function Page() {
  return (
    <>
      <ServicePageTemplate slug="conception-suivi-business-plans" />
      <Cta />
    </>
  );
}
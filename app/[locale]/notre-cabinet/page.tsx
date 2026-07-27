import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CabinetIntro } from "@/components/cabinet/intro";
import { CabinetIdentity } from "@/components/cabinet/identity";
import { VisionValues } from "@/components/cabinet/vision-values";
import { Expertise } from "@/components/cabinet/expertise";
import { Leadership } from "@/components/cabinet/leadership";
import { Sectors } from "@/components/home/sectors";
import { Cta } from "@/components/home/cta";
import { FadeIn } from "@/components/motion/fade-in";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("cabinet.meta");
  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates("/notre-cabinet"),
  };
}

export default function NotreCabinetPage() {
  return (
    <>
      <CabinetIntro />
      <FadeIn>
        <CabinetIdentity />
      </FadeIn>
      <FadeIn>
        <VisionValues />
      </FadeIn>
      <FadeIn>
        <Expertise />
      </FadeIn>
      <FadeIn>
        <Leadership />
      </FadeIn>
      <FadeIn>
        <Sectors />
      </FadeIn>
      <Cta />
    </>
  );
}
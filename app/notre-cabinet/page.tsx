import type { Metadata } from "next";
import { CabinetIntro } from "@/components/cabinet/intro";
import { CabinetIdentity } from "@/components/cabinet/identity";
import { VisionValues } from "@/components/cabinet/vision-values";
import { Expertise } from "@/components/cabinet/expertise";
import { Leadership } from "@/components/cabinet/leadership";
import { Sectors } from "@/components/home/sectors";
import { Cta } from "@/components/home/cta";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Notre Cabinet | Trust Consulting Partners",
  description:
    "Découvrez Trust Consulting Partners : identité, vision, valeurs et équipe dirigeante d'un cabinet de conseil financier au service de la zone CEMAC/UEMOA.",
};

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
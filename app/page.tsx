import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { ServicesPreview } from "@/components/home/services-preview";
import { WhyUs } from "@/components/home/why-us";
import { Sectors } from "@/components/home/sectors";
import { Methodology } from "@/components/home/methodology";
import { Cta } from "@/components/home/cta";
import { FadeIn } from "@/components/motion/fade-in";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FadeIn>
        <ServicesPreview />
      </FadeIn>
      <FadeIn>
        <WhyUs />
      </FadeIn>
      <FadeIn>
        <Sectors />
      </FadeIn>
      <FadeIn>
        <Methodology />
      </FadeIn>
      <Cta />
    </>
  );
}
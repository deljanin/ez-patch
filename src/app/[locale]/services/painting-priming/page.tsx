import FullscreenHero from "@/components/sections/FullscreenHero";
import { useMessages, useTranslations } from "next-intl";

import HeroImage from "/public/images/services/painting-priming/hero.jpg";
import { BeforeAfter } from "@/components/sections/BeforeAfter";

import before from "/public/images/services/painting-priming/before.jpg";
import after from "/public/images/services/painting-priming/after.jpg";
import ClosingImage from "/public/images/services/painting-priming/closing.jpg";
import Showcase from "/public/images/services/painting-priming/showcase.jpg";

import ClosingImageRight from "@/components/sections/ClosingImageRight";
import MidSectionCards from "@/components/sections/MidSectionCards";

export default function Page() {
  const t = useTranslations("ServicePages.PaintingPriming");
  const messages = useMessages();
  const benefits = Object.values(
    messages.ServicePages.CeilingRepair.Benefits,
  ) as string[];
  return (
    <>
      <FullscreenHero
        title={t("Hero.Title")}
        subtitle={t("Hero.Subtitle")}
        cta={t("Hero.CTA")}
        isHero={true}
        imageUrl={HeroImage}
        imageAlt="Painting and Priming Service background image"
      />
      <MidSectionCards
        title={t("Intro.Title")}
        subtitle={t("Intro.Paragraph")}
        benefits={benefits}
        imageUrl={Showcase}
        imageAlt="Water damage repair service showcase image"
      />
      <BeforeAfter before={before} after={after} />
      <ClosingImageRight
        title={t("ClosingSection.Title")}
        subtitle={t("ClosingSection.Paragraph")}
        cta={t("ClosingSection.CTA")}
        imageUrl={ClosingImage}
        imageAlt="Painting and priming service image"
      />
    </>
  );
}

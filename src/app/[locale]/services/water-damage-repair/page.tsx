import before from "/public/images/services/water-damage-repair/before.jpg";
import after from "/public/images/services/water-damage-repair/after.jpg";
import { useMessages, useTranslations } from "next-intl";

import HeroImage from "/public/images/services/water-damage-repair/hero.jpg";
import ClosingImage from "/public/images/services/water-damage-repair/closing.jpg";
import Showcase from "/public/images/services/water-damage-repair/showcase.jpg";

import { BeforeAfter } from "@/components/sections/BeforeAfter";
import FullscreenHero from "@/components/sections/FullscreenHero";
import ClosingImageRight from "@/components/sections/ClosingImageRight";
import MidSectionCards from "@/components/sections/MidSectionCards";

export default function Page() {
  const t = useTranslations("ServicePages.WaterDamageRepair");

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
        imageAlt="Water damage repair service background image"
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
        imageAlt="Water damage repair service image"
      />
    </>
  );
}

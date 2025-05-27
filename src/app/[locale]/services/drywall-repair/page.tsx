import { BeforeAfter } from "@/components/sections/BeforeAfter";
import before from "/public/images/services/drywall-repair/before.jpg";
import after from "/public/images/services/drywall-repair/after.jpg";
import { useTranslations, useMessages } from "next-intl";

import ClosingImage from "/public/images/services/drywall-repair/closing.jpg";
import Showcase from "/public/images/services/drywall-repair/showcase.jpg";
import Hero from "/public/images/services/drywall-repair/hero.jpg";

import FullscreenHero from "@/components/sections/FullscreenHero";
import MidSectionVertical from "@/components/sections/MidSectionVertical";
import HeroImageBenefits from "@/components/sections/HeroImageBenefits";
export default function Page() {
  const t = useTranslations("ServicePages.DrywallRepair");

  const messages = useMessages();
  const benefits = Object.values(
    messages.ServicePages.DrywallRepair.Benefits,
  ) as string[];
  return (
    <>
      <HeroImageBenefits
        title={t("Hero.Title")}
        subtitle={t("Hero.Subtitle")}
        cta={t("Hero.CTA")}
        imageUrl={Hero}
        imageAlt="Drywall repair service image"
        benefits={benefits}
      />
      <MidSectionVertical
        title={t("Intro.Title")}
        paragraph={t("Intro.Paragraph")}
        imageUrl={Showcase}
        imageAlt="Drywall repair service showcase image"
      />
      <BeforeAfter before={before} after={after} />
      <FullscreenHero
        title={t("ClosingSection.Title")}
        subtitle={t("ClosingSection.Paragraph")}
        cta={t("ClosingSection.CTA")}
        isHero={true}
        imageUrl={ClosingImage}
        imageAlt="Drywall repair service background image"
        isCentered={false}
      />
    </>
  );
}

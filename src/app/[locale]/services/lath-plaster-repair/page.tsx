import { BeforeAfter } from "@/components/sections/BeforeAfter";
import before from "/public/images/services/lath-plaster-repair/before.jpg";
import after from "/public/images/services/lath-plaster-repair/after.jpg";
import { useMessages, useTranslations } from "next-intl";

import ClosingImage from "/public/images/services/lath-plaster-repair/closing.jpg";
import Showcase from "/public/images/services/lath-plaster-repair/showcase.jpg";
import Hero from "/public/images/services/lath-plaster-repair/hero.jpg";

import FullscreenHero from "@/components/sections/FullscreenHero";
import MidSectionVertical from "@/components/sections/MidSectionVertical";
import HeroImageBenefits from "@/components/sections/HeroImageBenefits";
export default function Page() {
  const t = useTranslations("ServicePages.LathPlasterRepair");
  const messages = useMessages();
  const benefits = Object.values(
    messages.ServicePages.DrywallInstallation.Benefits,
  ) as string[];
  return (
    <>
      <HeroImageBenefits
        title={t("Hero.Title")}
        subtitle={t("Hero.Subtitle")}
        cta={t("Hero.CTA")}
        imageUrl={Hero}
        imageAlt="Lath and plaster service image"
        benefits={benefits}
      />
      <MidSectionVertical
        title={t("Intro.Title")}
        paragraph={t("Intro.Paragraph")}
        imageUrl={Showcase}
        imageAlt="Lath and plaster service showcase image"
      />
      <BeforeAfter before={before} after={after} />
      <FullscreenHero
        title={t("ClosingSection.Title")}
        subtitle={t("ClosingSection.Paragraph")}
        cta={t("ClosingSection.CTA")}
        isHero={true}
        imageUrl={ClosingImage}
        imageAlt="Lath and plaster service background image"
        isCentered={false}
      />
    </>
  );
}

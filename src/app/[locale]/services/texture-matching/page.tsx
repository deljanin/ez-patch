import { BeforeAfter } from "@/components/sections/BeforeAfter";
import before from "/public/images/services/texture-matching/before.jpg";
import after from "/public/images/services/texture-matching/after.jpg";
import FullscreenHero from "@/components/sections/FullscreenHero";
import { useMessages, useTranslations } from "next-intl";

import ClosingImage from "/public/images/services/texture-matching/closing.jpg";
import Showcase from "/public/images/services/texture-matching/showcase.jpg";
import Hero from "/public/images/services/texture-matching/hero.jpg";

import MidSectionVertical from "@/components/sections/MidSectionVertical";
import HeroImageBenefits from "@/components/sections/HeroImageBenefits";

export default function Page() {
  const t = useTranslations("ServicePages.TextureMatching");

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
        imageAlt="Texture matching service image"
        benefits={benefits}
      />
      <MidSectionVertical
        title={t("Intro.Title")}
        paragraph={t("Intro.Paragraph")}
        imageUrl={Showcase}
        imageAlt="Texture matching service showcase image"
      />
      <BeforeAfter before={before} after={after} />
      <FullscreenHero
        title={t("ClosingSection.Title")}
        subtitle={t.rich("ClosingSection.Paragraph", {
          bold: (chunks) => <b className="font-bold">{chunks}</b>,
        })}
        cta={t("ClosingSection.CTA")}
        isHero={true}
        imageUrl={ClosingImage}
        imageAlt="Texture matching service background image"
      />
    </>
  );
}

import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { useMessages, useTranslations } from "next-intl";

import before from "/public/images/services/taping-mudding/before.jpg";
import after from "/public/images/services/taping-mudding/after.jpg";
import HeroImage from "/public/images/services/taping-mudding/hero.jpg";
import ClosingImage from "/public/images/services/taping-mudding/closing.jpg";
import Showcase from "/public/images/services/taping-mudding/showcase.jpg";

import FullscreenHero from "@/components/sections/FullscreenHero";
import ClosingImageRight from "@/components/sections/ClosingImageRight";
import MidSectionCards from "@/components/sections/MidSectionCards";

export default function Page() {
  const t = useTranslations("ServicePages.DrywallTaping");
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
        imageAlt="Drywall taping and mudding service background image"
        isCentered={false}
      />
      <MidSectionCards
        title={t("Intro.Title")}
        subtitle={t("Intro.Paragraph")}
        benefits={benefits}
        imageUrl={Showcase}
        imageAlt="Drywall taping and mudding service showcase image"
      />
      <BeforeAfter before={before} after={after} />
      <ClosingImageRight
        title={t("ClosingSection.Title")}
        subtitle={t("ClosingSection.Paragraph")}
        cta={t("ClosingSection.CTA")}
        imageUrl={ClosingImage}
        imageAlt="Drywall taping and mudding service image"
      />
    </>
  );
}

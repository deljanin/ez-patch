import Button from "@/components/Button";
import { H2, H3 } from "@/components/Headings";
import { useMessages, useTranslations } from "next-intl";
import DrywallRepair from "/public/images/home/services/Drywall Repair.jpg";
import CeilingRepair from "/public/images/home/services/Ceiling Repair.jpg";
import DrywallInstallation from "/public/images/home/services/Drywall Installation.jpg";
import TapingMudding from "/public/images/home/services/Taping & Mudding.jpg";
import PaintingPriming from "/public/images/home/services/Painting & Priming.jpg";
import TextureMatching from "/public/images/home/services/Texture Matching.jpg";
import WaterDamageRepair from "/public/images/home/services/Water Damage Repair.jpg";
import LathPlasterRepair from "/public/images/home/services/Lath & Plaster Repair.jpg";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const images = [
  DrywallRepair,
  CeilingRepair,
  DrywallInstallation,
  TapingMudding,
  PaintingPriming,
  TextureMatching,
  WaterDamageRepair,
  LathPlasterRepair,
];

function Services() {
  const t = useTranslations("HomePage.Services");
  const messages = useMessages();

  const cardKeys = Object.keys(messages.HomePage.Services).filter(
    (key) => key !== "Title",
  );

  const cardData = cardKeys.map((key, index) => ({
    title: t(`${key}.Title`),
    description: t(`${key}.Description`),
    image: images[index],
    path: t(`${key}.Path`),
  }));

  const cardElements = cardData.map((card, index) => (
    <div
      key={index}
      className="group flex w-full flex-col items-center gap-4 rounded-3xl bg-white pb-4 shadow-[0_0_20px_0_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.025] md:w-[400px] xl:h-[650px]"
    >
      <Image
        src={card.image}
        alt={card.title}
        className="h-auto w-full rounded-t-3xl"
      />
      <div className="flex h-full flex-col items-center gap-4 p-5 xl:pt-10">
        <H3>{card.title}</H3>
        <p className="text-center font-extralight">{card.description}</p>
        <Link href={card.path}>
          <Button
            icon={false}
            styles="group-hover:scale-110 transition-transform delay-100 "
          >
            Learn more
          </Button>
        </Link>
      </div>
    </div>
  ));

  return (
    <div
      id="services"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 px-8 py-28 text-center"
    >
      <H2>{t("Title")}</H2>
      <div className="flex flex-wrap justify-evenly gap-y-8 md:gap-x-5 xl:gap-y-12 2xl:gap-x-2">
        {cardElements}
      </div>
    </div>
  );
}

export default Services;

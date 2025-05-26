"use client";
import Button from "@/components/Button";
import { H1 } from "@/components/Headings";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import HeroImage from "/public/images/home/hero/HeroImage.jpg";
import { useLenis } from "lenis/react";
function Hero() {
  const lenis = useLenis();
  const t = useTranslations("HomePage.Hero");
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-center px-5 sm:px-16 lg:px-32 xl:px-48">
      <div className="flex w-2/5 flex-col gap-7">
        <H1 styles="lg:text-6xl">{t("Title")}</H1>
        <p className="text-xl font-extralight">{t("Subtitle")}</p>
        <Link
          href="/#contact"
          onClick={() => {
            lenis?.scrollTo("#contact", { offset: 20, duration: 2 });
          }}
        >
          <Button type="button" styles="py-2.5 px-4">
            Get and estimate
          </Button>
        </Link>
      </div>
      <div className="absolute top-0 right-0 -z-10 h-full w-[55%]">
        <Image
          src={HeroImage}
          alt="Hero Image"
          fill
          className="object-cover object-right"
        />
      </div>
    </div>
  );
}

export default Hero;

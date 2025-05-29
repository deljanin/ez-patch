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
    <div
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center px-5 sm:px-16 lg:px-32 xl:items-start xl:px-48"
    >
      <div className="flex w-full flex-col items-center gap-7 md:w-3/5 xl:items-start 2xl:w-2/5">
        <H1 styles="text-white text-center xl:text-left xl:text-black lg:text-6xl lg:leading-18 text-shadow-md ">
          {t("Title")}
        </H1>
        <p className="text-center text-xl font-extralight text-white text-shadow-md xl:text-left xl:text-black">
          {t("Subtitle")}
        </p>
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
      <div className="absolute top-0 right-0 -z-10 h-full w-full xl:w-[55%]">
        <Image
          src={HeroImage}
          alt="Hero Image"
          fill
          className="object-cover object-[25%] sm:object-left"
        />
        <div className="h-full w-full bg-black opacity-25 xl:opacity-0"></div>
      </div>
    </div>
  );
}

export default Hero;

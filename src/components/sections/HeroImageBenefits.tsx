import Image, { StaticImageData } from "next/image";
import { H1, H4 } from "../Headings";
import Button from "../Button";
import { CashIcon, ClockIcon, HammerIcon, MaterialsIcon } from "../Icons";
import { Link } from "@/i18n/routing";

const icons = [HammerIcon, ClockIcon, MaterialsIcon, CashIcon];

function HeroImageBenefits({
  title,
  subtitle,
  cta,
  benefits,
  imageUrl,
  imageAlt,
}: {
  title: string;
  subtitle: string;
  cta: string;
  benefits: string[];
  imageUrl: StaticImageData;
  imageAlt: string;
}) {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between gap-10 px-5 pt-20 pb-3 sm:px-16 lg:px-32 xl:px-48">
      <div></div>
      <div className="flex flex-col justify-center lg:items-end lg:text-end">
        <H1 styles="text-shadow-md md:text-shadow-none">{title}</H1>
        <p className="mt-6 mb-10 max-w-3/4 text-xl text-shadow-md md:max-w-3/5 md:text-shadow-none xl:max-w-2/5">
          {subtitle}
        </p>
        <Link href="/contact">
          <Button styles="py-2.5 px-4">{cta}</Button>
        </Link>
      </div>
      <div className="flex w-full flex-col flex-wrap items-center justify-between gap-5 sm:grid sm:grid-cols-2 sm:place-items-center 2xl:flex 2xl:flex-row">
        {benefits.map((text, i) => (
          <div
            key={i}
            className="flex h-[100px] w-full items-center justify-between rounded-3xl bg-white px-5 shadow-[0_0_32px_rgba(0,0,0,0.25)] sm:w-[270px] sm:py-8"
          >
            <H4>{text}</H4>
            <div className="size-12 flex-shrink-0 lg:size-14">{icons[i]()}</div>
          </div>
        ))}
      </div>
      <div className="absolute top-16 left-0 -z-10 h-7/12 w-full rounded-br-3xl lg:h-[85%] lg:w-1/2">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="absolute h-full w-full object-cover md:rounded-br-3xl"
        />
        <div className="block h-full w-full bg-white opacity-15 md:hidden"></div>
      </div>
    </div>
  );
}

export default HeroImageBenefits;

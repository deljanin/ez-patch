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
    <div className="relative flex min-h-screen w-full flex-col justify-between px-5 pb-3 sm:px-16 lg:px-32 xl:px-48">
      <div></div>
      <div className="flex flex-col items-center justify-center lg:items-end lg:text-end">
        <H1>{title}</H1>
        <p className="mt-6 mb-10 text-xl lg:max-w-2/5">{subtitle}</p>
        <Link href="/contact">
          <Button styles="py-2.5 px-4">{cta}</Button>
        </Link>
      </div>
      <div className="flex w-full flex-col flex-wrap items-center justify-between md:flex-row">
        {benefits.map((text, i) => (
          <div
            key={i}
            className="flex h-[100px] w-[270px] items-center justify-between rounded-3xl bg-white px-5 py-8 shadow-[0_0_32px_rgba(0,0,0,0.25)]"
          >
            <H4>{text}</H4>
            {icons[i]()}
          </div>
        ))}
      </div>
      <div className="absolute top-16 left-0 -z-10 h-[85%] w-full rounded-br-3xl lg:w-1/2">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="absolute h-full w-full object-cover md:rounded-br-3xl"
        />
      </div>
    </div>
  );
}

export default HeroImageBenefits;

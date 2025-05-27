import Image, { StaticImageData } from "next/image";
import { H1, H2 } from "../Headings";
import Button from "../Button";
import { ReactNode } from "react";
import { Link } from "@/i18n/routing";

function FullscreenHero({
  imageUrl,
  imageAlt,
  isHero = false,
  title,
  subtitle,
  cta,
  isCentered = true,
}: {
  imageUrl: StaticImageData;
  imageAlt: string;
  isHero?: boolean;
  title: string;
  subtitle: ReactNode;
  cta: string;
  isCentered?: boolean;
}) {
  return (
    <div
      className={`relative flex min-h-screen w-full items-center justify-center px-5 ${isCentered ? "" : "sm:px-16 lg:justify-start lg:px-32 xl:pl-48"} `}
    >
      <div
        className={`flex flex-col items-center justify-center text-center lg:max-w-1/2 ${isCentered ? "" : "lg:items-start lg:justify-start lg:text-left"} `}
      >
        {isHero ? <H1>{title}</H1> : <H2>{title}</H2>}
        <p className="mt-6 mb-10 text-xl whitespace-pre-line lg:max-w-4/5">
          {subtitle}
        </p>
        <Link href="/contact">
          <Button styles="py-2.5 px-4">{cta}</Button>
        </Link>
      </div>
      <Image
        src={imageUrl}
        alt={imageAlt}
        priority
        fill
        sizes="100vw"
        quality={100}
        placeholder="blur"
        className="absolute inset-0 -z-10"
      />
    </div>
  );
}

export default FullscreenHero;

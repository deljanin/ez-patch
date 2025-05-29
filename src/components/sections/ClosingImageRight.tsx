import Image, { StaticImageData } from "next/image";
import { H1 } from "../Headings";
import Button from "../Button";
import { Link } from "@/i18n/routing";

function ClosingImageRight({
  title,
  subtitle,
  cta,
  imageUrl,
  imageAlt,
}: {
  title: string;
  subtitle: string;
  cta: string;
  imageUrl: StaticImageData;
  imageAlt: string;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col items-end gap-5 lg:flex-row 2xl:relative">
      <div className="flex flex-col justify-center px-5 pb-4 text-left sm:items-center sm:px-16 sm:text-center lg:items-start lg:pr-0 lg:pl-32 lg:text-start xl:pr-0 xl:pl-48">
        <H1>{title}</H1>
        <p className="mt-6 mb-10 text-xl whitespace-pre-line md:max-w-5/7 2xl:max-w-2/5">
          {subtitle}
        </p>
        <Link href="/contact">
          <Button styles="py-2.5 px-4">{cta}</Button>
        </Link>
      </div>
      <div className="relative h-[300px] w-full shrink-0 shadow-[0_0_32px_rgba(0,0,0,0.25)] sm:h-[400px] md:h-[500px] md:rounded-tl-3xl lg:h-[600px] lg:w-1/2 2xl:absolute 2xl:right-0 2xl:bottom-0 2xl:-z-10 2xl:h-[85%]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="-z-10 object-cover md:rounded-tl-3xl"
        />
      </div>
    </div>
  );
}

export default ClosingImageRight;

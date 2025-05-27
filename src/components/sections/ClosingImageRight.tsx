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
    <div className="relative flex min-h-screen w-full items-center px-5 pb-3 sm:px-16 lg:px-32 xl:px-48">
      <div className="flex flex-col items-center justify-center lg:items-start lg:text-start">
        <H1>{title}</H1>
        <p className="mt-6 mb-10 text-xl whitespace-pre-line lg:max-w-2/5">
          {subtitle}
        </p>
        <Link href="/contact">
          <Button styles="py-2.5 px-4">{cta}</Button>
        </Link>
      </div>
      <div className="absolute right-0 bottom-0 -z-10 h-[85%] w-full rounded-tl-3xl shadow-[0_0_32px_rgba(0,0,0,0.25)] lg:w-1/2">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="absolute h-full w-full object-cover md:rounded-tl-3xl"
        />
      </div>
    </div>
  );
}

export default ClosingImageRight;

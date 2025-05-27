import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { H2 } from "../Headings";

function MidSectionVertical({
  title,
  paragraph,
  imageUrl,
  imageAlt,
}: {
  title: string;
  paragraph: ReactNode;
  imageUrl: StaticImageData;
  imageAlt: string;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-16 px-5 py-40 sm:px-16 lg:flex-row lg:justify-between lg:px-32 xl:px-48">
      <div className="flex flex-col xl:max-w-3/7">
        <H2>{title}</H2>
        <p className="mt-6 whitespace-pre-line lg:text-lg">{paragraph}</p>
      </div>
      <div className="relative flex h-[600px] w-full items-center rounded-3xl shadow-[0_0_32px_rgba(0,0,0,0.25)] lg:max-w-[600px]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          className="absolute h-auto w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
}

export default MidSectionVertical;

import Image, { StaticImageData } from "next/image";
import { H2, H4 } from "../Headings";
import { CashIcon, ClockIcon, HammerIcon, MaterialsIcon } from "../Icons";

const icons = [HammerIcon, ClockIcon, MaterialsIcon, CashIcon];

function MidSectionCards({
  title,
  subtitle,
  benefits,
  imageUrl,
  imageAlt,
}: {
  title: string;
  subtitle: string;
  benefits: string[];
  imageUrl: StaticImageData;
  imageAlt: string;
}) {
  return (
    <div className="relative flex min-h-screen w-full flex-col-reverse justify-center gap-10 py-28 lg:flex-row lg:gap-0">
      <div className="relative h-[500px] w-full lg:h-[600px] lg:w-full lg:max-w-[600px] lg:rounded-r-3xl xl:max-w-[800px] 2xl:h-[650px]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="absolute -z-10 object-cover object-right shadow-[0_0_32px_rgba(0,0,0,0.25)] lg:rounded-r-3xl"
        />
      </div>
      <div className="flex flex-col items-start justify-center px-5 text-left sm:items-center sm:px-16 sm:text-center lg:items-end lg:pr-32 lg:pl-0 lg:text-end xl:pr-48">
        <H2>{title}</H2>
        <p className="mt-6 mb-10 text-xl whitespace-pre-line md:max-w-5/7">
          {subtitle}
        </p>
        <div className="flex w-full flex-col items-center justify-between gap-5 sm:grid sm:w-auto sm:grid-cols-2 sm:place-items-center lg:gap-7 2xl:place-items-end">
          {benefits.map((text, i) => (
            <div
              key={i}
              className="flex h-[100px] w-full items-center justify-between rounded-3xl bg-white px-5 text-left shadow-[0_0_32px_rgba(0,0,0,0.25)] sm:w-[270px] sm:py-8"
            >
              <H4>{text}</H4>
              <div className="size-12 flex-shrink-0 lg:size-14">
                {icons[i]()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MidSectionCards;

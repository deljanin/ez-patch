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
    <div className="relative flex min-h-screen w-full flex-col-reverse justify-center py-28 pr-5 sm:pr-16 lg:flex-row lg:pr-32 xl:pr-48">
      <div className="relative h-[700px] w-full rounded-br-3xl lg:w-full">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="absolute -z-10 object-cover shadow-[0_0_32px_rgba(0,0,0,0.25)] md:rounded-r-3xl"
        />
      </div>
      <div className="flex flex-col items-center justify-center lg:items-end lg:text-end">
        <H2>{title}</H2>
        <p className="mt-6 mb-10 text-xl whitespace-pre-line lg:max-w-5/7">
          {subtitle}
        </p>
        <div className="flex flex-col items-center gap-7 lg:grid lg:grid-cols-2 lg:grid-rows-2">
          {benefits.map((text, i) => (
            <div
              key={i}
              className="flex h-[100px] w-[270px] items-center justify-between rounded-3xl bg-white px-5 py-8 text-left shadow-[0_0_32px_rgba(0,0,0,0.25)]"
            >
              <H4>{text}</H4>
              {icons[i]()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MidSectionCards;

"use client";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export function BeforeAfter({
  before,
  after,
}: {
  before: StaticImageData;
  after: StaticImageData;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const t = useTranslations("HomePage.BeforeAfter");

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX, rect);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      handleMove(touch.clientX, rect);
    }
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  return (
    <div
      className="relative w-full rounded-3xl px-5 py-28 sm:grid-cols-2 sm:px-16 lg:grid-cols-3 lg:px-32 xl:px-48 2xl:px-64"
      onMouseUp={handleInteractionEnd}
      onTouchEnd={handleInteractionEnd}
    >
      <div
        className="relative m-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)] select-none md:w-[80%]"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
      >
        <Image
          placeholder="blur"
          alt="Huston car window tinting"
          fill
          src={after}
          className="pointer-events-none rounded-3xl"
        />
        <div className="absolute top-0 right-0 rounded-tr-3xl rounded-bl-3xl bg-white px-4 py-2 font-bold">
          {t("After")}
        </div>
        <div
          className="absolute top-0 right-0 left-0 m-auto aspect-[4/3] w-full overflow-hidden rounded-3xl select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            placeholder="blur"
            fill
            alt="Huston car window tinting"
            src={before}
          />
          <div className="absolute top-0 left-0 rounded-tl-3xl rounded-br-3xl bg-white px-3 py-2 font-bold">
            {t("Before")}
          </div>
        </div>
        <div
          className="absolute top-0 bottom-0 w-2 cursor-ew-resize bg-[#303030]"
          style={{
            left: `calc(${sliderPosition}% - 4px)`,
          }}
        >
          <div className="absolute top-[calc(50%-1.25rem)] left-[calc(50%-1.25rem)] flex h-10 w-10 items-center justify-center rounded-full bg-[#303030]">
            <Image
              alt="Car window tinting in Houston"
              width={30}
              height={30}
              src="/images/home/before-after/slider.svg"
              className="pointer-events-none rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

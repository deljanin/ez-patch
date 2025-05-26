"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { H2 } from "@/components/Headings";
export default function FAQ() {
  const t = useTranslations("HomePage.FAQs");
  const [index, setIndex] = useState(-1);
  const qa = useTranslations(`HomePage.FAQs.List`);

  return (
    <section className="flex min-h-screen w-full flex-col items-center gap-20 px-5 pt-14">
      <H2 styles="whitespace-pre-line text-center">{t("Title")}</H2>
      <div className="w-full md:w-3/4 xl:w-1/2">
        {[...Array(5)].map((_, i) => {
          return (
            <div
              key={i}
              className="relative mb-10 select-none"
              onMouseDown={() => {
                if (index === i) {
                  setIndex(-1);
                } else {
                  setIndex(i);
                }
              }}
            >
              <div
                className={`w-full cursor-pointer rounded-2xl bg-white p-5 text-lg shadow-[0px_0px_30px_0_rgba(0,0,0,0.25)]`}
              >
                <div className="flex items-center justify-between gap-3.5">
                  <span className="">{qa(`Question${i + 1}`)}</span>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      index === i
                        ? "rotate-135 transition-transform duration-300"
                        : "transition-transform duration-300"
                    }
                  >
                    <path
                      d="M18.5714 11.9286H11.4286V19.0714C11.4286 19.4503 11.2781 19.8137 11.0102 20.0816C10.7422 20.3495 10.3789 20.5 10 20.5C9.62112 20.5 9.25776 20.3495 8.98985 20.0816C8.72194 19.8137 8.57143 19.4503 8.57143 19.0714V11.9286H1.42857C1.04969 11.9286 0.686328 11.7781 0.418419 11.5102C0.15051 11.2422 0 10.8789 0 10.5C0 10.1211 0.15051 9.75776 0.418419 9.48985C0.686328 9.22194 1.04969 9.07143 1.42857 9.07143H8.57143V1.92857C8.57143 1.54969 8.72194 1.18633 8.98985 0.918419C9.25776 0.650509 9.62112 0.5 10 0.5C10.3789 0.5 10.7422 0.650509 11.0102 0.918419C11.2781 1.18633 11.4286 1.54969 11.4286 1.92857V9.07143H18.5714C18.9503 9.07143 19.3137 9.22194 19.5816 9.48985C19.8495 9.75776 20 10.1211 20 10.5C20 10.8789 19.8495 11.2422 19.5816 11.5102C19.3137 11.7781 18.9503 11.9286 18.5714 11.9286Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 md:text-lg ${index === i ? "mt-2 max-h-[300px]" : "max-h-0"} `}
                >
                  <div className="">{qa(`Answer${i + 1}`)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

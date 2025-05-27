import Image from "next/image";
import React from "react";
import LogoFooter from "/public/images/LogoFooter.png";
import { useMessages, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

function Footer() {
  const t = useTranslations("Layout.Footer");
  const messages = useMessages();
  const navKeys = Object.keys(messages.Layout.Footer.Navigation.Links);
  const servicesKeys = Object.keys(messages.Layout.Footer.Services.Links);

  return (
    <div className="footer flex w-full flex-col items-center justify-end gap-16 self-stretch bg-white p-10 shadow-[0_-4px_32px_rgba(0,0,0,0.25)]">
      <div className="flex w-full items-start justify-between px-48">
        <Image src={LogoFooter} width={218} height={139} alt={t("Logo")} />
        <div className="flex flex-col items-start gap-2.5">
          <div className="navigation text-2xl font-bold underline">
            {t("Navigation.Title")}
          </div>
          <ul className="flex flex-col items-start gap-2.5">
            {navKeys.map((key) => (
              <li key={key} className="group">
                <Link
                  href={t(`Navigation.Links.${key}.Link`)}
                  className="group-hover:text-red-main group-hover:after:bg-red-main relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:content-[''] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                >
                  {t(`Navigation.Links.${key}.Text`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-2.5">
          <div className="services self-stretch text-2xl font-bold underline">
            {t("Services.Title")}
          </div>
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-4">
            {servicesKeys.map((key) => (
              <li key={key} className="group">
                <Link
                  href={t(`Services.Links.${key}.Link`)}
                  className="group-hover:text-red-main group-hover:after:bg-red-main relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:content-[''] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                >
                  {t(`Services.Links.${key}.Text`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-2.5">
          <div className="working_hours self-stretch text-2xl font-bold underline">
            {t("WorkingHours.Title")}
          </div>
          <div className="self-stretch">
            {t.rich("WorkingHours.Info", {
              newline: () => <br />,
            })}
          </div>
        </div>
        <div className="flex flex-col items-start gap-2.5">
          <div className="contact-1 self-stretch text-2xl font-bold underline">
            {t("Contact.Title")}
          </div>
          <div className="group">
            <Link
              href={t("Contact.GetEstimate.Link")}
              className="group-hover:text-red-main group-hover:after:bg-red-main relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:content-[''] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
            >
              {t("Contact.GetEstimate.Text")}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full items-start justify-between px-48">
        <div className="flex w-full flex-shrink-0 items-center justify-between">
          <div className="">{t("BottomBar.Copyright")}</div>
          <div className="flex items-center gap-8">
            <div className="group">
              <Link
                href={t("BottomBar.Privacy.Link")}
                className="group-hover:text-red-main group-hover:after:bg-red-main relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:content-[''] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
              >
                {t("BottomBar.Privacy.Text")}
              </Link>
            </div>
            <div className="group">
              <a
                href={t("BottomBar.Developer.Link")}
                target="_blank"
                className="group-hover:text-red-main group-hover:after:bg-red-main relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:content-[''] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
              >
                {t("BottomBar.Developer.Text")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "@/i18n/routing";
import Image from "next/image";
import LogoNav from "/public/images/LogoNav.png";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations, useMessages } from "next-intl";
import Button from "./Button";
import { useLenis } from "lenis/react";

function Navbar() {
  const lenis = useLenis();
  const [isPending, startTransition] = useTransition();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenMobileMenuServices, setIsOpenMobileMenuServices] =
    useState(false);
  const localeActive = useLocale();
  const router = useRouter();
  const path = usePathname();
  const t = useTranslations("Layout.Navbar.Links");
  const cta = useTranslations("Layout.Navbar.CTA");
  const messages = useMessages();
  const keys = Object.keys(messages.Layout.Navbar.Links);
  const servicesDropdown = Object.keys(
    messages.Layout.Navbar.Links.Services.ServicesDropdown,
  );

  function changeLanguage() {
    let nextLocale;
    if (localeActive === "fr") {
      nextLocale = "en";
    } else {
      nextLocale = "fr";
    }
    startTransition(() => {
      router.replace(`/${nextLocale}${path.trimStart()}`);
    });
  }
  return (
    <>
      {/* Mobile menu */}
      <div
        className={`${isOpenMobileMenu ? "translate-x-0" : "translate-x-full"} bg-white-main fixed top-0 right-0 left-0 z-50 flex h-screen w-full transform flex-col items-end justify-center px-5 shadow-[0_0_32px_rgba(0,0,0,0.25)] transition-transform duration-500 sm:px-16 md:hidden`}
      >
        <div className="flex h-full flex-col items-end justify-between py-5">
          <div />
          <div className="flex flex-col items-end justify-evenly gap-5 text-2xl">
            {keys.map((key) => {
              const link = t(`${key}.Link`);
              if (key !== "Services") {
                return (
                  <Link
                    key={key}
                    href={link}
                    scroll={false}
                    onClick={() => {
                      setIsOpenMobileMenu(!isOpenMobileMenu);
                    }}
                    className=""
                  >
                    {t(`${key}.Text`)}
                  </Link>
                );
              } else {
                return (
                  <div
                    key={key}
                    className="flex flex-col items-end justify-evenly gap-4"
                  >
                    <button
                      onClick={() => {
                        setIsOpenMobileMenuServices(!isOpenMobileMenuServices);
                      }}
                    >
                      {t(`${key}.Text`)}
                    </button>
                    {isOpenMobileMenuServices && (
                      <div className="flex flex-col items-end justify-evenly gap-2">
                        {servicesDropdown.map((service) => {
                          const serviceText = t(
                            `Services.ServicesDropdown.${service}.Text`,
                          );
                          const serviceLink = t(
                            `Services.ServicesDropdown.${service}.Link`,
                          );
                          return (
                            <Link
                              key={service}
                              href={serviceLink}
                              className="text-xl"
                              onClick={() => {
                                setIsOpenMobileMenu(!isOpenMobileMenu);
                              }}
                            >
                              {serviceText}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </div>
          <button
            className="text-2xl"
            onClick={changeLanguage}
            disabled={isPending}
          >
            {localeActive === "fr" ? "EN" : "FR"}
          </button>
        </div>
      </div>
      <nav className="fixed top-0 z-100 flex h-16 w-full flex-shrink-0 items-center justify-between overflow-visible bg-white px-5 shadow-[0_0_15px_0_rgba(0,0,0,0.25)] sm:px-16 lg:px-32 xl:px-48">
        <Link href="/">
          <Image src={LogoNav} alt="Logo" width={180} height={40} />
        </Link>
        {/* Desktop menu */}
        <ul className="relative hidden items-center md:flex md:gap-4 xl:gap-10 xl:text-lg">
          {keys.map((key) => {
            const link = t(`${key}.Link`);
            const scrollLink = link.replace("/", "");
            if (key !== "Services") {
              return (
                <li key={key} className="group relative">
                  <Link
                    href={link}
                    onClick={() => {
                      lenis?.scrollTo(scrollLink);
                    }}
                    className="group-hover:text-red-main group-hover:after:bg-red-main relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:content-[''] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    {t(`${key}.Text`)}
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={key} className="group relative flex h-16 items-center">
                  <Link
                    href={link}
                    onClick={() => lenis?.scrollTo(scrollLink)}
                    className="group-hover:text-red-main group-hover:after:bg-red-main relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:content-[''] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
                  >
                    {t(`${key}.Text`)}
                  </Link>

                  <ul className="absolute top-full -left-1/2 hidden w-[450px] grid-cols-2 gap-x-3 gap-y-2 rounded-b-md bg-white p-5 shadow-[0_24px_15px_0_rgba(0,0,0,0.1)] group-hover:grid hover:grid">
                    {servicesDropdown.map((service) => {
                      const serviceText = t(
                        `Services.ServicesDropdown.${service}.Text`,
                      );
                      const serviceLink = t(
                        `Services.ServicesDropdown.${service}.Link`,
                      );
                      return (
                        <li key={service} className="">
                          <Link
                            href={serviceLink}
                            className="hover:text-red-main block cursor-pointer transition-all duration-200"
                            onClick={() =>
                              setIsOpenMobileMenu(!isOpenMobileMenu)
                            }
                          >
                            {serviceText}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
          })}
          <div>
            <Link href={cta("Link")}>
              <Button type="button">{cta("Text")}</Button>
            </Link>
          </div>
          <div className="group">
            <button
              className="group-hover:text-red-main group-hover:after:bg-red-main relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:content-[''] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
              onClick={changeLanguage}
              disabled={isPending}
            >
              {localeActive === "fr" ? "EN" : "FR"}
            </button>
          </div>
        </ul>
        {/* Mobile menu */}
        <div className="flex items-center gap-5 md:hidden">
          {/* <button
            className="group-hover:text-red-main group-hover:after:bg-red-main relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:content-[''] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
            onClick={changeLanguage}
            disabled={isPending}
          >
            {localeActive === "fr" ? "EN" : "FR"}
          </button> */}
          <button
            className="mr-2 block cursor-pointer"
            onClick={() => {
              console.log(isOpenMobileMenu);
              setIsOpenMobileMenu(!isOpenMobileMenu);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="3 7 17 11"
            >
              <path
                fill="black"
                d="M3 8V7h17v1zm17 4v1H3v-1zM3 17h17v1H3z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

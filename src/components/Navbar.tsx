"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "@/i18n/routing";
import Image from "next/image";
import LogoNav from "/public/images/LogoNav.png";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations, useMessages } from "next-intl";
import Button from "./Button";

function Navbar() {
  const [isPending, startTransition] = useTransition();
  // const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const localeActive = useLocale();
  const router = useRouter();
  const path = usePathname();
  const t = useTranslations("Layout.Navbar.Links");
  const cta = useTranslations("Layout.Navbar.CTA");
  const messages = useMessages();
  const keys = Object.keys(messages.Layout.Navbar.Links);

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
    <nav className="fixed top-0 z-100 flex h-16 w-full flex-shrink-0 items-center justify-between bg-white px-5 shadow-[0_0_15px_0_rgba(0,0,0,0.25)] sm:px-16 lg:px-32 xl:px-48">
      <Link href="/">
        <Image src={LogoNav} alt="Logo" width={180} height={40} />
      </Link>
      <ul className="flex items-center gap-8">
        {keys.map((key) => (
          <li key={key} className="group">
            <Link
              href={t(`${key}.Link`)}
              className="group-hover:text-red-main group-hover:after:bg-red-main relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:content-[''] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
            >
              {t(`${key}.Text`)}
            </Link>
          </li>
        ))}
        <li>
          <Link href={cta("Link")}>
            <Button type="button">{cta("Text")}</Button>
          </Link>
        </li>
        <li className="group">
          <button
            className="group-hover:text-red-main group-hover:after:bg-red-main relative cursor-pointer transition-all after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:content-[''] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
            onClick={changeLanguage}
            disabled={isPending}
          >
            {localeActive === "fr" ? "EN" : "FR"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import ContactForm from "@/components/ContactFrom";
import { H2, H3 } from "@/components/Headings";
import { useTranslations } from "next-intl";

function Contact() {
  const t = useTranslations("HomePage.Contact");

  return (
    <div
      id="contact"
      className="flex w-full items-center justify-center px-5 py-20 sm:px-16 lg:px-32 xl:px-48"
    >
      <div className="flex w-full flex-col items-center justify-center gap-10 rounded-3xl bg-[linear-gradient(180deg,_#454545_50%,_#252525_100%)] pt-5 shadow-[0px_0px_32px_0px_rgba(0,0,0,0.75)] sm:px-5 sm:py-10 md:px-10 md:py-16 lg:px-14 lg:py-20 xl:px-20 xl:py-24 2xl:px-32 2xl:py-10">
        <H2 styles="text-center md:text-left text-white">{t("Title")}</H2>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-0">
          <div className="flex flex-col px-4 text-white">
            <H3 styles="md:text-4xl">{t("Subtitle")}</H3>
            <ol className="text:lg w-full list-outside list-decimal pl-5 whitespace-pre-line md:text-xl 2xl:max-w-2/3">
              <li className="my-2 py-2 font-extralight lg:my-4">
                <b className="font-bold">{t("Step1")}</b>
                {"\n"}
                {t("Step1Description")}
              </li>
              <li className="my-2 py-2 font-extralight lg:my-4">
                <b className="font-bold">{t("Step2")}</b>
                {"\n"}
                {t("Step2Description")}
              </li>
              <li className="my-2 py-2 font-extralight lg:my-4">
                <b className="font-bold">{t("Step3")}</b>
                {"\n"}
                {t("Step3Description")}
              </li>
              <li className="my-2 py-2 font-extralight lg:my-4">
                <b className="font-bold">{t("Step4")}</b>
                {"\n"}
                {t("Step4Description")}
              </li>
            </ol>
          </div>
          <ContactForm shadow={false} />
        </div>
      </div>
    </div>
  );
}
export default Contact;

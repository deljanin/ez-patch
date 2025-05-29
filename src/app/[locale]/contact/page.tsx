import ContactForm from "@/components/ContactFrom";
import { H2, H3 } from "@/components/Headings";
import { useTranslations } from "next-intl";
function ContactPage() {
  const t = useTranslations("HomePage.Contact");

  return (
    <div
      id="contact"
      className="flex w-full items-center justify-center px-5 py-20 sm:px-16 lg:px-32 xl:px-48"
    >
      <div className="flex w-full flex-col items-center justify-center gap-10 pt-5 sm:py-10 md:py-16 lg:py-20 xl:py-24 2xl:py-10">
        <H2 styles="text-center md:text-left">{t("Title")}</H2>
        <div className="flex flex-col gap-8 lg:flex-row 2xl:gap-0">
          <div className="flex flex-col">
            <H3 styles="md:text-4xl">{t("Subtitle")}</H3>
            <ol className="text:lg w-full list-outside list-decimal pl-5 whitespace-pre-line md:text-xl 2xl:max-w-2/3">
              <li className="py-2 font-extralight">
                <b className="font-bold">{t("Step1")}</b>
                {"\n"}
                {t("Step1Description")}
              </li>
              <li className="py-2 font-extralight">
                <b className="font-bold">{t("Step2")}</b>
                {"\n"}
                {t("Step2Description")}
              </li>
              <li className="py-2 font-extralight">
                <b className="font-bold">{t("Step3")}</b>
                {"\n"}
                {t("Step3Description")}
              </li>
              <li className="py-2 font-extralight">
                <b className="font-bold">{t("Step4")}</b>
                {"\n"}
                {t("Step4Description")}
              </li>
            </ol>
            <H3 styles="mt-4 mb-1">{t("ContactPage.Title")}</H3>
            <ul className="font-extralight">
              <li className="my-1">
                {t.rich("ContactPage.Regions.Region1", {
                  bold: (chunks) => <b className="font-bold">{chunks}</b>,
                })}
              </li>
              <li className="my-1">
                {t.rich("ContactPage.Regions.Region2", {
                  bold: (chunks) => <b className="font-bold">{chunks}</b>,
                })}
              </li>
              <li className="my-1">
                {t.rich("ContactPage.Regions.Region3", {
                  bold: (chunks) => <b className="font-bold">{chunks}</b>,
                })}
              </li>
              <li className="my-1">
                {t.rich("ContactPage.Regions.Region4", {
                  bold: (chunks) => <b className="font-bold">{chunks}</b>,
                })}
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

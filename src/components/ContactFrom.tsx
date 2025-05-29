"use client";
import Button from "@/components/Button";
import { useEffect, useRef, useState } from "react";
import { useTranslations, useMessages } from "next-intl";
import { Formik, Field, Form, ErrorMessage, useFormikContext } from "formik";
import * as yup from "yup";
import { Link } from "@/i18n/routing";

interface FormValues {
  extra: string;
  name: string;
  phoneNumber: string;
  email: string;
  services: string[];
  city: string;
  message?: string;
}

function ContactForm({ shadow = true }: { shadow?: boolean }) {
  const t = useTranslations("HomePage.Contact.Form");
  const initialValues: FormValues = {
    extra: "",
    name: "",
    phoneNumber: "",
    email: "",
    services: [],
    city: "",
    message: "",
  };

  const [disabled, setDisabled] = useState(false);
  const yupSchema = yup.object().shape({
    name: yup
      .string()
      .max(40, t("Fields.NameError"))
      .required(t("Fields.NameErrorRequired")),
    email: yup
      .string()
      .required(t("Fields.EmailErrorRequired"))
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        t("Fields.EmailError"),
      ),
    phoneNumber: yup.string().required(t("Fields.PhoneErrorRequired")),
    city: yup.string().required(t("Fields.CityErrorRequired")),
    services: yup
      .array()
      .of(yup.string())
      .min(1, t("Fields.ServiceErrorRequired")), // requires at least one selected
  });

  const onSubmit = async (
    values: FormValues,
    actions: { resetForm: () => void },
  ) => {
    setDisabled(true);
    await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).finally(() => {
      setDisabled(false);
      actions.resetForm();
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yupSchema}
      onSubmit={onSubmit}
    >
      <Form
        className={`flex w-full shrink-0 flex-col gap-4 rounded-3xl bg-white px-6 py-6 md:px-10 lg:w-1/2 xl:px-20 2xl:w-[600px] ${shadow ? "shadow-[0px_0px_32px_0px_rgba(0,0,0,0.25)]" : ""}`}
      >
        <Field type="text" name="extra" className="hidden" />
        <div id="nameInput">
          <label htmlFor="name" className="text-lg">
            {t("Fields.Name")}
          </label>
          <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:content-['']">
            <Field
              type="text"
              name="name"
              id="name"
              placeholder={t("Fields.NamePlaceholder")}
              className="w-full py-1 text-black placeholder-[rgba(0,0,0,0.75)] caret-black outline-none"
            />
          </div>
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-main mt-1"
          />
        </div>
        <div id="phoneInput">
          <label htmlFor="phone" className="text-lg">
            {t("Fields.Phone")}
          </label>
          <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:content-['']">
            <FormatPhoneField
              name="phoneNumber"
              placeholder={t("Fields.PhonePlaceholder")}
            />
          </div>
          <ErrorMessage
            name="phoneNumber"
            component="div"
            className="text-red-main mt-1"
          />
        </div>
        <div id="emailInput">
          <label htmlFor="email" className="text-lg">
            {t("Fields.Email")}
          </label>
          <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:content-['']">
            <Field
              type="email"
              name="email"
              id="email"
              placeholder={t("Fields.EmailPlaceholder")}
              className="w-full py-1 text-black placeholder-[rgba(0,0,0,0.75)] caret-black outline-none"
            />
          </div>
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-main mt-1"
          />
        </div>
        <div id="serviceInput">
          <label htmlFor="email" className="text-lg">
            {t("Fields.Service")}
          </label>
          <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:content-['']">
            <ServiceDropdown />
          </div>
          <ErrorMessage
            name="services"
            component="div"
            className="text-red-main mt-1"
          />
        </div>
        <div id="cityInput">
          <label htmlFor="city" className="text-lg">
            {t("Fields.City")}
          </label>
          <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:content-['']">
            <Field
              type="text"
              name="city"
              id="city"
              placeholder={t("Fields.CityPlaceholder")}
              className="w-full py-1 text-black placeholder-[rgba(0,0,0,0.75)] caret-black outline-none"
            />
          </div>
          <ErrorMessage
            name="city"
            component="div"
            className="text-red-main mt-1"
          />
        </div>
        <div id="messageInput">
          <label htmlFor="message" className="text-lg">
            {t("Fields.JobDetails")}
          </label>
          <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black after:content-['']">
            <Field
              component="textarea"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder={t("Fields.JobDetailsPlaceholder")}
              className="w-full py-1 text-black placeholder-[rgba(0,0,0,0.75)] caret-black outline-none"
            />
          </div>
          <span className="text-sm opacity-30 transition-all duration-300 hover:opacity-80">
            {/* {t("PrivacyPolicyText1")} */}
            <Link href="/privacy-policy" className="underline">
              {/* {t("PrivacyPolicyText2")} */}
            </Link>
          </span>
        </div>
        <div id="submit">
          <Button
            type="submit"
            styles={"max-w-[180px] px-3 py-2"}
            disabled={disabled}
          >
            {t("CTA")}
          </Button>
        </div>
      </Form>
    </Formik>
  );
}

export default ContactForm;

function ServiceDropdown() {
  const messages = useMessages();
  const { values } = useFormikContext<{ services: string[] }>();
  const services = Object.values(
    messages.HomePage.Contact.Form.Fields.ProvidedServices,
  ) as string[];

  const selected = values.services;
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full py-2 pr-8 text-left"
      >
        {selected.length > 0 ? selected.join(", ") : "Select services"}
        <svg
          width="20"
          height="11"
          className={`absolute top-4 right-2 ${isOpen ? "fill-red-main rotate-180" : "fill-black"}`}
          viewBox="0 0 20 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.9472 0L19.5 1.636L11.0372 10.5468C10.9016 10.6904 10.7403 10.8044 10.5627 10.8822C10.3851 10.96 10.1946 11 10.0022 11C9.80982 11 9.61933 10.96 9.44171 10.8822C9.26409 10.8044 9.10284 10.6904 8.96723 10.5468L0.5 1.636L2.05281 0.001543L10 8.36493L17.9472 0Z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full rounded-md border border-gray-200 bg-white shadow-lg">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-red-main rotate-45"
            >
              <path d="M18.5714 11.9286H11.4286V19.0714C11.4286 19.4503 11.2781 19.8137 11.0102 20.0816C10.7422 20.3495 10.3789 20.5 10 20.5C9.62112 20.5 9.25776 20.3495 8.98985 20.0816C8.72194 19.8137 8.57143 19.4503 8.57143 19.0714V11.9286H1.42857C1.04969 11.9286 0.686328 11.7781 0.418419 11.5102C0.15051 11.2422 0 10.8789 0 10.5C0 10.1211 0.15051 9.75776 0.418419 9.48985C0.686328 9.22194 1.04969 9.07143 1.42857 9.07143H8.57143V1.92857C8.57143 1.54969 8.72194 1.18633 8.98985 0.918419C9.25776 0.650509 9.62112 0.5 10 0.5C10.3789 0.5 10.7422 0.650509 11.0102 0.918419C11.2781 1.18633 11.4286 1.54969 11.4286 1.92857V9.07143H18.5714C18.9503 9.07143 19.3137 9.22194 19.5816 9.48985C19.8495 9.75776 20 10.1211 20 10.5C20 10.8789 19.8495 11.2422 19.5816 11.5102C19.3137 11.7781 18.9503 11.9286 18.5714 11.9286Z" />
            </svg>
          </button>
          <ul className="px-4 py-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-center gap-2 py-1.5">
                <Field
                  type="checkbox"
                  name="services"
                  value={service}
                  id={service}
                  className="accent-red-main"
                />
                <label htmlFor={service} className="text-smtext-lg">
                  {service}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function formatPhoneNumber(value: string) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
}

function FormatPhoneField({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) {
  const { values, setFieldValue } = useFormikContext<FormValues>();

  useEffect(() => {
    setFieldValue(name, formatPhoneNumber(values.phoneNumber));
  }, [values.phoneNumber, setFieldValue, name]);

  return (
    <Field
      type="text"
      name={name}
      id={name}
      placeholder={placeholder}
      className="w-full py-1 text-black placeholder-[rgba(0,0,0,0.75)] caret-black outline-none"
    />
  );
}

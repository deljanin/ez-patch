import { BeforeAfter } from "@/components/sections/BeforeAfter";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import WhyUs from "./sections/WhyUs";

import Before from "/public/images/home/before-after/before.jpg";
import After from "/public/images/home/before-after/after.jpg";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <BeforeAfter before={Before} after={After} />
      <FAQ />
      <Contact />
    </>
  );
}

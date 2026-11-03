"use client";
import { useEffect } from "react";
import { useCookieConsent } from "./CookieConsentProvider";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Work from "@/components/Work/Work";
import FixedMenu from "@/components/FixedMenu";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

const Home = () => {
  const { recaptchaConsent } = useCookieConsent();

  // implement locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!disposed) scroll = new LocomotiveScroll();
    };
    let disposed = false;
    let scroll;
    loadLocomotiveScroll();
    return () => {
      disposed = true;
      scroll?.destroy();
    };
  }, []);

  return (
    <>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      <Testimonial />
      <Contact recaptchaConsent={recaptchaConsent} />
      <Footer />
    </>
  );
};

export default Home;

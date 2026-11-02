"use client";
import { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

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
  const [recaptchaConsent, setRecaptchaConsent] = useState(false);

  // implement locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  useEffect(() => {
    setRecaptchaConsent(getCookieConsentValue("userCookieConsent") === "true");
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
      {/* temporary div */}
      {/* <div className="h-[3000px]"></div> */}

      {/* Cookie Consent Banner */}
      <CookieConsent
        location={null}
        disableStyles
        containerClasses="cookie-consent-banner"
        contentClasses="cookie-consent-content"
        buttonWrapperClasses="cookie-consent-actions"
        buttonClasses="cookie-consent-accept"
        declineButtonClasses="cookie-consent-decline"
        enableDeclineButton
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="userCookieConsent"
        ariaAcceptLabel="Accept cookies"
        ariaDeclineLabel="Decline cookies"
        expires={365} // Cookie expires in 1 year
        onAccept={() => setRecaptchaConsent(true)}
        onDecline={() => setRecaptchaConsent(false)}
      >
        Google reCAPTCHA protects the contact form and may process device data. {" "}
        <a href="/privacy-policy">Privacy</a>
      </CookieConsent>
    </>
  );
};

export default Home;

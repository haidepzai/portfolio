"use client";
import { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

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
  const translations = useTranslations("Cookies");
  const [recaptchaConsent, setRecaptchaConsent] = useState(false);

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
        buttonText={translations("accept")}
        declineButtonText={translations("decline")}
        cookieName="userCookieConsent"
        ariaAcceptLabel={translations("acceptLabel")}
        ariaDeclineLabel={translations("declineLabel")}
        expires={365} // Cookie expires in 1 year
        onAccept={() => setRecaptchaConsent(true)}
        onDecline={() => setRecaptchaConsent(false)}
      >
        {translations("notice")}{" "}
        <Link href="/privacy-policy">{translations("privacy")}</Link>
      </CookieConsent>
    </>
  );
};

export default Home;

"use client";
import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";

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
  // implement locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
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
      <Contact />
      <Footer />
      {/* temporary div */}
      {/* <div className="h-[3000px]"></div> */}

      {/* Cookie Consent Banner */}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="userCookieConsent"
        style={{ background: "#2B373B", color: "#fff", fontSize: "12px" }}
        buttonStyle={{ background: "#7edad2", color: "#fff", fontSize: "12px", borderRadius: "5px" }}
        declineButtonStyle={{
          background: "#FF5733",
          color: "#fff",
          fontSize: "12px",
        }}
        expires={365} // Cookie expires in 1 year
      >
        This website uses cookies to enhance your browsing experience.{" "}
        <a
          href="/privacy-policy"
          style={{ color: "#7edad2", textDecoration: "underline" }}
        >
          Learn more
        </a>
      </CookieConsent>
    </>
  );
};

export default Home;

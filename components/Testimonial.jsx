"use client";
import React, { useCallback, useState } from "react";
import { GrCertificate } from "react-icons/gr";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

import AnimatedText from "./AnimatedText";
import Image from "next/image";

// sample data for projects with various categories

const slides = [
  {
    img: "/assets/testimonial/isaqb.png",
    name: "Certified Professional for Software Architecture – Foundation Level (CPSA-F®)",
    date: "September 2021",
    message:
      "As a certified software architect, I have a deep understanding of software architecture and design principles. I can design and implement software solutions that meet the requirements of stakeholders and are scalable, maintainable, and secure.",
  },
  {
    img: "/assets/testimonial/scrum.png",
    name: "Professional Scrum Master™ I (PSM I)",
    date: "April 2022",
    message:
      "Having work experience as a Scrum Master, I have a deep understanding of the Scrum framework and can help teams to deliver high-quality products by following Scrum practices.",
  },
  {
    img: "/assets/testimonial/azure.png",
    name: "Microsoft Certified: Azure Fundamentals",
    date: "February 2022",
    message:
      "I have a good understanding of cloud concepts, Azure services, security, privacy, compliance, and trust, and can help organizations to leverage Azure services to meet their business needs.",
  },
  {
    img: "/assets/testimonial/google.png",
    name: "Google Ads Search Certification",
    date: "December 2020",
    message:
      "I have a good understanding of Google Ads Search and can help businesses to create and optimize search campaigns to reach their target audience and achieve their marketing goals.",
  },
  {
    img: "/assets/testimonial/aws.png",
    name: "AWS Certified Cloud Practitioner",
    date: "February 2024",
    message:
      "I have a good understanding of AWS services, security, and pricing, and can help organizations to leverage AWS cloud services to build scalable and cost-effective solutions.",
  },
  {
    img: "/assets/testimonial/linux.png",
    name: "Linux Professional Institute LPIC-1",
    date: "September 2024",
    message:
      "As a certified Linux professional, I have a good understanding of Linux operating systems, command-line, and shell scripting, and can help organizations to deploy and manage Linux servers.",
  },
];

const Testimonial = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  // state to store the active slide index
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="py-24 overflow-hidden">
      <div className="container mx-auto">
        <AnimatedText
          text="My Certifications"
          textStyles="h2 mb-[30px] xl:mb-[60px] text-center"
        />
        <div className="flex flex-col lg:flex-row gap-12">
          {/* slider info */}
          <div className="w-max xl:w-[600px] flex flex-col justify-center items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
            <GrCertificate className="text-9xl text-accent/20 leading-none mb-4" />
            <h3 className="h3 mb-2">{slides[activeSlide].name}</h3>
            <p className="mb-8 max-w-[360px]">{slides[activeSlide].message}</p>
            {/* slider controls */}
            <div className="flex gap-3 justify-center">
              <button
                onClick={handlePrevious}
                className="text-2xl bg-accent w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300"
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="text-2xl bg-accent w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          {/* slider */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            onSwiper={setSwiperRef}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)} // update the active sldie index
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full h-[200px] xl:h-[300px]"
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide key={index} className="h-full select-none">
                  <div className="w-full h-full flex items-end">
                    <div
                      className={`${
                        activeSlide === index
                          ? "w-[150px] h-[150px]"
                          : "w-[100px] h-[100px]"
                      } flex items-center justify-center overflow-hidden transition-all duration-500 relative mx-auto`}
                    >
                      <Image
                        src={slide.img}
                        className="object-cover"
                        fill
                        quality={100}
                        alt="certs"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

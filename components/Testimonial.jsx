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
import { useTranslations } from "next-intl";

// sample data for projects with various categories

const slides = [
  {
    id: "item1",
    img: "/assets/testimonial/isaqb.png",
    name: "Certified Professional for Software Architecture – Foundation Level (CPSA-F®)",
  },
  {
    id: "item2",
    img: "/assets/testimonial/scrum.png",
    name: "Professional Scrum Master™ I (PSM I)",
  },
  {
    id: "item3",
    img: "/assets/testimonial/azure.png",
    name: "Microsoft Certified: Azure Fundamentals",
  },
  {
    id: "item4",
    img: "/assets/testimonial/google.png",
    name: "Google Ads Search Certification",
  },
  {
    id: "item5",
    img: "/assets/testimonial/aws.png",
    name: "AWS Certified Cloud Practitioner",
  },
  {
    id: "item6",
    img: "/assets/testimonial/linux.png",
    name: "Linux Professional Institute LPIC-1",
  },
];

const Testimonial = () => {
  const translations = useTranslations("Certifications");
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
          text={translations("title")}
          textStyles="h2 mb-[30px] xl:mb-[60px] text-center"
        />
        <div className="flex flex-col lg:flex-row gap-12">
          {/* slider info */}
          <div className="w-full xl:w-[600px] flex flex-col justify-center items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
            <GrCertificate className="text-9xl text-accent/20 leading-none mb-4" />
            <div className="min-h-[260px] md:min-h-[280px] w-full flex flex-col items-center xl:items-start overflow-hidden">
              <h3 className="h3 mb-2 whitespace-normal break-words px-4 md:px-0 text-balance">
                {slides[activeSlide].name}
              </h3>
              <p className="mb-8 max-w-[360px] px-4 md:px-0 line-clamp-4 md:line-clamp-none">
                {translations(`items.${slides[activeSlide].id}.message`)}
              </p>
            </div>
            {/* slider controls */}
            <div className="flex gap-3 justify-center">
              <button
                aria-label={translations("previous")}
                onClick={handlePrevious}
                className="text-2xl bg-accent w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300"
              >
                <FiArrowLeft />
              </button>
              <button
                aria-label={translations("next")}
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
                      className={`${activeSlide === index
                          ? "w-[150px] h-[150px]"
                          : "w-[100px] h-[100px]"
                        } flex items-center justify-center overflow-hidden transition-all duration-500 relative mx-auto`}
                    >
                      <Image
                        src={slide.img}
                        className="object-cover"
                        fill
                        quality={100}
                        alt={slide.name}
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

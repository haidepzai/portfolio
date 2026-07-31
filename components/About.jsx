"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* image + shapes */}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              {/* shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/* image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px] flex items-end justify-center">
                <Image
                  src="/assets/about/hai.png"
                  alt=""
                  width={350}
                  height={478}
                  quality={100}
                  priotity="true"
                />
              </div>
              {/* rotating shape */}
              <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/assets/about/shape-1.svg"
                    width={160}
                    height={160}
                    alt=""
                  />
                </motion.div>
                <div className="absolute text-center text-white">
                  <div className="text-5xl font-bold leading-none">3+</div>
                  <div className="leading-none text-center">
                    Years <br /> of Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
            <div>
              <AnimatedText text="My name is Son Hai" textStyles="h2 mb-2" />
              <p className="text-lg">Software Developer, M.Sc.</p>
              {/* Mobile Image */}
              <div className="flex xl:hidden justify-center my-6">
                <div className="relative w-64 h-64">
                  {/* Accent circle background */}
                  <div className="w-full h-full rounded-full bg-accent absolute -left-3 -top-3 -z-10"></div>

                  {/* Image container with border and background */}
                  <div className="w-full h-full rounded-full border-4 border-white bg-[#e5f8f6] overflow-hidden">
                    <Image
                      src="/assets/about/hai.png"
                      alt="Son Hai"
                      width={256}
                      height={256}
                      className="object-cover w-full h-full"
                      quality={100}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
              A motivated, adaptable and responsible software engineer from
              Germany specializing in web development and machine learning.
              Experienced in developing web application for enterprises.
              Well-versed in numerous programming languages including
              TypeScript, Python, Java. Keen to learn new technologies.
              Confident to have the necessary skills and cultural knowledge to
              take the next step in my personal development.
            </p>
            {/* info items */}
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center">
              {/* item 1*/}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Location</div>
                <p>Stuttgart, Germany</p>
              </div>
              {/* item 2*/}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Phone</div>
                <p>+49 152 37349594</p>
              </div>
              {/* item 3*/}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Email</div>
                <p>sonhai.vu@gmx.de</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

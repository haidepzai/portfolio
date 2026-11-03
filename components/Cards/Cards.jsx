"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaAngular,
  FaNodeJs,
  FaDocker,
  FaJenkins,
  FaJava,
  FaVuejs,
  FaPython,
  FaBootstrap,
  FaGitSquare,
} from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { DiScrum } from "react-icons/di";

const journey = [
  // experience
  {
    id: "item1",
    type: "experience",

    logoUrl: "/assets/journey/experience/accenture.svg",
  },
  {
    id: "item2",
    type: "experience",

    logoUrl: "/assets/journey/experience/karcher.svg",
  },
  {
    id: "item3",
    type: "experience",

    logoUrl: "/assets/journey/experience/trumpf.svg",
  },
  {
    id: "item4",
    type: "experience",

    logoUrl: "/assets/journey/experience/qibitech.svg",
  },
  {
    id: "item5",
    type: "experience",

    logoUrl: "/assets/journey/experience/capgemini.svg",
  },
  {
    id: "item6",
    type: "experience",

    logoUrl: "/assets/journey/experience/bosch.svg",
  },
  {
    id: "item7",
    type: "experience",

    logoUrl: "/assets/journey/experience/antares.svg",
  },
  // education
  {
    id: "item8",
    type: "education",

    logoUrl: "/assets/journey/education/hdm.png",
  },
  {
    id: "item9",
    type: "education",

    logoUrl: "/assets/journey/education/tsukuba.svg",
  },
  {
    id: "item10",
    type: "education",

    logoUrl: "/assets/journey/education/hdm.png",
  },
  // skills
  {
    id: "item11",
    type: "skill",
    name: "HTML 5",
    icon: <FaHtml5 />,
  },
  {
    id: "item12",
    type: "skill",
    name: "CSS 3",
    icon: <FaCss3Alt />,
  },
  {
    id: "item13",
    type: "skill",
    name: "Java",
    icon: <FaJava />,
  },
  {
    id: "item14",
    type: "skill",
    name: "Git",
    icon: <FaGitSquare />,
  },
  {
    id: "item15",
    type: "skill",
    name: "Javascript",
    icon: <FaJs />,
  },
  {
    id: "item16",
    type: "skill",
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    id: "item17",
    type: "skill",
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    id: "item18",
    type: "skill",
    name: "Python",
    icon: <FaPython />,
  },
  {
    id: "item19",
    type: "skill",
    name: "Wordpress",
    icon: <FaWordpress />,
  },
  {
    id: "item20",
    type: "skill",
    name: "Angular",
    icon: <FaAngular />,
  },
  {
    id: "item21",
    type: "skill",
    name: "React.js",
    icon: <FaReact />,
  },
  {
    id: "item22",
    type: "skill",
    name: "Docker",
    icon: <FaDocker />,
  },
  {
    id: "item23",
    type: "skill",
    name: "Jenkins",
    icon: <FaJenkins />,
  },
  {
    id: "item24",
    type: "skill",
    name: "Bootstrap",
    icon: <FaBootstrap />,
  },
  {
    id: "item25",
    type: "skill",
    name: "Scrum",
    icon: <DiScrum />,
  },
  {
    id: "item26",
    type: "skill",
    name: "Vue.js",
    icon: <FaVuejs />,
  },
];

const Cards = () => {
  const translations = useTranslations("Journey");
  const localizedJourney = journey.map((item) => ({
    ...item,
    ...translations.raw(`items.${item.id}`),
  }));
  return (
    <>
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">
            {translations("experience")}
          </TabsTrigger>
          <TabsTrigger value="education">
            {translations("education")}
          </TabsTrigger>
          <TabsTrigger value="skills">{translations("skills")}</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {localizedJourney
                .filter((item) => item.type === "experience")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {localizedJourney
                .filter((item) => item.type === "education")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {localizedJourney
                .filter((item) => item.type === "skill")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;

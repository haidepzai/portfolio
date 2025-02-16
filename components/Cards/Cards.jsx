"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

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
    type: "experience",
    company: "Alfred Kärcher SE & Co. KG (Winnenden, Germany)",
    logoUrl: "/assets/journey/experience/karcher.svg",
    position: "API Management",
    duration: "Sept 2024 - Feb 2025",
    description:
      "Conception and evaluation of a customized API management strategy in Domain Driven Design. Analyzing the API landscape. Conducting Expert Interviews to identify current challenges in the development of APIs. Comparison of different API management tools.",
  },
  {
    type: "experience",
    company: "TRUMPF SE + Co. KG (Ditzingen, Germany)",
    logoUrl: "/assets/journey/experience/trumpf.svg",
    position: "R&D Software Engineer",
    duration: "Mar 2024 - Sep 2024",
    description:
      "Software Engineer in the Research & Development (R&D) department for TruConnect, a solution for the manufacturing industry that enables smart factory operations. Programming tools with .NET Framework for internal use. Support the development of an application (SmartView) for monitoring that provides detailed insight such as performance data and energy consumption in lasers and laser systems. Implementation of a 3D View of the machines using Angular and .NET.",
  },
  {
    type: "experience",
    company: "Qibitech Inc. (Tokyo, Japan)",
    logoUrl: "/assets/journey/experience/qibitech.svg",
    position: "Web Engineer",
    duration: "Aug 2023 - Mar 2024",
    description:
      "Support the team in the frontend development of HATS UI using Vue.js. HATS (Highly Autonomous Teleoperation Service) is a service that allows you to control robots remotely. It is a system targeting remote operation in the task execution of autonomous robots. HATS UI is a web application that provides various functions for the communication with robots. Server-side development with Ruby on Rails. Creating API documentation and Unit tests.",
  },
  {
    type: "experience",
    company: "Capgemini (Leinfelden-Echterdingen, Germany)",
    logoUrl: "/assets/journey/experience/capgemini.svg",
    position: "Software Engineer",
    duration: "Jul 2021 - Feb 2023",
    description:
      "Part of the Digital Customer Experience. Worked for a Customer Messaging System (CusMeS). Fullstack Development in an agile team (Scrum). Support in the development of a web application for an international automotive manufacturer (OEM) with Angular and Java Spring which enables mass messaging through different channels such as SMS, WhatsApp, E-Mails. E2E-Testing with Cypress.",
  },
  {
    type: "experience",
    company: "Robert Bosch GmbH (Stuttgart, Germany)",
    logoUrl: "/assets/journey/experience/bosch.svg",
    position: "Software Development",
    duration: "Sep 2020 - Feb 2021",
    description:
      "Software development in an agile and international development team. Development of tools in C# and .NET Framework. Development and extension of a web application in the intralogistics environment for transportation and stock management using Angular, HTML5 and CSS. Creation of REST APIs with ASP.NET. Documentation of the test results, as well as the creation of automated tests with Cypress. Preparation, configuration, implementation and evaluation of a comparison between the dynamic tour planning algorithm and the static tour planning algorithm for intralogistics tugger trains.",
  },
  {
    type: "experience",
    company: "antares Informations-Systeme GmbH (Geislingen, Germany)",
    logoUrl: "/assets/journey/experience/antares.svg",
    position: "Software Developer",
    duration: "Jan 2020 - Aug 2020",
    description:
      "Worked in the field of software development. Creation of standard software and website programming with HTML/CSS and JavaScript. Support in website optimization (SEO) with CMS (WordPress). Database development with PostgreSQL.",
  },
  // education
  {
    type: "education",
    institution: "Stuttgart Media University (Stuttgart, Germany)",
    logoUrl: "/assets/journey/education/hdm.png",
    qualification: "Computer Science and Media (M.Sc.)",
    duration: "Feb 2022 - Feb 2025",
    description:
      "Focus on IT project management (agile software development, team leadership, negotiation skills) and machine learning.",
  },
  {
    type: "education",
    institution: "University of Tsukuba (Tsukuba, Japan)",
    logoUrl: "/assets/journey/education/tsukuba.svg",
    qualification: "Master's Program in Informatics",
    duration: "Apr 2023 - Feb 2024",
    description:
      "Study Abroad. Taken courses: Visualization, Structured Data, Data Science, Adaptive Media Processing, Machine Learning",
  },
  {
    type: "education",
    institution: "Stuttgart Media University (Stuttgart, Germany)",
    logoUrl: "/assets/journey/education/hdm.png",
    qualification: "Computer Science and Media (B.Sc.)",
    duration: "Sep 2018 - Feb 2022",
    description:
      "Major subject: Web development and machine learning (data-mining, pattern recognition, NLP) Bachelor’s thesis: Computer vision-based feature extraction of printer-specific features for the classification of inkjet printers with machine learning.",
  },
  // skills
  {
    type: "skill",
    name: "HTML 5",
    icon: <FaHtml5 />,
    duration: "Learned in 2018",
    description:
      "Crafted structured web content using HTML effectively for modern websites, ensuring semanting markup and accessibility.",
  },
  {
    type: "skill",
    name: "CSS 3",
    icon: <FaCss3Alt />,
    duration: "Learned in 2018",
    description:
      "Styled responsive web pages using CSS, ensuring an appealing user experience with modern design principles and layouts.",
  },
  {
    type: "skill",
    name: "Java",
    icon: <FaJava />,
    duration: "Learned in 2018",
    description:
      "Using Java for backend development, I have developed applications for various purposes, including web applications and mobile applications.",
  },
  {
    type: "skill",
    name: "Git",
    icon: <FaGitSquare />,
    duration: "Learned in 2018",
    description:
      "Used Git for version control, ensuring collaboration and code management in software development projects.",
  },
  {
    type: "skill",
    name: "Javascript",
    icon: <FaJs />,
    duration: "Learned in 2019",
    description:
      "Implemented Javascript for interactivity, enhancing user engagement on websites through dynamic content and features.",
  },
  {
    type: "skill",
    name: "Node.js",
    icon: <FaNodeJs />,
    duration: "Learned in 2019",
    description:
      "Developed server-side applications using Node.js, ensuring high performance and scalability of the backend services.",
  },
  {
    type: "skill",
    name: "MongoDB",
    icon: <SiMongodb />,
    duration: "Learned in 2019",
    description:
      "Used MongoDB for database management, ensuring flexibility and scalability of the data storage for web applications.",
  },
  {
    type: "skill",
    name: "Python",
    icon: <FaPython />,
    duration: "Learned in 2020",
    description:
      "Developed Python applications for data analysis, machine learning, and deep learning, using libraries such as NumPy, Pandas, and Tensorflow.",
  },
  {
    type: "skill",
    name: "Wordpress",
    icon: <FaWordpress />,
    duration: "Learned in 2020",
    description:
      "Implemented Javascript for interactivity, enhancing user engagement on websites through dynamic content and features.",
  },
  {
    type: "skill",
    name: "Angular",
    icon: <FaAngular />,
    duration: "Learned in 2020",
    description:
      "Developed Angular applications for enterprise solutions, ensuring scalability and maintainability of the codebase.",
  },
  {
    type: "skill",
    name: "React.js",
    icon: <FaReact />,
    duration: "Learned in 2021",
    description:
      "Built dynamic user interfaces using React.js, optimizing component-driven design for seamless user experiences and efficiency.",
  },
  {
    type: "skill",
    name: "Docker",
    icon: <FaDocker />,
    duration: "Learned in 2021",
    description:
      "Used Docker for containerization, ensuring consistency and portability of the development environment.",
  },
  {
    type: "skill",
    name: "Jenkins",
    icon: <FaJenkins />,
    duration: "Learned in 2021",
    description:
      "Used Jenkins for continuous integration and continuous deployment, ensuring automation and efficiency in the development process.",
  },
  {
    type: "skill",
    name: "Bootstrap",
    icon: <FaBootstrap />,
    duration: "Learned in 2022",
    description:
      "Developed responsive web applications using Bootstrap, ensuring compatibility and consistency across different devices and screen sizes.",
  },
  {
    type: "skill",
    name: "Scrum",
    icon: <DiScrum />,
    duration: "Learned in 2022",
    description:
      "As a certified Scrum Master, I have worked in agile teams as a Scrum Master, ensuring the successful implementation of Scrum practices and principles.",
  },
  {
    type: "skill",
    name: "Vue.js",
    icon: <FaVuejs />,
    duration: "Learned in 2023",
    description:
      "Developed Vue.js applications for modern web development, ensuring high performance and user experience.",
  },
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
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
              {journey
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
              {journey
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

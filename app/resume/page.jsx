"use client";

import {
  FaHtml5,
  FaCss3,
  FaDocker,
  FaFigma,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing at nam eum numquam optio?",
  info: [
    { fieldName: "Name", fieldValue: "Douglas Santos" },
    { fieldName: "Phone", fieldValue: "+55 (61) 99924-2049" },
    { fieldName: "Experience", fieldValue: "4+ Years" },
    { fieldName: "Discord", fieldValue: "d0ug3253" },
    { fieldName: "Nationality", fieldValue: "Brazilian" },
    { fieldName: "Email", fieldValue: "dastechnologiescontato@gail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    {
      fieldName: "Languages",
      fieldValue: "Portuguese, English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing at nam eum numquam optio.",
  items: [
    {
      company: "DAS TECHNOLOGIES - Freelance",
      position: "Web Design and Front-end Developer",
      duration: "2020-2022",
    },
    {
      company: "Incript",
      position: "UX/UI and Front-end Developer Jr.",
      duration: "2022-2023",
    },
    {
      company: "Ministry of the Environment - Brazil",
      position: "UX/UI and Web Developer Jr.",
      duration: "2023-2024",
    },
    {
      company: "Anova Investimentos",
      position: "Front-end Developer",
      duration: "2024-current",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing at nam eum numquam optio.",
  items: [
    {
      institution: "Ceub",
      degree: "Technologist Systems Analysis and Development",
      duration: "2020-2024",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing at nam eum numquam optio.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaAngular />,
      name: "Angular.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiMysql />,
      name: "Mysql",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        className=" flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-[30px] text-center xl:text-left"
                >
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p> */}
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 cursor-pointer hover:bg-[#2a2a30] transition-all duration-300 border-2 border-transparent hover:border-accent/20"
                        >
                          <span className="text-accent font-semibold">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[90px] text-center lg:text-left hover:text-accent transition-colors duration-300">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <motion.span 
                              whileHover={{ scale: 1.5 }}
                              className="w-[6px] h-[6px] rounded-full bg-accent"
                            />
                            <p className="text-white/60 text-sm">
                              {item.company}
                            </p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </ScrollArea>
                </motion.div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-[30px] text-center xl:text-left"
                >
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p> */}
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 cursor-pointer hover:bg-[#2a2a30] transition-all duration-300 border-2 border-transparent hover:border-accent/20"
                        >
                          <span className="text-accent font-semibold">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[90px] text-center lg:text-left hover:text-accent transition-colors duration-300">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <motion.span 
                              whileHover={{ scale: 1.5 }}
                              className="w-[6px] h-[6px] rounded-full bg-accent"
                            />
                            <p className="text-white/60 text-sm">
                              {item.institution}
                            </p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </ScrollArea>
                </motion.div>
              </TabsContent>
              <TabsContent value="skills" className="w-full h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-[30px]"
                >
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p> */}
                  </div>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.skillList.map((skill, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          whileHover={{ 
                            y: -10,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group hover:bg-[#2a2a30] transition-all duration-300 border-2 border-transparent hover:border-accent/20">
                                <motion.div 
                                  className="text-6xl group-hover:text-accent transition-all duration-300"
                                  whileHover={{ 
                                    rotate: [0, -10, 10, -10, 0],
                                    scale: 1.2,
                                    transition: { duration: 0.5 }
                                  }}
                                >
                                  {skill.icon}
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent className="capitalize bg-accent text-primary font-semibold">
                                {skill.name}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </motion.li>
                      ))}
                    </ul>
                  </ScrollArea>
                </motion.div>
              </TabsContent>
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-[30px]"
                >
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p> */}
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          whileHover={{ 
                            x: 10,
                            transition: { duration: 0.2 }
                          }}
                          className="flex items-center justify-center xl:justify-start gap-4 p-3 rounded-lg hover:bg-[#232329] transition-all duration-300 cursor-pointer"
                        >
                          <span className="text-white/60 font-semibold min-w-[100px]">
                            {item.fieldName}:
                          </span>
                          <span className="text-base hover:text-accent transition-colors duration-300">{item.fieldValue}</span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;

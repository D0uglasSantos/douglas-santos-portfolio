"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

//components
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Saving Pets",
    description:
      "This is a project that began during my college with the aim of being presented at the end of the course by the discipline of Project Integrator, but throughout the project we saw that it could become something real and that would help pets truly.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "React.js",
      },
      {
        name: "Typescript",
      },
      {
        name: "Tailwindcss",
      },
      {
        name: "Docker",
      },
      {
        name: "Postgress",
      },
    ],
    image: "/assets/work/thumb1.svg",
    live: "https://saving-pets.vercel.app/",
    github: "https://github.com/D0uglasSantos/front-end-saving-pets",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Number Secret",
    description:
      "This is a project personal that I created for trainning Javascript and API's. Summarizing it is a this is a guessing game using voice recognition.",
    stack: [
      {
        name: "Html 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/thumb2.svg",
    live: "https://game-secret-number-seven.vercel.app/",
    github: "https://github.com/D0uglasSantos/game_secret_number",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Restaura",
    description: "Frontend of a restaurant landingpage.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "React.js",
      },
      {
        name: "Typescript",
      },
      {
        name: "Tailwindcss",
      },
      {
        name: "Framer Motion",
      },
    ],
    image: "/assets/work/thumb3.svg",
    live: "https://restaura-restaurant.vercel.app/",
    github: "https://github.com/D0uglasSantos/restaura",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Untitled UI",
    description:
      "Study project in tailwind css. It is an administration interface for any application.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "React.js",
      },
      {
        name: "Typescript",
      },
      {
        name: "Tailwindcss",
      },
      {
        name: "Framer Motion",
      },
    ],
    image: "/assets/work/thumb4.svg",
    live: "https://untlited-ui.vercel.app/",
    github: "https://github.com/D0uglasSantos/tailwind-next",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Dev Tech",
    description:
      "This is a study project with shopping cart features and adding, removing and updating purchase items. Not responsive yet!",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "React.js",
      },
      {
        name: "Typescript",
      },
      {
        name: "Tailwindcss",
      },
      {
        name: "Framer Motion",
      },
      {
        name: "Redux",
      },
    ],
    image: "/assets/work/thumb5.svg",
    live: "https://dev-tech-challenger.vercel.app/",
    github: "https://github.com/D0uglasSantos/dev-tech",
  },
  {
    num: "06",
    category: "Frontend",
    title: "Film Finder",
    description:
      "This is an API study project. A movie search site that shows the rating and other information about the desired movie.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "React.js",
      },
      {
        name: "Javascript",
      },
      {
        name: "CSS",
      },
    ],
    image: "/assets/work/thumb6.svg",
    live: "https://dev-tech-challenger.vercel.app/",
    github: "https://github.com/D0uglasSantos/dev-tech",
  },
  {
    num: "07",
    category: "Full Stack",
    title: "CrudLibrary",
    description:
      "This is a full stack project of a crud for managing customers in a bookstore.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Javascript",
      },
      {
        name: "Node",
      },
      {
        name: "Docker",
      },
      {
        name: "Mysql",
      },
      {
        name: "CSS",
      },
    ],
    image: "/assets/work/thumb7.svg",
    live: "#",
    github: "https://github.com/D0uglasSantos/CRUD-livraria",
  },
];

const Work = ({ props }) => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-2/4 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-2/4">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-2/4">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] realtive group flex justify-center items-center bg-pink-50/20"></div>
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="realtive w-full h-full">
                      <Image
                        src={project.image}
                        alt="Project Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

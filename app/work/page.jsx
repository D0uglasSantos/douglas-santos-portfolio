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
import { PROJECTS } from "@/lib/constants";

//components
import WorkSliderBtns from "@/components/WorkSliderBtns";

const Work = ({ props }) => {
  const [project, setProject] = useState(PROJECTS[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(PROJECTS[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full xl:w-2/4 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-2/4">
              <motion.div 
                key={project.num}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-8xl leading-none font-extrabold text-transparent text-outline"
              >
                {project.num}
              </motion.div>
              <motion.h2 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} project
              </motion.h2>
              <motion.p 
                key={project.description}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-white/60"
              >
                {project.description}
              </motion.p>
              <motion.ul 
                key={`stack-${project.num}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex gap-4 flex-wrap"
              >
                {project.stack.map((item, index) => {
                  return (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-xl text-accent bg-accent/10 px-3 py-1 rounded-md"
                    >
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </motion.li>
                  );
                })}
              </motion.ul>
              <div className="border border-white/20"></div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="flex items-center gap-4"
              >
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/20 transition-all duration-300 hover:scale-110">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-300 group-hover:rotate-45" />
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
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/20 transition-all duration-300 hover:scale-110">
                        <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-300 group-hover:rotate-[360deg]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="w-full xl:w-2/4"
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {PROJECTS.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl overflow-hidden">
                      {/* Overlay with gradient */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent z-10 group-hover:from-black/70 transition-all duration-300"></div>
                      
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt="Project Image"
                          fill
                          className="object-cover group-hover:scale-110 transition-all duration-500"
                        />
                      </div>
                      
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-300 z-20 pointer-events-none"></div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all hover:scale-110"
              />
            </Swiper>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

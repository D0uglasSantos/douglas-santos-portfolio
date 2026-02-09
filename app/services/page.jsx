"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { SERVICES } from "@/lib/constants";

const Services = ({ props }) => {
  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 50 
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + index * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          className="mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            My <span className="text-accent">Services</span>
          </h2>
          <p className="text-white/60 max-w-2xl">
            Specialized in creating exceptional digital experiences with modern technologies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {SERVICES.map((service, index) => {
            return (
              <motion.div
                key={index}
                custom={index}
                initial="initial"
                animate="animate"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="flex-1 flex flex-col justify-center gap-6 group p-8 rounded-xl bg-[#232329] hover:bg-[#2a2a30] transition-all duration-500 cursor-pointer"
              >
                <div className="w-full flex justify-between items-center">
                  <motion.div 
                    className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {service.num}
                  </motion.div>
                  <Link
                    href={service.href}
                    className="w-[55px] h-[55px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 hover:scale-110"
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>
                <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60 group-hover:text-white/80 transition-all duration-500">
                  {service.description}
                </p>
                <motion.div 
                  className="border-b border-white/20 w-full group-hover:border-accent/50 transition-all duration-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

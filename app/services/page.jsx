"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Front-end Developer",
    description:
      "Creation of intuitive and dynamic interfaces that ensure a smooth and engaging user experience. With attention to detail and a focus on performance, I transform designs into interactive websites and applications using the latest technologies.",
    href: "",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "Development of complete web solutions, from server and database structuring to the implementation of robust and scalable systems. I follow best development practices to deliver fast, secure, and efficient websites.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Designing user-centered digital experiences by combining aesthetics and functionality to create visually appealing and easy-to-use interfaces. With a user-focused approach, I develop designs that enhance usability and drive results.",
    href: "",
  },
];

const Services = ({ props }) => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[55px] h-[55px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>
                <h2 className="text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarked } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useContactForm } from "@/hooks/useContactForm";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+55 (61) 99924-2049" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "dastechnologiescontato@gmail.com",
  },
  { icon: <FaMapMarked />, title: "Address", description: "Brasília, DF" },
];

const Contact = () => {
  const { formData, handleChange, sendEmail } = useContactForm();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="xl:w-[54%] order-2 xl:order-none"
          >
            <form
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl hover:bg-[#2a2a30] transition-all duration-300"
            >
              <motion.h3 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="text-4xl text-accent"
              >
                Let's work together
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="text-white/60"
              >
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.name}
                  onChange={handleChange}
                  className="transition-all duration-300 focus:scale-105"
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="transition-all duration-300 focus:scale-105"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="transition-all duration-300 focus:scale-105"
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="transition-all duration-300 focus:scale-105"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                <Textarea
                  className="h-[200px] transition-all duration-300 focus:scale-105"
                  placeholder="Type your message here"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="sm" className="max-w-40" type="submit">
                  Send message
                </Button>
              </motion.div>
            </form>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  whileHover={{ 
                    x: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-center gap-6 cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                      transition: { duration: 0.5 }
                    }}
                    className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                  >
                    <div className="text-[28px]">{item.icon}</div>
                  </motion.div>
                  <div className="flex-1 max-w-full">
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <h3 className="text-xl overflow-hidden text-ellipsis whitespace-nowrap hover:text-accent transition-colors duration-300">
                      {item.description}
                    </h3>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

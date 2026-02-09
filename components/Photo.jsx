"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = ({ props }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
        }}
        className="relative"
      >
        {/* Glow effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"
          style={{
            width: "100%",
            height: "100%",
          }}
        />

        {/* Outer rotating circle */}
        <motion.svg
          className="w-[280px] xl:w-[500px] h-[280px] xl:h-[500px] absolute top-1/2 left-1/2"
          style={{ x: "-50%", y: "-50%" }}
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#ffa500"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* Middle circle */}
        <motion.svg
          className="w-[260px] xl:w-[470px] h-[260px] xl:h-[470px] absolute top-1/2 left-1/2"
          style={{ x: "-50%", y: "-50%" }}
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="240"
            stroke="#ffa500"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="10 20"
            animate={{
              rotate: [-120, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>

        {/* Inner decorative circle */}
        <motion.svg
          className="w-[240px] xl:w-[440px] h-[240px] xl:h-[440px] absolute top-1/2 left-1/2"
          style={{ x: "-50%", y: "-50%" }}
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="230"
            stroke="#ffa500"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5 15"
            animate={{
              rotate: [0, 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Image container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.8, duration: 0.5, ease: "easeOut" },
          }}
          whileHover={{ scale: 1.05 }}
          className="w-[250px] h-[240px] xl:w-[450px] xl:h-[440px] mix-blend-lighten relative z-10"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Douglas Photo"
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Corner accents */}
        <motion.div
          animate={{
            rotate: [0, 90, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-lg"
        />
        <motion.div
          animate={{
            rotate: [0, -90, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 5,
          }}
          className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-lg"
        />
      </motion.div>
    </div>
  );
};

export default Photo;

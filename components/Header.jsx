"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-8 xl:py-10 text-white sticky top-0 z-50 bg-primary/95 backdrop-blur-sm"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-4xl font-semibold cursor-pointer"
          >
            Douglas Santos<motion.span 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-accent inline-block"
            >
              .
            </motion.span>
          </motion.h1>
        </Link>
        {/* desktop nav & hire me button */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden xl:flex items-center gap-8"
        >
          <Nav />
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="hover:shadow-lg hover:shadow-accent/50 transition-all duration-300">
                Hire me
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* mobile nav */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="xl:hidden"
        >
          <MobileNav />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;

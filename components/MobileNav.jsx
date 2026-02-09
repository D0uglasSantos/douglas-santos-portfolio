"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = ({ props }) => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <motion.div
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <CiMenuFries className="text-[32px] text-accent" />
        </motion.div>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-32 mb-40 text-center text-2xl"
        >
          <Link href="/" className="text-4xl font-semibold">
            Douglas<motion.span 
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 15, 0]
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
          </Link>
        </motion.div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const isActive = link.path === pathname;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ x: 10, scale: 1.1 }}
              >
                <Link
                  href={link.path}
                  className={`${
                    isActive &&
                    "text-accent border-b-2 border-accent"
                  } capitalize font-medium text-2xl hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

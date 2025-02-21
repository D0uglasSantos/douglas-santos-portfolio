import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/D0uglasSantos" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/douglas-aquino-santos",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/das.technologies/" },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconsStyles} target="_blank">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

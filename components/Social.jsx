import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Sacha-Marciano" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/sacha-mordekhai-marciano",
  },
  {
    icon: <SiCodewars />,
    path: "https://www.codewars.com/users/Sacha-Marciano",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

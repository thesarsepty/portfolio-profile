import React from "react";
import Link from "next/link";
// Icons
import { FaGithub, FaLinkedinIn, FaQuora } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/thesarsepty" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/thesar-nadhif/",
  },
  { icon: <FaQuora />, path: "https://www.quora.com/profile/Satchi-9" },
];

type Props = {
  containerStyles?: string;
  iconStyles?: string;
};

const Social = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;

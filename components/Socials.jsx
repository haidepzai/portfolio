"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaGitlab,
  FaGithub,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/haidepzaii",
  },
  {
    icon: <FaGitlab />,
    path: "https://gitlab.com/haidepzai",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/hai_t3ch",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/sonhaivu",
  },
  {
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/haix3",
  },
  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/haidepzai",
  },  
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

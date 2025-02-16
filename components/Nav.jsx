"use client";
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    name: "home",
  },
  {
    name: "about",
  },
  {
    name: "journey",
  },
  {
    name: "work",
  },
  {
    name: "contact",
  },
];

const nav = ({ containerStyles, listStyles, linkStyles, spy }) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, index) => {
          return (
            <ScrollLink
              spy={spy}
              key={index}
              activeClass="active"
              to={link.name}
              smooth
              onSetActive={(to) => console.log(`Active section: ${to}`)}
              className={linkStyles}
            >
              {link.name}
            </ScrollLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default nav;

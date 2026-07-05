"use client";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home" },
  { name: "about" },
  { name: "journey" },
  { name: "work" },
  { name: "contact" },
];

const Nav = ({ containerStyles, listStyles, linkStyles, spy }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, index) => {
          return isHome ? (
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
          ) : (
            <Link key={index} href={`/#${link.name}`} className={linkStyles}>
              {link.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

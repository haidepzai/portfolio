"use client";
import { Link as ScrollLink } from "react-scroll";
import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const links = [
  { name: "home" },
  { name: "about" },
  { name: "journey" },
  { name: "work" },
  { name: "contact" },
];

const Nav = ({ containerStyles, listStyles, linkStyles, spy }) => {
  const translations = useTranslations('Navigation');
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
              {translations(link.name)}
            </ScrollLink>
          ) : (
            <Link key={index} href={`/#${link.name}`} className={linkStyles}>
              {translations(link.name)}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

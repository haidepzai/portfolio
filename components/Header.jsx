"use client";
import { Link as ScrollLink } from "react-scroll";

// components
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="w-full absolute py-8 xl:py-[48px] z-30">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:justify-between">
          {/* logo */}
          <Logo />
          <div className="flex items-center gap-12">
            {/* nav & socials */}
            <Nav
              containerStyles="hidden xl:flex"
              listStyles="flex gap-6"
              linkStyles="text-primary font-primary text-lg tracking-[1.4px] transition-all duration-300 cursor-pointer"
            />
            <Socials
              containerStyles="flex items-center gap-2"
              iconStyles="text-base w-[32px] h-[32px] bg-primary text-white flex items-center justify-center rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <Logo light={true} />
          <div className="text-white/70 font-light text-center xl:text-left mt-4 xl:mt-0">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved. | {" "}
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

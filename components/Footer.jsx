"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const translations = useTranslations('Footer');
  const [year, setYear] = useState(""); // Empty state to avoid hydration mismatch

  useEffect(() => {
    setYear(new Date().getFullYear()); // Set year after client render
  }, []);

  return (
    <footer className="py-12 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <Logo light={true} />
          <div className="text-white/70 font-light text-center xl:text-left mt-4 xl:mt-0">
            Copyright &copy; {year}. {translations('rights')} | {" "}
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              {translations('privacy')}
            </Link>
            {" "} | {" "}
            <Link
              href="/imprint"
              className="hover:text-white transition"
            >
              {translations('imprint')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

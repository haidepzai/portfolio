"use client";
import Link from "next/link";

const Logo = ({ light = false }) => {
  // determine the text color based on the light prop
  const colorClass = light ? "text-white" : "text-primary"; // default to black
  return (
    <Link href="/" className="front-primary text-2xl tracking-[4px]">
      <span className={colorClass}>Son Hai Vu</span>
    </Link>
  );
};

export default Logo;

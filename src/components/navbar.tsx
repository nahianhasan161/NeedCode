import Image from "next/image";
import React from "react";
import Logo from "/public/logo-full.png";
import Link from "next/link";
import Home from "../app/page";
type navbarProps = {};

const navbar: React.FC<navbarProps> = () => {
  return (
    <div className="flex justify-between items-center sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex justify-center items-center h-20">
        <Image src={Logo} alt="logo" className="h-full"></Image>
      </Link>
      <div className="flex items-center">
        <button
          className="bg-brand-orange rounded-md px-2 sm:px-4 py-1 text-white text-sm font-medium 
        hover:bg-white hover:text-brand-orange hover:border-2 hover:border-brand-orange border-2 border-transparent transition durasion-300ms ease-in-out"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};
export default navbar;
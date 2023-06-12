import React from "react";
import Navbar from "@/components/navbar";

import HeroImg from "/public/hero.png";
import Image from "next/image";
import AuthModal from "@/components/Modals/AuthModal";
type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-500 to-black relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] select-none pointer-events-none">
          <Image src={HeroImg} alt="logo" className="h-full"></Image>
        </div>
        <AuthModal />
      </div>
    </div>
  );
};
export default AuthPage;

import React from "react";
import Logo from "/public/logo-full.png";
import Image from "next/image";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";

import avatarImg from "@/../public/avatar.png";
import Logout from "../Buttons/Logout";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
type TopbarProps = {};

const Topbar: React.FC<TopbarProps> = () => {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <nav className="bg-dark-layer-1 pb-2 ">
        <div className="flex justify-between items-center sm:px-6 md:px-12 px-2">
          <Link href="/" className="flex justify-center items-center h-6">
            <Image src={Logo} alt="logo" className="h-full"></Image>
          </Link>
          <div className="flex gap-3 pt-1 justify-center items-center ">
            <Link
              href={"/"}
              className="bg-dark-divider-border-2 p-1 rounded-md text-brand-orange text-sm font-medium hover:text-brand-orange-s  "
              onClick={() => {
                console.log(user);
              }}
            >
              Visit Me
            </Link>
            {!user && (
              <Link
                onClick={() => {
                  setAuthModalState((prev) => ({
                    ...prev,
                    isOpen: true,
                    type: "login",
                  }));
                }}
                href={"/auth"}
                className="bg-dark-divider-border-2 p-1 rounded-md text-dark-gray-7 text-sm font-medium hover:text-dark-gray-6 border-transparent"
              >
                Sign In
              </Link>
            )}
            {user && (
              <div className="cursor-pointer relative group ">
                <Image
                  src={avatarImg}
                  alt="avatar"
                  className="rounded-full"
                  width={40}
                  height={40}
                />
                <div
                  className="absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg
                z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out
                "
                >
                  <p className="text-sm">{user.email}</p>
                </div>
              </div>
            )}
            {user && <Logout />}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Topbar;

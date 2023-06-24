import { auth } from "@/firebase/firebase";
/* const handleClick = (type: "login" | "signup" | "forgetPassword") => {
  setAuthModalState((prev) => ({ ...prev, type }));
}; */
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

import { toast } from "react-toastify";
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const router = useRouter();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const setAuthModalState = useSetRecoilState(authModalState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = (type: "login" | "signup" | "forgetPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      return alert("Inputs are empty");
    }
    try {
      const newUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) {
        toast.error("email or password did not match!");
      }
    } catch (error: any) {
      alert(error);
    }
    if (!user) return;
    router.push("/");
  };
  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);
  /* console.log(user, "user"); */
  return (
    <>
      <form className="space-y-6 px-6 pb-4" onSubmit={handleLogin}>
        <h3 className="text-xl font-medium text-white">Sign in to NeedCode</h3>
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium black mb-2 text-gray-300"
          >
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-2 outline-none sm:text-sm rounded-lg w-full p-2.5 block bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="examle@gmail.com"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium black mb-2 text-gray-300"
          >
            Your Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-2 outline-none sm:text-sm rounded-lg w-full p-2.5 block bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="****"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s "
        >
          LogIn
        </button>
        <button
          className="w-full flex justify-end"
          onClick={() => handleClick("forgetPassword")}
        >
          <a className="text-sm block text-brand-orange hover:underline w-full text-right">
            Forget Password?
          </a>
        </button>
        <div className="text-sm font-medium text-gray-500">
          Not signuped?{" "}
          <a
            className="text-blue-700 hover:underline cursor-pointer"
            onClick={() => handleClick("signup")}
          >
            Create Account
          </a>
        </div>
      </form>
    </>
  );
};
export default Login;

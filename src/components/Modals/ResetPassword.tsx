import { authModalState } from "@/atoms/authModalAtom";
import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { BiCaretLeftCircle } from "react-icons/bi";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { toast } from "react-toastify";
type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = (type: "login" | "signup" | "forgetPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };
  const [email, setEmail] = useState("");

  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await sendPasswordResetEmail(email);
    console.log(email);

    if (success) {
      toast.success("Check your email for reset password link");
    } else {
      toast.error("Error sending reset password link");
    }
    setEmail("");
  };
  if (sending) {
    toast.success("Sending reset password link...");
  }
  useEffect(() => {
    toast.error(error?.message);
  }, [error]);

  return (
    <>
      <form className="space-y-6 px-6 pb-4" onSubmit={handleSubmit}>
        <h3 className="text-xl font-medium text-white">
          Forget Your Password? <br />
          <small className="text-slate-300 line-height-1 ">
            Enter your e-mail address below, and we&apos;ll send you e-mal
            allowing you to reset it.
          </small>
        </h3>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s "
        >
          Reset Password
        </button>
        <button
          className="w-full flex justify-end"
          onClick={() => handleClick("login")}
        >
          <a className="text-sm block text-brand-orange hover:underline w-full text-right">
            Back to Login
          </a>
        </button>
        <div className="text-sm font-medium text-gray-500">
          Not signuped?
          <a
            className="text-blue-700 hover:underline ml-1 cursor-pointer"
            onClick={() => handleClick("signup")}
          >
            Create Account
          </a>
        </div>
      </form>
    </>
  );
};
export default ResetPassword;

import React from "react";

type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  return (
    <>
      <form className="space-y-6 px-6 pb-4">
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
          />
        </div>

        <button
          type="submit"
          className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s "
        >
          Reset Password
        </button>
        <button className="w-full flex justify-end">
          <a
            href="a"
            className="text-sm block text-brand-orange hover:underline w-full text-right"
          >
            Login
          </a>
        </button>
        <div className="text-sm font-medium text-gray-500">
          Not Registered?
          <a href="s" className="text-blue-700 hover:underline ml-1">
            Create Account
          </a>
        </div>
      </form>
    </>
  );
};
export default ResetPassword;

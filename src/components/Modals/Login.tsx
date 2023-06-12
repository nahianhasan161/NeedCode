import React from "react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  return (
    <>
      <form className="space-y-6 px-6 pb-4">
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
          />
        </div>
        <button
          type="submit"
          className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s "
        >
          LogIn
        </button>
        <button className="w-full flex justify-end">
          <a
            href="a"
            className="text-sm block text-brand-orange hover:underline w-full text-right"
          >
            Forget Password?
          </a>
        </button>
        <div className="text-sm font-medium text-gray-500">
          Not Registered?{" "}
          <a href="s" className="text-blue-700 hover:underline ">
            Create Account
          </a>
        </div>
      </form>
    </>
  );
};
export default Login;

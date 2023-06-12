import React from "react";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  return (
    <>
      <form className="space-y-6 px-6 pb-4">
        <h3 className="text-xl font-medium text-white">Register to NeedCode</h3>
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium black mb-2 text-gray-300"
          >
            Email
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
            htmlFor="email"
            className="text-sm font-medium black mb-2 text-gray-300"
          >
            Display Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 outline-none sm:text-sm rounded-lg w-full p-2.5 block bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Jhon Doe"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium black mb-2 text-gray-300"
          >
            Password
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
          Register
        </button>

        <div className="text-sm font-medium text-gray-500">
          AlReady have an account?
          <a href="s" className="text-blue-700 hover:underline ml-1">
            Login Now
          </a>
        </div>
      </form>
    </>
  );
};
export default Signup;

import React from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import { useState } from "react";
import { auth, firestore } from "@/firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { setDoc,doc } from "firebase/firestore";
type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = (type: "login" | "signup" | "forgetPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    displayName: "",
    password: "",
  });
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      toast.success("Creating User",{position:"top-center",toastId:"loadingToast"})
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
        const userData = {
          uid:newUser.user.uid,
          email:newUser.user.email,
          displayName : inputs.displayName,
          createdAt : Date.now(),
          updatedAt : Date.now(),
          likedProblems:[],
          dislikedProblems:[],
          solvedProblems:[],
          startedProblems:[],
        }
      await setDoc(doc(firestore,"users",newUser.user.uid),userData)
      router.push("/");
    } catch (error: any) {
      toast.error(error.message);

    } finally{
      toast.dismiss("looadingToast");
    }
  };
  return (
    <>
      <form className="space-y-6 px-6 pb-4" onSubmit={handleRegister}>
        <h3 className="text-xl font-medium text-white">signup to NeedCode</h3>
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
            onChange={handleChangeInput}
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
            name="displayName"
            id="name"
            className="border-2 outline-none sm:text-sm rounded-lg w-full p-2.5 block bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Jhon Doe"
            onChange={handleChangeInput}
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
            onChange={handleChangeInput}
          />
        </div>
        <button
          type="submit"
          className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s "
        >
          signup
        </button>

        <div className="text-sm font-medium text-gray-500">
          Already have an account?
          <a
            className="text-blue-700 hover:underline ml-1 cursor-pointer"
            onClick={() => handleClick("login")}
          >
            Login Now
          </a>
        </div>
      </form>
    </>
  );
};
export default Signup;

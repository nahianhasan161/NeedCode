import { auth } from "@/firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
type LogoutProps = {};

const Logout: React.FC<LogoutProps> = () => {
  const [signOut] = useSignOut(auth);
  const handleClick = async () => {
    const success = await signOut();
    if (success) {
      toast.success("SignOut Successfully");
    }
  };
  return (
    <button
      className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange"
      onClick={handleClick}
    >
      <FiLogOut />
    </button>
  );
};
export default Logout;

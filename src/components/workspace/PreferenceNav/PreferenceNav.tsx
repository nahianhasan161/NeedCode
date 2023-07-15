import React from "react";
import {  AiOutlineFullscreen, AiOutlineSetting } from "react-icons/ai";

type PreferenceNavProps = {};

const PreferenceNav: React.FC<PreferenceNavProps> = () => {
  return (
    <div className="bg-dark-layer-2 w-full h-11 text-white overflow-hidden">
      <div className="flex justify-between items-center w-full h-full">
        <div className="  bg-dark-layer-1 px-5 py-[8px] rounded-t-[5px] cursor-pointer text-xs">
          JavaScript
        </div>
        <div className="flex items-center m-2 ">
          <button className="px-3 py-1.5 relative rounded font-medium items-center transition-all focus:outline-none inline-flex p-1 mr-2 hover:bg-dark-fill-3 group">
            <div className="h-4 w-4 text-dark-gray-7 font-bold text-lg">
              <AiOutlineSetting />
            </div>
          </button>
          <button className="px-3 py-1.5 relative rounded font-medium items-center transition-all focus:outline-none inline-flex p-1 mr-2 hover:bg-dark-fill-3 group">
            <div className="h-4 w-4 text-dark-gray-7 font-bold text-lg">
              <AiOutlineFullscreen />
              
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PreferenceNav;

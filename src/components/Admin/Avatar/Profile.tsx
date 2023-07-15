import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import avatarImg from "@/../public/avatar.png";
type ProfileProps = {
    
};

const Profile:React.FC<ProfileProps> = () => {
    
    return (
        <div className=" group  flex items-center gap-3 ">
        <div className='cursor-pointer relative  w-[3rem] md:w-[5rem] bg-slate-200 p-2 rounded-full '>

        <Image
          src={avatarImg}
          alt="avatar"
          className="rounded-full"
          
          />
          </div>
        <div >
            <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>
                Admin
            </h1>
            <p className='block  text-xs md:text-lg'>
            Jhon Doe
            </p>
        </div>
</div>
    );
}
export default Profile;
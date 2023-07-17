import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import avatarImg from "@/../public/avatar.png";
type ProfileProps = {
    
};

const Profile:React.FC<ProfileProps> = () => {
    
    return (
        <div className=" group  flex items-center gap-3 ">
        <div className='cursor-pointer relative  w-[3rem] md:w-[5rem] bg-slate-200 p-2 rounded-full border-orange-600 hover:border-4'>
        <Link href={"/admin"} >
        <Image
          src={avatarImg}
          alt="avatar"
          className="rounded-full"
          
          />
          </Link>
          </div>
        <div >
            <Link href={"/admin"} className='cursor-pointer '>
            <h1 className='font-bold text-lg sm:text-xl md:text-2xl hover:scale-105 transition-all'>
                Admin
            </h1>
            </Link>
            <Link href={"/profile"} className='cursor-pointer'>
            <p className='block  text-xs md:text-lg hover:scale-105 transition-all'>
            
            Jhon Doe
            </p>
            </Link>
        </div>
</div>
    );
}
export default Profile;
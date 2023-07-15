 
import React,{useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Logo from "/public/logo-full.png";
import avatarImg from "@/../public/avatar.png";
import Profile from '../Avatar/Profile';
import {CgProfile} from "react-icons/cg";
import Item from './Item';
type LeftBarProps = {
    
};

const LeftBar:React.FC<LeftBarProps> = () => {
    
  
  return (
    <div className=''>
        <div className='py-5 pl-5 '>
           {/*  <div className='circle-full w-5'>
            <Image src="https://i.pravatar.cc/300" width={100} height={100} alt='profile_img' />
            </div> */}
             <Profile/>
             {/* options */}
            <div>
            {/* client section */}
            <h1 className=" my-5 text-sm md:text-2xl">Client Section</h1>
            <div className='my-3 sm:my-5 md:my-7 pl-2 sm:pl-5 md:pl-8'>
                <ul>
                    
                   
                    <Item title="Client Profile" active={true} icon={<CgProfile/>}/>
                    <Item title="Login Details"  icon={<CgProfile/>}/>
                    <Item title="Active Listing"  icon={<CgProfile/>}/>
                    <Item title="Change Email"  icon={<CgProfile/>}/>
                    <Item title="Accepted Offers"  icon={<CgProfile/>}/>
                    <Item title="Review Section"  icon={<CgProfile/>}/>
                    <Item title="Un Accepted Offers"  icon={<CgProfile/>}/>
                  
                </ul>
            </div>
            </div>
        </div>
    </div>
  );
}
export default LeftBar;

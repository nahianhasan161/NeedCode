 
import React, { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';


import {BsArrowLeft, BsArrowRight} from "react-icons/bs"
import avatarImg from "@/../public/avatar.png";

import {MdNotificationsNone} from "react-icons/md"
import {MdNotifications} from "react-icons/md"

import NotificationList from '@/components/Notification/NotificationList';
type NavBarProps = {
    
};

const NavBar:React.FC<NavBarProps> = () => {
    const [visible,setVisible] = useState(false);
    
    return (
        <div>
            <nav className='p-5 border-2'>
                <ul className='flex justify-between items-center'>
                    <li className='flex items-center gap-1 cursor-pointer p-3   transition-all' >
                       <span>
                       
                     <BsArrowLeft size={30}/> 
                        </span> <label className='font-bold'>Return</label> 
                    </li>
                    <li className='font-bold'>
                        Dashboard
                    </li>
                    <li>
                        <div className=''>
                     
                      <div className="relative inline-flex w-fit hover:bg-slate-400 rounded transition-all">
  <div
    className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-orange-400 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
    4
  </div>
  <button
    type="button"
    onClick={()=>
      setVisible(!visible)
  }
    >
      <span>
      {visible? (<MdNotifications size={30}/>) : (<MdNotificationsNone size={30}/>)}
      </span>
  </button>
</div>

                      <NotificationList isShown={visible}/>
                        </div>
                    </li>
                </ul>
            </nav>
          
        </div>
    );
}
export default NavBar;
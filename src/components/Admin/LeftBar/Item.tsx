import React, { ReactNode } from 'react'
import {CgProfile} from "react-icons/cg"
type ItemProps = {
    title:string,
    icon:ReactNode,
    active?:boolean
    
};

const Item:React.FC<ItemProps> = ({title,icon,active}) => {
    

  return (
    <div className=''>
      <li 
      className={`flex cursor-pointer items-center gap-3 sm:gap-3 hover:scale-105 transition-all
       md:gap-5 my-3 pl-2 sm:pl-5 py-2 text-sm sm:text-md md:text-lg  w-full rounded-l-full 
       ${active? "bg-[#FFB48B]" : "hover:bg-[#FFB48B]"}` }>
                       <p>
                        {icon}
                        
                        </p>  <label className='font-bold'>{title}</label>
                    </li>
    </div>
  );
}
export default Item;

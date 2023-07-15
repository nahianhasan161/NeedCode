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
      <li className={`flex items-center gap-3 sm:gap-3 md:gap-5 my-3 pl-2 sm:pl-5 py-2 text-sm sm:text-md md:text-lg  w-full rounded-l-full ${active? "bg-[#FFB48B]" : "hover:bg-[#FFB48B]"}` }>
                       <p>
                        {icon}
                        {/* <CgProfile/> */}
                        </p>  <label >{title}</label>
                    </li>
    </div>
  );
}
export default Item;

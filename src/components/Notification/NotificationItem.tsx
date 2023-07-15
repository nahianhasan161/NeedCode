import React, { ReactNode } from "react";
import Link from 'next/link';
import Image, { StaticImageData } from "next/image";
import Profile from "../Admin/Avatar/Profile";
type NotificationItemProps = {
   Name:string,
   Action:string,
   Description:string,
   Img:StaticImageData,
   Time:number,

};
const NotificationItem:React.FC<NotificationItemProps> = ({Name,Description,Img,Time,Action}) => {
    
    
    return (<div>
<Link href="#" className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
             {/* <Image className="h-8 w-8 rounded-full object-cover mx-1"  src={Profile} alt="avatar"> </Image> */}
             <Image className='h-8 w-8 rounded-full object-cover mx-1' src={Img} alt='avater'></Image>
            <p className="text-gray-600 text-sm mx-2">
             <span className="font-bold" >{Name}</span> {Action}   <span className="font-bold text-blue-500" >{Description}</span>   {Time}m age
            </p>
        </Link>
    </div>)
}
export default NotificationItem;
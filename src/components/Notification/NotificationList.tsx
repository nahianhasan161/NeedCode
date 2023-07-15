
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Profile from '../../../public/avatar.png';
import NotificationItem from './NotificationItem';
type NotificationListProps = {
    isShown:boolean 
};
const NotificationList:React.FC<NotificationListProps> = ({isShown}) => {
    
    
    return (<div>
       
{isShown && (
<div className="w-[20rem] absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20">
    <div className="py-2">
       

        <NotificationItem Name='Jhon Doe' Description='Profile Photo' Action='uploaded' Time={5} Img={Profile} />
        <NotificationItem Name='Jhon Doe' Description='Profile Photo' Action='uploaded' Time={5} Img={Profile} />
        
       
    <Link href="#" className="block bg-gray-800 text-white text-center font-bold py-2">See all notifications</Link>
</div>
</div>
)}
              {/* Notificaiton End */}
    </div>);
}
export default NotificationList;
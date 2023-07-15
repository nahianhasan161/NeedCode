
"use client"
import React, { useState } from 'react';
import NavBar from '@/components/Admin/Nav/NavBar';
import LeftBar from '@/components/Admin/LeftBar/LeftBar'
import Main from '@/components/Admin/Main/Mian';
type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    
    
    return (
        
        <main className=" min-h-screen">
        <div>
            <NavBar />
        </div>
        <div className='grid grid-cols-12'>
            <div className="col-span-4 shadow-xl">
                
    
                <LeftBar />
            </div>
            <div className="col-span-8 bg-[#F2F8FF]" >
           <Main />

           

            </div>
        </div>
        </main>
    )
}
export default page;
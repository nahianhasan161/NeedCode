

import React, { useState } from 'react';
import NavBar from '@/components/Admin/Nav/NavBar';
import LeftBar from '@/components/Admin/LeftBar/LeftBar'
import Main from '@/components/Admin/Main/Mian';
import LoginDetails from '@/components/Admin/LoginDetails/LoginDetails';
type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    
    
    return (
        
        <main className="">
       
          <LoginDetails/>

           

          
        </main>
    )
}
export default page;
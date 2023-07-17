import React, { ReactNode } from 'react';
import {CgProfile} from "react-icons/cg";
import Table from '../Table/Table';
type LoginDetailsProps = {
    
    
};

const LoginDetails:React.FC<LoginDetailsProps> = () => {
    
    const titles = ["IP Address", "Login Date","Login Time"];
    
    const informations = [['106.76.96.0','26/5/2023','6:00PM']]
  return  (
    <div className=' h-screen flex flex-col m-10 '>
         
            <div>
         <h1 className='text-2xl md:text-3xl font-bold py-3'>Login Details</h1>
        </div>
        <div>
           <Table titles={titles} informations={informations}/> 
        </div>
        </div>
    
  );
}
export default LoginDetails;

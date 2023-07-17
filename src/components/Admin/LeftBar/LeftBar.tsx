 "use client"
import React,{useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Logo from "/public/logo-full.png";
import avatarImg from "@/../public/avatar.png";
import Profile from '../Avatar/Profile';
import {CgProfile} from "react-icons/cg";
import Item from './Item';
import {RxCross1} from "react-icons/rx"
import {AiOutlineMenu} from "react-icons/ai"

type LeftBarProps = {
  
};

const LeftBar:React.FC<LeftBarProps> = () => {
    
  const [isAction ,setIsActive] = useState("homepage");
  const [show ,setShow] = useState(true);
  return (
    <div className={`w-full ${show? "lg:basis-1/3 " : " bg-[#F2F8FF]"} shadow-2xl `}>
      {!show && 
      <button className='hover:scale-105 transition-all' onClick={()=>{
        setShow(!show)
       }}>
        <span className=''>
        <AiOutlineMenu size={30}/>

        </span>
      </button>
      }
        {show && (<div className='py-5 pl-5 '>
           {/*  <div className='circle-full w-5'>
            <Image src="https://i.pravatar.cc/300" width={100} height={100} alt='profile_img' />
            </div> */}
            <div className='flex justify-between align-items-center'>

             <Profile/>
             <div className='w-10 hover:scale-110 transition-all' >
              {/* close btn */}
             <span className="p-3 cursor-pointer  " onClick={()=>{
              setShow(!show)
             }}><RxCross1/></span>

             </div>
            </div>
            <div>
            {/* client section */}
            <h1 className=" my-5 text-sm md:text-2xl">Client Section</h1>
            <div className='my-3 sm:my-5 md:my-7 pl-2 sm:pl-5 md:pl-8'>
                <ul>
                    
                  
                  
                <Link href={"/admin"} 
                onClick={()=>{
                  setIsActive("homepage")
                }}
                >  <Item title="Client Profile" active={"homepage" == isAction} icon={<CgProfile/>}/></Link>
                  
                <Link href={"/admin/login/details"} 
                onClick={()=>{
                  setIsActive("loginpage")
                }}
                >   <Item title="Login Details" active={"loginpage" == isAction}  icon={<CgProfile/>}/> </Link>
                <Link href={"/listing"}>  <Item title="Active Listing"  icon={<CgProfile/>}/>  </Link>
                <Link href={"/email"}>  <Item title="Change Email"  icon={<CgProfile/>}/>  </Link>
                <Link href={"/offer"}> <Item title="Accepted Offers"  icon={<CgProfile/>}/>  </Link>
                <Link href={"/review"}>  <Item title="Review Section"  icon={<CgProfile/>}/>  </Link>
                <Link href={"/prev-offer"}>  <Item title="Un Accepted Offers"  icon={<CgProfile/>}/>  </Link>
                  
                </ul>
            </div>
            </div>
             {/* options */}
            {/* Handyman section */}
            <div className='my-2 '>
            <h1 className=" my-3 text-sm md:text-2xl">Handyman Section</h1>
            <div className='my-3 sm:my-5 md:my-7 pl-2 sm:pl-5 md:pl-8'>
                <ul>
                    
                  
                  
                <Link href={"/profile"}>  <Item title="Handyman Profile"  icon={<CgProfile/>}/></Link>
                  
                <Link href={"/login"}>   <Item title="Login Details"  icon={<CgProfile/>}/> </Link>
                <Link href={"/listing"}>  <Item title="Active Listing"  icon={<CgProfile/>}/>  </Link>
                <Link href={"/email"}>  <Item title="Send Offers"  icon={<CgProfile/>}/>  </Link>
                <Link href={"/offer"}> <Item title="Accepted Offers"  icon={<CgProfile/>}/>  </Link>
                <Link href={"/review"}>  <Item title="Review Section"  icon={<CgProfile/>}/>  </Link>
                <Link href={"/prev-offer"}>  <Item title="Un Accepted Offers"  icon={<CgProfile/>}/>  </Link>
                <Link href={"/prev-offer"}>  <Item title="Ratings"  icon={<CgProfile/>}/>  </Link>
                <Link href={"/prev-offer"}>  <Item title="Activation Setting"  icon={<CgProfile/>}/>  </Link>
                <Link href={"/prev-offer"}>  <Item title="Uploaded Documents"  icon={<CgProfile/>}/>  </Link>
                <Link href={"/prev-offer"}>  <Item title="All New Profile"  icon={<CgProfile/>}/>  </Link>
                  
                </ul>
                <Link href={"/logout"}><h1 className=' pl-10 text-xl mt-auto font-bold hover:scale-105 transition-all hover:text-slate-950'>Logout</h1></Link>
            </div>
                
            </div>
          
        </div>)}
    </div>
  );
}
export default LeftBar;

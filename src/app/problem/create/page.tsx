 
import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import Link from 'next/link';
import {doc,setDoc} from "firebase/firestore";
import { firestore } from '@/firebase/firebase';
import { toast } from 'react-toastify';
type PageProps = {
    
};


const Page:React.FC<PageProps> = () => {
    const [data,setData] = useState({
        id:"",
        title:"",
        difficulty:"",
        category:"",
        videoId:"",
        link:"",
        order:"",
        likes:0,
        dislikes:0,
    });
    const newProblem = {
        ...data, order : Number(data.order)
    }
    const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await setDoc(doc(firestore,"problems",data.id),newProblem)
        toast.success("Successfully Saved!!!")
        
    }
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>setData({...data,[e.target.name]:e.target.value})
    console.log(data);
    return (<div className='bg-purple-100'>
        <div className='pt-5'>

        <Link href={"/"}
        className='m-10 bg-blue-600 p-5 rounded-xl hover:bg-blue-700'
        >Problem List</Link>
        </div>
        <div className="flex font-sans justify-center items-center min-h-screen">
    <div className="bg-white text-[#181028] p-8 space-y-6 shadow-lg rounded-xl max-w-md md:max-w-lg">

      
        <h1 className='font-bold text-xl text-center'>Create New Problem!!!</h1>
        <div className="flex justify-between gap-2 flex-col sm:flex-row ">
        <form className="bg-dark flex flex-col" onSubmit={handleSubmit} >
          
          <div className='m-1 grid grid-cols-6 '> 
          <label htmlFor="order" className=''>ID:</label>
           <input className='bg-slate-200 p-2 rounded ml-1 col-span-5 ' 
           onChange={handleInputChange} 
           type="text" name="id" id="id" placeholder='id'/></div>
          
          <div className='m-1 grid grid-cols-6 '>
             <label htmlFor="order" className='col-span-1'>Order:</label> 
          <input className='bg-slate-200 p-2  rounded ml-1 col-span-5 '
           onChange={handleInputChange} 
           type="text" name="order" id="order" placeholder='order'/></div>
          
          <div className='m-1 grid grid-cols-6 '> 
          <label htmlFor="order">Title:</label>  
          <input  className='bg-slate-200 p-2  rounded ml-1 col-span-5 '
           onChange={handleInputChange} 
           type="text" name="title" id="title" placeholder='title'/></div>
           
           <div className='m-1 grid grid-cols-6'> 
           <label htmlFor="order">Difficulty:</label>
            <input className='bg-slate-200 p-2  rounded ml-1 col-span-5'
             onChange={handleInputChange} type="text" name="difficulty" id="difficulty"  placeholder='difficulty'/></div>
           
           <div className='m-1 grid grid-cols-6'>
             <label htmlFor="order">Category:</label>
              <input className='bg-slate-200 p-2  rounded ml-1 col-span-5'
               onChange={handleInputChange}
                type="text" name="category" id="category" placeholder='category' /></div>
           
           <div className='m-1 grid grid-cols-6'>
            <label htmlFor="order">Link:</label>
             <input className='bg-slate-200 p-2  rounded ml-1 col-span-5'
              onChange={handleInputChange} 
              type="text" name="link" id="link" placeholder='link'/></div>
            
            <div className='m-1 grid grid-cols-6'>
                <label htmlFor="order">VideoId:</label> 
                <input className='bg-slate-200 p-2  rounded ml-1 col-span-5'
                 onChange={handleInputChange}
                  type="text" name="videoId" id="videoId" placeholder='videoId'/></div>
            
            <button type='submit' className='bg-slate-600 mt-1 text-white font-bold hover:bg-slate-700 p-3 rounded-lg'>Submit</button>
        </form>
        </div>
        </div>
        </div>
    </div>);
}
export default Page;
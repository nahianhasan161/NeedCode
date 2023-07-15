 
import React, { useEffect, useState } from 'react';

type ProgressBarProps = {
    
};

const ProgressBar:React.FC<ProgressBarProps> = () => {
    const [progress,setProgress] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setProgress((prevProgress)=>
            (prevProgress >= 100? prevProgress = 0 : prevProgress + 10) 
            )
            
        },600)
        return ()=>{clearInterval(interval)}
    },[])
    return (
    <div className='absolute t-0 l-0 w-full h-3 bg-stone-100'>
        <div className='h-full bg-red-600 transition-width duration-200 ease-in-out' style={{width:`${progress}%`}}>
        
        </div>
    </div>
    );
}
export default ProgressBar;
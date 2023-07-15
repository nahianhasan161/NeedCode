 
import React,{useState} from 'react';

type pageProps = {
    
};

const Page:React.FC<pageProps> = () => {
    const [movieLink,setMovieLink] = useState("https://api.123movie.cc/tmdb_api.php?se=1&ep=1&tmdb=60735&server_name=vcu");
    const [server,setServer] = useState("vcu");
    return (
    <div className='h-screen w-screen'>
<div>

<iframe className='h-screen w-screen' src={`https://api.123movie.cc/tmdb_api.php?se=1&ep=1&tmdb=60735&server_name=${server}`} frameBorder="no" scrolling="no" ></iframe>

<button className='bg-slate-500 rounded border-none p-4 hover:bg-slate-300 m-5' onClick={()=>{
    
}}>server 1</button>
    </div>
    </div>)
}
export default Page;
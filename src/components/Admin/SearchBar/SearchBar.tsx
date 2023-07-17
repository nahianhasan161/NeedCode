import React from 'react';
import {BsSearch} from "react-icons/bs"
type SearchBarProps = {
    
};

const SearchBar:React.FC<SearchBarProps> = () => {
    
    return (<div>
        <div className='bg-white m-1 md:p-1 md:m-3 rounded-full  shadow-xl'>

        <form className='flex flex-col sm:flex-row items-center   md:gap-3'>
            <div  className='flex items-center p-3 gap-3 border-r-2 sm:px-1 md:p-5 w-full'>
                <label htmlFor='search '>
                    <BsSearch/>
                </label>
                <input id="search" name='search' type="text"
                 className='p-3 w-full outline-0 focus:border-b-2 border-slate-400'
                 placeholder='Search By Email,Company Name or ListingId...'/>
            </div>
            <div>
                <button className='hover:text-slate-600 px-2 sm:w-max w-full hover:border-b-2 border-slate-400 hover:scale-105 transition-all '>Find a Profile</button>
            </div>
        </form>
        </div>
    </div>)
}
export default SearchBar;
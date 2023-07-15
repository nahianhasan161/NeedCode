import React from 'react'
import Searchbar from '../SearchBar/SearchBar';
import Table from '../Table/Table';
import LeftBar from "../LeftBar/LeftBar"
type MainProps = {
    
};

const Main:React.FC<MainProps> = () => {
    

  return (
    <div className=' h-screen flex flex-col m-10  '>
         
            <div>
           <Searchbar/>
        </div>
        <div>
            <Table/>
        </div>
        </div>
    
  );
}
export default Main;

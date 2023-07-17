import React from 'react'
import Searchbar from '../SearchBar/SearchBar';
import Table from '../Table/Table';
import LeftBar from "../LeftBar/LeftBar"
type MainProps = {
    
};

const Main:React.FC<MainProps> = () => {
    const titles = ['Address','Phone Number','Email Address']
 const informations = [['Awsome Street Mr. Bones','01987462342','awsome@gmail.com'],['The Sliding Mr. Bones','01987462342','shaoyo@gmail.com'],["The Sliding Mr. Bones","0183847593",'shiningstar@gmail.com']] 
  return (
    <div className=' h-screen flex flex-col m-10 '>
         
            <div>
           <Searchbar/>
        </div>
        <div>
            <Table titles={titles} informations={informations}/>
        </div>
        </div>
    
  );
}
export default Main;

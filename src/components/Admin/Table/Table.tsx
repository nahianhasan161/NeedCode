import React from 'react';
import TableData from './TableData';

type TableProps = {
    titles:Array<string>,
    informations:Array<Array<string|number>>,
};

const Table:React.FC<TableProps> = ({titles,informations}) => {
    
    
    return (<div>
        <table className="table-auto text-xs sm:text-md md:text-xl border-2 w-full">
  <thead className='border-2 bg-rose-100 '>
    <tr >
    {titles && (titles.map((title,index) => <th className='p-5' key={index}>{title}</th>))}
      
    </tr>
  </thead>
  <tbody className='border-2 text-center bg-white '>
  {informations && (informations.map((info,index) => 
  <tr className='border-2 hover:bg-slate-200 transition-all' key={index}>
     {info && (info.map((data,id) =>   <TableData title={data} key={id}/>))}
  </tr>
  ))}
   
  </tbody>
</table>
    </div>);
}
export default Table;
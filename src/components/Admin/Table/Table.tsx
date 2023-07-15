import React from 'react';

type TableProps = {
    
};

const Table:React.FC<TableProps> = () => {
    
    return (<div>
        <table className="table-auto text-xs sm:text-md md:text-xl border-2 w-full">
  <thead className='border-2 bg-rose-100 '>
    <tr >
      <th className='p-5'>Address</th>
      <th className='p-5'>Phone</th>
      <th className='p-5'>Email</th>
    </tr>
  </thead>
  <tbody className='border-2 text-center bg-white '>
    <tr className='border-2 '>
      <td className='p-5'>The Sliding Mr. Bones</td>
      <td className='p-5'>0183847593</td>
      <td className='p-5'>shiningstar@gmail.com</td>
    </tr>
    <tr className='border-2'>
      <td className='p-5'>196 Black Street</td>
      <td className='p-5'>0183847593</td>
      <td className='p-5'>shiningstar@gmail.com</td>
    </tr>
    <tr className='border-2'>
      <td className='p-5'>Malcolm Lockyer</td>
      <td className='p-5'>0183847593</td>
      <td className='p-5'>shiningstar@gmail.com</td>
    </tr>
  </tbody>
</table>
    </div>);
}
export default Table;
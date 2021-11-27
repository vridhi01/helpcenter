import React from 'react';
import courselogo from '../../images/courselogo.png';
import dropdownarrow from  '../../images/dropdownarrow.png'
const HelpcentercontaineransA = () => {
    return (
        <>
           <div className="flex flex-row justify-between">
               <div className="flex flex-row">
                   <div><img className="w-7 mt-4" src={courselogo} /></div>
                   <div><h1 className="font-medium text-lg pl-4 pt-4">Course Question Answer</h1></div>
               </div>
               <div>
                <img src={dropdownarrow} className="absolute inline-block pl-1.5 pt-0.5 ml-24 mt-5"/>
                <select className="rounded-full py-3 px-10 ml-6 appearance-none">
                    <option>Sort</option>
                    <option>No</option>
                    <option>Maybe</option>
                </select>
               </div>
           </div>
        </>
    );
  };
  
  export default HelpcentercontaineransA;
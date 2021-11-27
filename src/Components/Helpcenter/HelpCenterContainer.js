import React from 'react';
import helpcenterlogo from '../../images/helpcenterlogo.png'
import HelpCenterContainerA from './HelpCenterContainerA'
import HelpCenterContainerE from './HelpCenterContainerE'
import search  from '../../images/search.png'
import dropdownarrow from  '../../images/dropdownarrow.png'
const HelpCenterContainer = () => {
    return (
        <>
        <div className="container mx-auto md:container md:mx-auto mt-20">
         <div className="flex flex-row">
           <div className="pr-5 mt-3"><img className="w-10" src={helpcenterlogo}/></div>
           <div className="pt-4"><h1 className="text-3xl font-medium">Help Center</h1></div>
        </div>
        <h1 className="text-2xl text-center text-gray-600">Popular Questions</h1>
        <HelpCenterContainerA/>
        <div className="flex justify-between mb-6  border-b-2 border-gray-300">
            <div><h1 className="font-bold mt-6 text-xl">Categories</h1></div>
            <div className="mb-6">
              <img src={search} className="absolute mt-3 mr-3 pr-3 pl-3"/>
              <input type="text" className="border-2 rounded-full py-3 px-6 pl-12" placeholder="Search..."/>
              <img src={dropdownarrow} className="absolute inline-block pl-1.5 pt-0.5 ml-24 mt-5"/>
              <select className="rounded-full py-3 px-10 ml-6 appearance-none">
                <option>Sort</option>
                <option>No</option>
                <option>Maybe</option>
              </select>
            
            </div>
        </div>
        <HelpCenterContainerE/>
        </div> 

        
        
       
        
        </>
    );
  };
  
  export default HelpCenterContainer;
import React from 'react';
import Arrow from '../../images/Arrow.png'
const HelpcentercontaineransB = (props) => {
    const Stext = [
        {
            text:"Lorem ipsum dolor sit amet, consectetur..."
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur..."
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur..."
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur..."
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur..."
        },
        {
            text:"Lorem ipsum dolor sit amet, consectetur..."
        },
    ]
    return (
        <>
         <div className="shadow-lg border-2 rounded-md border-white col-span-3 inline-table">
          <div className="py-8 px-5">
                   <h1 className="text-center inline-block ml-10 text-xl font-medium mb-4 border-b-2 border-gray-300 pb-5">Other<span className="pl-1 text-blue-600 font-normal">Popular Questions</span></h1>
                   <div>
                       {
                           Stext.map((val,index)=>{
                              return (
                                <div className="border-b-2 border-gray-300 grid grid-cols-12 pb-2 pt-2"> 
                                     <div className="col-span-11"><p>{val.text}</p></div>
                                     <div className="mt-5"><img src={Arrow} /></div>
                                </div>
                              )
                           })
                       }
                   </div>
              </div>
            </div>
              <div className="shadow-lg mt-10 border-2 rounded-md border-white col-span-3 inline-table">
              <div className="py-8 px-5">
                   <h1 className="text-center inline-block ml-10 text-xl font-medium mb-4 border-b-2 border-gray-300 pb-5">Related<span className="pl-1 text-blue-600 font-normal"> Questions</span></h1>
                   <div>
                       {
                           Stext.map((val,index)=>{
                              return (
                                <div className="border-b-2 border-gray-300 grid grid-cols-12 pb-2 pt-2"> 
                                     <div className="col-span-11"><p>{val.text}</p></div>
                                     <div className="mt-5"><img src={Arrow} /></div>
                                </div>
                              )
                           })
                       }
                   </div>
              </div>
            </div>
        </>
    );
  };
  
  export default HelpcentercontaineransB;
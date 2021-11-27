import React  from 'react';
import Arrow from '../../images/Arrow.png'

const HelpcenterinnercomponentC = () => {
    const Stext = [
        {
            text:"Lorem ipsum dolor sit amet,consectetur..."
        },
        {
            text:"Lorem ipsum dolor sit amet,consectetur..."
        },
        {
            text:"Lorem ipsum dolor sit amet,consectetur..."
        },
        {
            text:"Lorem ipsum dolor sit amet,consectetur..."
        },
        {
            text:"Lorem ipsum dolor sit amet,consectetur..."
        },
        {
            text:"Lorem ipsum dolor sit amet,consectetur..."
        },
        {
            text:"Lorem ipsum dolor sit amet,consectetur..."
        },
    ]
    return(
        <>
              <div className="py-8 px-5">
                   <h1 className="text-center inline-block ml-10 text-xl font-medium mb-6 border-b-2 border-gray-300 pb-5">Other<span className="pl-1 text-blue-600 font-normal">Popular Questions</span></h1>
                   <div>
                       {
                           Stext.map((val,index)=>{
                              return (
                                <div className="border-b-2 border-gray-300 grid grid-cols-12 pb-5"> 
                                     <div className="col-span-11"><p className="py-6">{val.text}</p></div>
                                     <div className="mt-7 ml-3 w-6"><img src={Arrow} /></div>
                                </div>
                              )
                           })
                       }
                   </div>
              </div>
        </>
    );

};

export default HelpcenterinnercomponentC
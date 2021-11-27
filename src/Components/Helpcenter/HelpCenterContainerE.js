import React  from 'react';
import HelpCenterContainerC from './HelpCenterContainerC'
import Frame from '../../images/Frame.png'
import jobs from  '../../images/jobs.png'
import college from  '../../images/college.png'
import exam from '../../images/exam.png'

const HelpCenterContainerE = () => {
  

    return(
        <>
        <div className="grid grid-cols-12 gap-8">
           <div className="col-span-6">
                <div className="flex flex-row border-2 rounded-lg mb-11 px-3 py-6 border-indigo-300">
                    <div><img className="w-10/12" src= {Frame}></img></div>
                    <div className="ml-6">
                        <h2 className="font-bold text-lg">Courses</h2>
                        <p  className="text-gray-400 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <HelpCenterContainerC/>

                <div className="flex mt-9  flex-row border-2 rounded-lg mb-11 px-3 py-6 border-indigo-300">
                    <div><img className="w-11/12" src= {jobs}></img></div>
                    <div className="ml-6">
                        <h2 className="font-bold text-lg">Jobs</h2>
                        <p  className="text-gray-400 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <HelpCenterContainerC/>
           </div>
           <div className="col-span-6">
                <div className="flex  flex-row border-2 rounded-lg mb-11 px-3 py-6 border-indigo-300">
                    <div><img className="" src= {exam}></img></div>
                    <div className="ml-6">
                        <h2 className="font-bold text-lg">Exams</h2>
                        <p  className="text-gray-400 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <HelpCenterContainerC/>

                <div className="flex flex-row border-2 rounded-lg mb-11 px-3 py-6 border-indigo-300">
                    <div><img className="w-10/12" src={college}></img></div>
                    <div className="ml-6">
                        <h2 className="font-bold text-lg">College</h2>
                        <p  className="text-gray-400 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <HelpCenterContainerC/>
           </div>
        </div>
       
      
     
       
         
        </>
    );

};

export default HelpCenterContainerE


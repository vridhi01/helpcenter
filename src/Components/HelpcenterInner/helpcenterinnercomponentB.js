import React  from 'react';
import Frame from '../../images/Frame.png'

const HelpcenterinnercomponentB = () => {
    return(
        <>
        <div className="flex flex-row justify-between">
            <div className="flex flex-row">
                <div className="mr-4">
                    <img className="w-48" src={Frame}/>
                </div>
                <div className="mt-5 ml-4">
                    <h1 className="text-2xl font-medium mb-4">Courses</h1>
                    <p className="mb-2 text-gray-500"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                       tempor incididunt.</p>
                    <p className="mb-3 text-gray-500"> It is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <div className="mt-16 mb-10">
            <button class="bg-gray-200 text-black font-normal px-5 py-3 rounded-full">Back to Help Center</button>
            </div>
        </div>
        </>
    );

};

export default HelpcenterinnercomponentB
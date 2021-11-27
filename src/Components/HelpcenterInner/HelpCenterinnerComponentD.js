import React  from 'react';
import HelpcenterinnercomponentA from './helpcenteinnercomponentA'
import courselogo from '../../images/courselogo.png';
import Sdata from './Sdata'

const HelpcenterinnercomponentD = () => {
    return(
        <>
             <div className="col-span-7">
                    <div className="shadow-lg border-2 rounded-md border-white mt-14 px-10 py-10">
                        <div className="flex flex-row border-b-2 border-gray-300 pb-3">
                            <div><img className="w-7" src={courselogo} /></div>
                            <div className="mt-0 ml-3"><h1 className="text-xl">M.C.A</h1></div>
                        </div>
                        <div className="mt-10">
                        {
                            Sdata.map((val , index) => {
                                return <HelpcenterinnercomponentA
                                    views = {val.views}
                                    reply = {val.reply}
                                    date = {val.date}
                                    text = {val.text}
                                />
                            })
                        }
                        </div>
                    </div>

                    <div className="shadow-lg border-2 rounded-md border-white mt-10 mb-10 px-10 py-10">
                        <div className="flex flex-row border-b-2 border-gray-300 pb-3">
                            <div><img className="w-8" src={courselogo} /></div>
                            <div className="mt-1 ml-3"><h1 className="text-xl">B.C.A</h1></div>
                        </div>
                        <div className="mt-10">
                        {
                            Sdata.map((val , index) => {
                                return <HelpcenterinnercomponentA
                                    views = {val.views}
                                    reply = {val.reply}
                                    date = {val.date}
                                    text = {val.text}
                                />
                            })
                        }
                        </div>
                    </div>

                    <div className="shadow-lg border-2 rounded-md border-white px-10 py-10">
                    <div className="flex flex-row border-b-2 border-gray-300 pb-3"> 
                        <div><img className="w-8" src={courselogo} /></div>
                        <div className="mt-1 ml-3"><h1 className="text-xl">B.C.A</h1></div>
                    </div>
                    <div className="mt-10">
                    {
                        Sdata.map((val , index) => {
                            return <HelpcenterinnercomponentA
                                views = {val.views}
                                reply = {val.reply}
                                date = {val.date}
                                text = {val.text}
                            />
                        })
                    }
                    </div>
                </div>
                </div>
        </>
    );

};

export default HelpcenterinnercomponentD
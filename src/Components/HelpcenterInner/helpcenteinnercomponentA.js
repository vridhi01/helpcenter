import React  from 'react';
import faeye from '../../images/faeye.png'
import reply from  '../../images/reply.png'
import circlearrowimg from '../../images/circlearrowimg.png'
const HelpcenteinnercomponentA = (props) => {
    return(
        <>
        <div className="shadow-lg border-2 rounded-md border-white p-7 mb-10 flex justify-between">
            <div>
                <div className="flex flex-row pb-3">
                    <div className="flex flex-row">
                        <div className="mt-2 mr-2"><img src={faeye}/></div>
                        <div><p className="text-gray-600">{props.views} Views.</p></div>
                    </div>
                    <div className="flex flex-row">
                        <div className="mt-1 mr-1 ml-3 w-5"><img src={reply}/></div>
                        <div><p className="text-gray-600">{props.reply} Reply</p></div> 
                    </div>
                    <div className="flex flex-row ml-4">
                        <div><p  className="text-gray-600">-Updated on {props.date}</p></div>   
                    </div>
                </div>
                <h4>{props.text}</h4>
            </div>
            <div className="mt-8">
                <img src={circlearrowimg}/>
            </div>
        </div>
        </>
    );

};

export default HelpcenteinnercomponentA
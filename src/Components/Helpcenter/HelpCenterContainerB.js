import React  from 'react';
import faeye from '../../images/faeye.png'
import reply from  '../../images/reply.png'
import cross from  '../../images/cross.png'
import upvote from '../../images/upvote.png'
import downvote  from '../../images/downvote.png'
import comment from '../../images/comment.png'
import repost from '../../images/repost.png'
import share from '../../images/share.png'

const HelpCenterContainerB = (props) => {
    return(
        <>
        <div className="shadow-lg border-2 rounded-md border-white p-7 mb-10 ">
        <div className="flex justify-between border-b-2 border-gray-300 pb-8">
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
                <div className="mt-4">
                   <h4 className="font-medium text-lg">{props.ques}</h4> 
                   <p className="mb-2 text-gray-400 text-lg mt-4">{props.text}</p>
                </div> 
            </div>
            <div className="mt-5">
               <img src={cross} />
            </div>
        </div>
        
        <div className="grid grid-cols-10 gap-3 mt-5">
            <div className="col-span-2 flex flex-row">
                    <div className=""><img className="w-10/12" src={upvote}/></div>
                    <div className="border-r-2 border-black"><p className="text-sm">Upvote {props.upvote}</p></div>
            </div>
            <div className="col-span-2 flex flex-row ">
                <div className=""><img className="w-10/12"src={downvote}/></div>
                <div><p className="text-sm">Downvote {props.downvote}</p></div>
            </div>
            <div className="col-span-2  flex flex-row ">
                <div className=""><img className="w-10/12" src={comment}/></div>
                <div><p className="text-sm">Comment {props.comment}</p></div>
            </div>
            <div className="col-span-2  flex flex-row ">
                <div className=""><img className="w-10/12" src={repost}/></div>
                <div><p className="text-sm">Repost {props.repost}</p></div>
            </div>
            <div className="col-span-2 flex flex-row">
                <div className=""><img className="w-10/12" src={share}/></div>
                <div><p className="text-sm">Share {props.share}</p></div>
            </div>
            
        </div>
        </div>
         
        </>
    );

};

export default HelpCenterContainerB


import React  from 'react';
import faeye from '../../images/faeye.png'
import reply from  '../../images/reply.png'
import cross from  '../../images/cross.png'
import upvote from '../../images/upvote.png'
import downvote  from '../../images/downvote.png'
import comment from '../../images/comment.png'
import repost from '../../images/repost.png'
import share from '../../images/share.png'

const HelpcentercontaineransE = (props) => {
    return(
        <>
        <div className="shadow-lg border-2 rounded-md border-white p-7 mb-10 mt-16">
        <div className="flex justify-between  pb-1.5">
            <div>
                <div className="flex flex-row">
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
                <div className="mt-3">
                   <h4 className="font-medium text-lg">{props.ques}</h4> 
                   <p className="mb-2 text-bold font-semibold text-xl mt-4">{props.text}</p>
                </div> 
            </div>
        </div>
        
        <div className="flex flex-row pr-2">
            <div className="flex flex-row">
                <div><img src={upvote}/></div>
                <div><p className="text-sm pl-1.5 pr-1.5">Upvote {props.upvote}</p></div>
            </div>|
            <div className="flex flex-row pl-2">
                <div><img src={downvote}/></div>
                <div><p className="text-sm pl-1.5">Downvote {props.downvote}</p></div>
            </div>
            <div className="flex flex-row pl-20">
                <div><img src={comment}/></div>
                <div><p className="text-sm pl-1.5">Comment {props.comment}</p></div>
            </div>
            <div className="flex flex-row ml-20">
                <div><img src={share}/></div>
                <div><p className="text-sm pl-1.5">Share {props.share}</p></div>
            </div>
        </div>
        </div>

        <div className="grid grid-cols-10 mt-10">
            <input type="text" className="border-2 col-span-8 rounded-full py-3 px-6 pl-12" placeholder="Type your Comment"/>
            <button class="col-span-2 ml-5 bg-blue-300 text-white py-3 px-10 rounded-full">
                Comment
            </button>
        </div>
         
        </>
    );

};

export default HelpcentercontaineransE


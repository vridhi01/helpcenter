import React from 'react';
import user from '../../images/user.png'
import verified from '../../images/verified.png'
import state from '../../images/state.png'
import upvote from '../../images/upvote.png'
import downvote  from '../../images/downvote.png'
import comment from '../../images/comment.png'
import repost from '../../images/repost.png'
import share from '../../images/share.png'

const HelpcentercontaineransC = () => {
    const Stext = [
        {
            image:user,
            name:"James Spiegel",
            date:"july12,2021",
            state:"Chandigarh University",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eum nihili facit; Quacumque enim ingredimur, in aliqua historia vestigium ponimus. Duo Reges: constructio interrete. Proclivi currit oratio. Quae contraria sunt his, malane? Quod quidem nobis non saepe contingit. Hoc loco tenere se Triarius non potuit.",
            upvote:12,
            downvote:0,
            comment:1,
            repost:2,
            share:1,
           
        },
     
    ]
    return (
        <>
        <div className="shadow-lg border-2 rounded-md border-white p-10 mt-10 mb-10">
          {
              Stext.map((val)=>{
                  return (
                    <>
                      <div className="flex flex-row justify-between">
                          <div className="flex flex-row">
                              <div><img className="w-12" src={val.image}/></div>
                              <div className="mx-3">
                                  <div className="flex flex-row">
                                      <div> <h2 className="font-bold">{val.name}</h2></div>
                                      <div className="flex flex-row ml-4">
                                        <div><img className="w-7" src={verified}/></div>
                                        <div><p>Verified</p></div>
                                      </div>
                                  </div>
                                <p className="text-gray-500 mt-2 mb-2">@{val.name}</p>
                                  <div className="flex flex-row">
                                      <div className="flex flex-row">
                                          <div className="pr-2"><img className="" src={state}/></div>
                                          <div className="pr-2"><p className="text-gray-500">{val.state}</p></div>
                                      </div>|
                                      <div className="pl-2"><p>Update on {val.date}</p></div>
                                  </div>
                              </div>
                             
                          </div>
                          <div className="">
                              <button className="bg-gray-200 text-black py-2 px-4">Most Popular Answer</button>
                          </div>
                      </div>
                      <div className="mt-6">
                         <p className="text-gray-500">{val.text}</p>
                      </div>
                      <div className="flex flex-row mt-8 pr-2">
                           <div className="flex flex-row">
                               <div><img src={upvote}/></div>
                               <div><p className="text-sm pl-1.5 pr-1.5">Upvote {val.upvote}</p></div>
                           </div>|
                           <div className="flex flex-row pl-2">
                               <div><img src={downvote}/></div>
                               <div><p className="text-sm pl-1.5">Downvote {val.downvote}</p></div>
                           </div>
                           <div className="flex flex-row pl-24 pr-24">
                               <div><img src={comment}/></div>
                               <div><p className="text-sm pl-1.5">Comment {val.comment}</p></div>
                           </div>
                           <div className="flex flex-row pr-24">
                               <div><img src={repost}/></div>
                               <div><p className="text-md pl-1.5">Repost {val.repost}</p></div>
                           </div>
                           <div className="flex flex-row">
                               <div><img src={share}/></div>
                               <div><p className="text-sm pl-1.5">Share {val.share}</p></div>
                           </div>
                      </div>
                      <div className="grid grid-cols-10 mt-10">
                           <input type="text" className="border-2 bg-gray-100 col-span-8 rounded-full py-3 px-6 pl-12" placeholder="Type your Comment"/>
                            <button class="col-span-2 ml-5 bg-blue-300 text-white py-3 px-10 rounded-full">
                                Comment
                            </button>
                      </div>
                    </>
                  )

              })
          }
        </div>
        </>

    );
  };
  
  export default HelpcentercontaineransC;
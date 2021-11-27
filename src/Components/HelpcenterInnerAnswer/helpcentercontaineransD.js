import React from 'react';
import user from '../../images/user1.png'
import state from '../../images/state.png'
import upvote from '../../images/upvote.png'
import downvote  from '../../images/downvote.png'
import share from '../../images/share.png'

const helpcentercontaineransD = () => {
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
        <div className="shadow-lg border-2 rounded-md border-white p-10">
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
                                      <div><p className="text-gray-500 ml-2 mb-2">@{val.name}</p></div>
                                  </div>
                                <div className="flex flex-row">
                                      <div className="flex flex-row">
                                          <div className="pr-2"><img className="" src={state}/></div>
                                          <div className="pr-2"><p className="text-gray-500">{val.state}</p></div>
                                      </div>|
                                      <div className="pl-2"><p>Update on {val.date}</p></div>
                                  </div>
                              </div>
                             
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
                           <div className="flex flex-row ml-20">
                               <div><img src={share}/></div>
                               <div><p className="text-sm pl-1.5">Share {val.share}</p></div>
                           </div>
                      </div>
                    </>
                  )

              })
          }
        </div>
        </>

    );
  };
  
  export default helpcentercontaineransD;
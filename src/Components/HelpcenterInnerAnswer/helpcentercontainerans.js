import React from 'react';
import HelpcentercontaineransA from './helpcentercontaineransA'
import HelpcentercontaineransB from './helpcentercontaineransB'
import HelpcentercontaineransC from './helpcentercontaineransC'
import HelpcentercontaineransD from './helpcentercontaineransD'
import HelpcentercontaineransE from './helpcentercontaineransE'
const Helpcentercontainerans = () => {
    const Sdata1 = [
        {
            views:50,
            reply:14,
            date:"july 12,2021",
            ques : "Why did North America turn out so differently from South America despite both being colonized by European empires?",
            upvote:12,
            downvote:0,
            comment:3,
            share:1
        },
    ]
    return (
        <>
            <div className="p-20">
                <div className="grid grid-cols-10">
                    <div className="col-span-7">
                       
                        <HelpcentercontaineransA/>
                        {
                            Sdata1.map((val , index) => {
                                return <HelpcentercontaineransE
                                    views = {val.views}
                                    reply = {val.reply}
                                    date = {val.date}
                                    text = {val.ques}
                                    upvote = {val.upvote}
                                    downvote = {val.downvote}
                                    comment = {val.comment}
                                    share = {val.share}
                                />
                            })
                         }
                        <HelpcentercontaineransC/>
                        <HelpcentercontaineransD/>
                        <HelpcentercontaineransC/>
                        <HelpcentercontaineransC/>
                        <HelpcentercontaineransD/>
                    </div>
                    <div className="col-span-3 ml-8 mt-20">
                       <HelpcentercontaineransB/>
                      
                    </div>
                </div>
            </div>
        </>
    );
  };
  
  export default Helpcentercontainerans;
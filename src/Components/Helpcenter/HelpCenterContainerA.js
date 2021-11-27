import React  from 'react';
import HelpcenterinnercomponentA from '../../Components/HelpcenterInner/helpcenteinnercomponentA'
import HelpCenterContainerB from '../Helpcenter/HelpCenterContainerB'

const HelpCenterContainerA = () => {
    const Sdata = [
        {
            views:50,
            reply:14,
            date:"july 12,2021",
            text:"My privacy settings are not working correctly on Stulink"
        },
        {
            views:50,
            reply:14,
            date:"july 12,2021",
            text:"About Suspended Accounts"
        },
    ];

    const Sdata1 = [
        {
            views:50,
            reply:14,
            date:"july 12,2021",
            ques : "How can i setup user profile ?",
            text:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            upvote:12,
            downvote:0,
            comment:3,
            repost:4,
            share:1
        },
    ]

    return(
        <>
          <div className="grid grid-cols-12 gap-10 mt-10">
              <div className="col-span-6">
                {
                    Sdata1.map((val , index) => {
                        return <HelpCenterContainerB
                            views = {val.views}
                            reply = {val.reply}
                            date = {val.date}
                            ques= {val.ques}
                            text = {val.text}
                            upvote = {val.upvote}
                            downvote={val.downvote}
                            comment = {val.comment}
                            repost = {val.repost}
                            share = {val.share}
                        />
                    })
                }
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
              <div className="col-span-6">
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
                 {
                    Sdata1.map((val , index) => {
                        return <HelpCenterContainerB
                            views = {val.views}
                            reply = {val.reply}
                            date = {val.date}
                            ques= {val.ques}
                            text = {val.text}
                            upvote = {val.upvote}
                            downvote={val.downvote}
                            comment = {val.comment}
                            repost = {val.repost}
                            share = {val.share}
                        />
                    })
                }
              </div>
          </div>
         
        </>
    );

};

export default HelpCenterContainerA


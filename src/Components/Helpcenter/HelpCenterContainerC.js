import React  from 'react';
import HelpcenterinnercomponentA from '../../Components/HelpcenterInner/helpcenteinnercomponentA'
import vector from '../../images/Vector.png'
const HelpCenterContainerC = () => {
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
        {
            views:50,
            reply:14,
            date:"july 12,2021",
            text:"About Suspended Accounts"
        },
    ];
    return(
        <> 
        {
            Sdata.map((val) => {
                return <HelpcenterinnercomponentA
                    views = {val.views}
                    reply = {val.reply}
                    date = {val.date}
                    text = {val.text}
                />
            })
        }
          <div className="flex flex-row mb-7">
           <button class="bg-gray-200 text-black font-normal px-10 py-3 rounded-full">See More
           <img src={vector} className="inline pl-2" />
           </button>
          </div> 
        </>
    );

};

export default HelpCenterContainerC


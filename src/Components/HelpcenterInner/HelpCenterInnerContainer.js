import React from 'react';
import HelpcenteinnercomponentB from './helpcenterinnercomponentB'
import HelpcenterinnercomponentC from './helpcenterinnercomponentC'
import HelpCenterinnerComponentD from './HelpCenterinnerComponentD'
const HelpCenterInnerContainer = () => {
    return (
        <div className="p-20">
           <HelpcenteinnercomponentB/>
           <div className="grid gap-4 grid-cols-10">
                <HelpCenterinnerComponentD/>
                <div className="shadow-lg border-2 rounded-md border-white col-span-3 inline-table">
                    <HelpcenterinnercomponentC/>
                </div>
            </div>
        </div>
    );
  };
  
  export default HelpCenterInnerContainer;
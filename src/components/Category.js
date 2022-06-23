import React from "react";

const MobileCat = () => {
  return (
    <div className="fixed top-[58px] left-0 h-[58px] bg-[#42725D] w-full">
      <div className="flex flex-nowrap scrollbar text-gray-100 pl-4 pt-4 pb-4 sm:pb-[18px] cursor-default max-w-7xl mx-auto">
        <div className="pr-4 sm:pr-0 sm:mr-10 hover:cursor-pointer hover:text-gray-300">
          Ангилал1
        </div>
        <div className="pr-4 sm:pr-0 sm:mr-10 hover:cursor-pointer hover:text-gray-300">
          Ангилал2
        </div>
        <div className="pr-4 sm:pr-0 sm:mr-10 hover:cursor-pointer hover:text-gray-300">
          Ангилал3
        </div>
        <div className="pr-4 sm:pr-0 sm:mr-10 hover:cursor-pointer hover:text-gray-300">
          Ангилал4
        </div>
        <div className="pr-4 sm:pr-0 sm:mr-10 hover:cursor-pointer hover:text-gray-300">
          Ангилал5
        </div>
        <div className="pr-4 sm:pr-0 sm:mr-10 hover:cursor-pointer hover:text-gray-300">
          Ангилал6
        </div>
        <div className="pr-4 sm:pr-0 sm:mr-10 hover:cursor-pointer hover:text-gray-300">
          Ангилал7
        </div>
        <div className="pr-4 sm:pr-0 sm:mr-10 hover:cursor-pointer hover:text-gray-300">
          Ангилал8
        </div>
      </div>
    </div>
  );
};

export default React.memo(MobileCat);

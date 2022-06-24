import React from "react";

const MobileCat = () => {
  return (
    <div className="fixed top-[58px] left-0 h-[58px] bg-[#42725D] w-full">
      <div className="flex flex-nowrap scrollbar text-gray-100 pl-4 pt-4 pb-4 sm:pb-[18px] cursor-default max-w-7xl mx-auto">
        <div className="pr-4 sm:pr-0 sm:mr-10 whitespace-nowrap hover:cursor-pointer hover:text-gray-300">
          Бүлүүрийн сальник
        </div>
        <div className="pr-4 sm:pr-0 sm:mr-10 whitespace-nowrap hover:cursor-pointer hover:text-gray-300">
          Голын сальник
        </div>
        <div className="pr-4 sm:pr-0 sm:mr-10 whitespace-nowrap hover:cursor-pointer hover:text-gray-300">
          Арчих сальник
        </div>
        <div className="pr-4 sm:pr-0 sm:mr-10 whitespace-nowrap hover:cursor-pointer hover:text-gray-300">
          Эргэлтийн сальник
        </div>
        <div className="pr-4 sm:pr-0 sm:mr-10 whitespace-nowrap hover:cursor-pointer hover:text-gray-300">
          Чиглүүлэгч цагираг
        </div>
        <div className="pr-4 sm:pr-0 sm:mr-10 whitespace-nowrap hover:cursor-pointer hover:text-gray-300">
          Тулах цагираг
        </div>
        <div className="pr-4 sm:pr-0 sm:mr-10 whitespace-nowrap hover:cursor-pointer hover:text-gray-300">
          Бусад
        </div>
      </div>
    </div>
  );
};

export default React.memo(MobileCat);

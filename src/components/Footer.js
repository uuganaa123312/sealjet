import React from "react";

const Footer = () => {
  return (
    <div className="relative w-full text-center bg-white py-8 border-t">
      <div className="flex flex-row items-center justify-center mx-4">
        <div className="p-2 bg-[#395C4D] w-[100px] rounded-2xl flex items-center justify-center">
          <img src="/img/logo.png" alt="" className="text-center" />
        </div>
        <div className="pl-10">
          <div className="font-bold">Холбоо барих</div>
          <div>+976 9999-1111</div>
          <div>info@sealjet.mn</div>
        </div>
      </div>
      <div className="px-4 pt-2">
        Marketing is a company that focus on developing company’s strategy for
        increase digital marketing
      </div>
    </div>
  );
};

export default React.memo(Footer);

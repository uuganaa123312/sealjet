import React from "react";

const Order = () => {
  return (
    <div className="pt-[58px]  bg-[#395C4D] h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <div className="text-xl text-center text-white font-bold">
          Захиалга өгөх
        </div>
        <div className="px-3 pt-4 pb-2">
          <label className="block tracking-wide text-white text-sm mb-2">
            Захиалагчийн овог, нэр
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
            type="text"
            placeholder="..."
          />
        </div>
        <div className="px-3 pb-2">
          <label className="block tracking-wide text-white text-sm mb-2">
            Захиалагчийн утас
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
            type="text"
            placeholder="..."
          />
        </div>
        <div className="px-3 pb-2">
          <label className="block tracking-wide text-white text-sm mb-2">
            Захиалагчийн и-мэйл
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
            type="email"
            placeholder="..."
          />
        </div>
        <div className="px-3 pb-2">
          <label className="block tracking-wide text-white text-sm mb-2">
            Бүтээгдэхүүний нэр
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
            type="text"
            placeholder="..."
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-56 text-center font-bold bg-[#395C4D] rounded-lg border-2 text-white p-2 hover:bg-white hover:text-gray-700 cursor-pointer">
            Захиалга баталгаажуулах
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Order);

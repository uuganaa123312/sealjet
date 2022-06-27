import React from "react";

const Order = () => {
  return (
    <div className="pt-[58px] bg-[#395C4D]">
      <div className="max-w-7xl">
        <div className="p-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Захиалагчийн овог, нэр
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
            type="text"
            placeholder="..."
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Order);

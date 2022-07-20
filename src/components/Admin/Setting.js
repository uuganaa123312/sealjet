import React, { useState } from "react";

const Setting = () => {
  const [footer, setFooter] = useState(false);
  return (
    <div className="font-[roboto] mx-4">
      <div
        className="bg-[#395C4D] text-gray-200 max-w-xs flex items-center justify-center py-2 rounded-md tracking-widest cursor-pointer"
        onClick={() => setFooter(!footer)}
      >
        Footer
      </div>
      {/* footer */}
      {footer && (
        <div className="">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="text"
            placeholder="Хаяг"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="text"
            placeholder="Утас"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="text"
            placeholder="Email"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="text"
            placeholder="Facebook"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="text"
            placeholder="Instagram"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="text"
            placeholder="Twitter"
          />
        </div>
      )}
      {/* footer */}
    </div>
  );
};

export default React.memo(Setting);

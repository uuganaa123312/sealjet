import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div
      className={`top-0 -left-[100vw] w-[100vw] bg-[#395C4D] fixed h-full rounded-tr-xl rounded-br-xl ease-in-out duration-300 z-10 ${
        open ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="flex flex-col justify-center px-6 py-20 font-semibold text-lg text-white">
        <Link to="/" onClick={() => setOpen(false)}>
          Нүүр
        </Link>
        <Link to="/product" onClick={() => setOpen(false)} className="pt-6">
          Бүтээгдэхүүн
        </Link>
        <Link to="/news" onClick={() => setOpen(false)} className="pt-6">
          Мэдээ
        </Link>
        <Link to="/order" onClick={() => setOpen(false)} className="pt-6">
          Захиалга
        </Link>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);

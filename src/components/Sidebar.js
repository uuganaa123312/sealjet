import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSealState } from "../pages/Context";

const Sidebar = () => {
  const location = useLocation();
  const { state, setState } = useSealState();
  return (
    <div
      className={`top-0 -left-[100vw] w-[100vw] bg-[#395C4D] fixed h-full ease-in-out duration-300 z-10 ${
        state.toggle ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="flex flex-col justify-center px-6 py-20 font-semibold text-lg text-gray-100">
        {state.menu.map((el) => {
          return (
            <Link
              key={el.id}
              to={el.url}
              className={
                el.url === location.pathname ? "border-b-2 pt-6" : "pt-6"
              }
              onClick={() => {
                setState({ type: "CHANGE_TOGGLE", data: false });
              }}
            >
              {el.name}
            </Link>
          );
        })}
        {state.loggedIn ? (
          <Link
            to="/admin/order"
            className="pt-6"
            onClick={() => {
              setState({ type: "CHANGE_TOGGLE", data: false });
            }}
          >
            Админ
          </Link>
        ) : (
          <Link
            to="/login"
            className="pt-6"
            onClick={() => {
              setState({ type: "CHANGE_TOGGLE", data: false });
            }}
          >
            Нэвтрэх
          </Link>
        )}
      </div>
    </div>
  );
};

export default React.memo(Sidebar);

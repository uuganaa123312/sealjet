import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSealState } from "../Context";

const Home = ({ children }) => {
  const { state, logOut } = useSealState();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <div className="fixed top-0 right-0 flex gap-5 p-5">
        <div>{state?.userInfo?.username}</div>
        <svg
          width={25}
          height={25}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => logOut()}
          className="cursor-pointer"
        >
          <path
            d="M12.5 14.0625C16.3818 14.0625 19.5312 10.9131 19.5312 7.03125C19.5312 3.14941 16.3818 0 12.5 0C8.61816 0 5.46875 3.14941 5.46875 7.03125C5.46875 10.9131 8.61816 14.0625 12.5 14.0625ZM18.75 15.625H16.0596C14.9756 16.123 13.7695 16.4062 12.5 16.4062C11.2305 16.4062 10.0293 16.123 8.94043 15.625H6.25C2.79785 15.625 0 18.4229 0 21.875V22.6562C0 23.9502 1.0498 25 2.34375 25H22.6562C23.9502 25 25 23.9502 25 22.6562V21.875C25 18.4229 22.2021 15.625 18.75 15.625Z"
            fill="#395C4D"
          />
        </svg>
      </div>

      {/* sidebar */}
      <div className="w-[267px] h-screen bg-[#395C4D] fixed left-0 top-0">
        <div className="flex items-center justify-between mx-5 py-5 border-b">
          <img
            src="/img/logo.png"
            alt=""
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 6H21"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 12H21"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 18H21"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H3.01"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H3.01"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H3.01"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col font-[roboto]">
          {state.admin_menu.map((el, index) => {
            return (
              <div
                className={`flex items-center mx-5 mt-5 cursor-pointer ${
                  el.url === location.pathname
                    ? "text-white border-r-2"
                    : "text-gray-300"
                }`}
                onClick={() => navigate(el.url)}
                key={index}
              >
                <i className={`${el.class} text-xl`}></i>
                <div className="pl-3">{el.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* sidebar */}
      {/* content */}
      <div className="ml-[267px] mt-[65px]">{children}</div>
      {/* content */}
    </div>
  );
};

export default React.memo(Home);

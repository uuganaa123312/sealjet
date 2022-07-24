import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSealState } from "../pages/Context";
import * as API from "../api/requests";
import Swal from "sweetalert2";

// const data = [
//   { id: 0, name: "Бүгд" },
//   { id: 1, name: "Бүлүүрийн сальник" },
//   { id: 2, name: "Голын сальник" },
//   { id: 3, name: "Арчих сальник" },
//   { id: 4, name: "Эргэлтийн сальник" },
//   { id: 5, name: "Чиглүүлэгч цагираг" },
//   { id: 6, name: "Тулах цагираг" },
//   { id: 7, name: "Бусад" },
// ];

const MobileCat = () => {
  const navigate = useNavigate();
  const { state, setState } = useSealState();
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getCategory()
      .then((res) => setData(res.data.data))
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#395C4D",
        });
      });
  }, []);

  return (
    <div className="fixed top-[58px] left-0 h-[58px] bg-[#42725D] w-full z-10">
      <div className="flex flex-nowrap scrollbar text-gray-100 pl-4 pt-4 pb-4 sm:pb-[18px] cursor-default max-w-7xl mx-auto">
        <div
          onClick={() => {
            navigate("/product");
            setState({ type: "CHANGE_CAT_ID", data: 0 });
          }}
          className={`pr-4 sm:pr-0 sm:mr-10 whitespace-nowrap hover:cursor-pointer sm:hover:text-gray-300 ${
            state.cat_id === 0 ? "font-bold" : ""
          }`}
        >
          Бүгд
        </div>
        {data.length > 0 &&
          data.map((el) => {
            return (
              <div
                key={el.id}
                onClick={() => {
                  navigate("/product");
                  setState({ type: "CHANGE_CAT_ID", data: el.id });
                }}
                className={`pr-4 sm:pr-0 sm:mr-10 whitespace-nowrap hover:cursor-pointer sm:hover:text-gray-300 ${
                  state.cat_id === el.id ? "font-bold" : ""
                }`}
              >
                {el.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default React.memo(MobileCat);

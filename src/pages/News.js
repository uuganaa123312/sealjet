import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSealState } from "../pages/Context";
import * as API from "../api/requests";
import Swal from "sweetalert2";

const News = () => {
  const navigate = useNavigate();
  const { setState } = useSealState();
  const [news, setNews] = useState([]);

  useEffect(() => {
    API.getNews()
      .then((res) => setNews(res.data.data))
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#395C4D",
        });
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 640) {
      setState({ type: "CHANGE_HEADER", data: false });
    }
  }, [setState]);

  const lastOne = news.slice(-1).pop();
  const lastFour = news
    .slice(Math.max(news.length - 5, 1))
    .filter((el) => el.id !== lastOne?.id);
  const other = news.filter((el) => el.id !== lastOne?.id);

  return (
    <div className="mt-[58px] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* topPost */}
        {/* mobile */}
        {lastOne ? (
          <div
            className="p-4 md:hidden"
            onClick={() => navigate("/news/" + lastOne?.id)}
          >
            <img
              src={"https://mmmall.mn" + lastOne?.url}
              alt=""
              className="rounded-xl object-cover h-[250px] w-full"
            />
            <div className="font-bold pt-4">{lastOne?.name}</div>
            <div className="text-sm pt-2">{lastOne?.date}</div>
            <hr className="mt-3" />
          </div>
        ) : (
          <div className="md:hidden text-center">Мэдээлэл байхгүй байна.</div>
        )}

        {/* mobile */}
        {/* desktop */}
        <div className="hidden md:flex items-center justify-center px-4 py-10 h-[300px] lg:h-[400px] xl:h-[500px] ">
          <div className="w-full h-full flex items-center justify-center pr-4">
            {lastOne ? (
              <div className="relative w-full h-full">
                <img
                  src={"https://mmmall.mn" + lastOne?.url}
                  alt=""
                  className="w-full h-full object-cover rounded-lg cursor-pointer"
                  onClick={() => navigate("/news/" + lastOne?.id)}
                />
                <div
                  className="absolute bottom-2 left-1/2 w-full text-center text-white font-bold"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  {lastOne?.name}
                </div>
              </div>
            ) : (
              <div>Мэдээлэл байхгүй байна.</div>
            )}
          </div>
          <div className="w-full h-full flex items-center justify-center flex-wrap gap-[4%]">
            {lastFour.length > 0 &&
              lastFour.map((el) => {
                return (
                  <div
                    className="w-[48%] h-[48%] flex items-center justify-center"
                    key={el.id}
                  >
                    <div
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => navigate("/news/" + el.id)}
                    >
                      <img
                        src={"https://mmmall.mn" + el.url}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div
                        className="absolute bottom-2 left-1/2 w-full text-center text-xs text-white font-bold"
                        style={{ transform: "translate(-50%, -50%)" }}
                      >
                        {el.name}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="px-4 hidden md:block">
          {other.length > 0 &&
            other.reverse().map((el) => {
              return (
                <div
                  className="flex text-xs lg:text-base pb-4 cursor-default"
                  key={el.id}
                >
                  <img
                    src={"https://mmmall.mn" + el.url}
                    alt=""
                    className="w-[25%] rounded-xl object-cover"
                  />
                  <div className="w-[75%] pl-[5%] flex flex-col justify-center">
                    <div className="flex flex-row justify-between">
                      <div className="font-bold uppercase">{el.name}</div>
                      <div className="text-xs text-gray-500">{el.date}</div>
                    </div>
                    <div className="pt-2 text-justify">{el.desc}</div>
                  </div>
                </div>
              );
            })}
        </div>
        {/* desktop */}
        {/* topPost */}
        <div className="md:hidden">
          {other.length > 0 &&
            other.reverse().map((el) => {
              return (
                <div key={el.id}>
                  <div
                    className="px-4 flex w-full"
                    onClick={() => navigate("/news/" + el.id)}
                  >
                    <div className="w-[80%] flex flex-col justify-center">
                      <div className="font-bold">{el.name}</div>
                      <div className="text-sm pt-2">{el.date}</div>
                    </div>
                    <div className="w-[20%]">
                      <img
                        src={"https://mmmall.mn" + el.url}
                        alt=""
                        className="w-16 h-16 rounded-xl object-cover sm:w-20 sm:h-20"
                      />
                    </div>
                  </div>
                  <hr className="my-3" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(News);

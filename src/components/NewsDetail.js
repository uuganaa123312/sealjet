import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSealState } from "../pages/Context";
import * as API from "../api/requests";
import Swal from "sweetalert2";
import moment from "moment";

const NewsDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { setState } = useSealState();
  const [data, setData] = useState();

  useEffect(() => {
    API.getNewsOne(params.id)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#395C4D",
        });
      });
  }, [params.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 640) {
      setState({ type: "CHANGE_HEADER", data: true });
    }
  }, [setState]);

  return (
    <div className="animate-fade max-w-7xl mx-auto">
      <div className="fixed left-[7px] top-[7px] sm:hidden">
        <svg
          width={39}
          height={39}
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setState({ type: "CHANGE_HEADER", data: false });
            navigate(-1);
          }}
        >
          <circle cx="19.5" cy="19.5" r="19.5" fill="#C4C4C460" />
          <path
            d="M11.4697 18.4697C11.1768 18.7626 11.1768 19.2374 11.4697 19.5303L16.2426 24.3033C16.5355 24.5962 17.0104 24.5962 17.3033 24.3033C17.5962 24.0104 17.5962 23.5355 17.3033 23.2426L13.0607 19L17.3033 14.7574C17.5962 14.4645 17.5962 13.9896 17.3033 13.6967C17.0104 13.4038 16.5355 13.4038 16.2426 13.6967L11.4697 18.4697ZM27 18.25L12 18.25V19.75L27 19.75V18.25Z"
            fill="black"
          />
        </svg>
      </div>
      {data && (
        <div className="">
          <img
            src={"https://mmmall.mn" + data.url}
            alt=""
            className="h-[250px] w-full object-cover md:h-[250px] lg:h-[450px]"
          />
          <div className="bg-white rounded-tr-3xl rounded-tl-3xl w-full -mt-4 inline-block p-4">
            <div className="text-sm">
              {moment(data.date).format("YYYY") +
                " оны " +
                moment(data.date).format("MM") +
                " сарын " +
                moment(data.date).format("DD") +
                "нд нийтлэв"}
            </div>
            <div className="text-xl font-bold pt-3">{data.name}</div>
            <div className="pt-3 text-justify">{data.desc}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(NewsDetail);

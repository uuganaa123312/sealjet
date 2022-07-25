import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSealState } from "../pages/Context";
import * as API from "../api/requests";
import Swal from "sweetalert2";

// const data = {
//   id: 1,
//   url: "https://purepng.com/public/uploads/large/construction-material-zip.png",
//   name: "ЭКОРАББЕР",
//   desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
// };

const MaterialDetail = () => {
  const navigate = useNavigate();
  const { setState } = useSealState();
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    API.getMaterialOne(params.id)
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
    <div className="animate-fade max-w-7xl mx-auto sm:pt-[58px]">
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
      {data ? (
        <div className="bg-white flex flex-col items-center justify-center md:flex-row sm:my-10 sm:rounded-lg">
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src={"https://mmmall.mn" + data.url}
              alt=""
              className="rounded-br-3xl rounded-bl-3xl object-cover"
            />
          </div>
          <div className="p-4 md:w-1/2 flex items-center justify-center flex-col">
            <div className="text-2xl uppercase font-semibold lg:text-3xl">
              {data.name}
            </div>
            <div className="py-2 lg:py-4 text-justify">{data.desc}</div>
          </div>
        </div>
      ) : (
        <div className="my-8 text-center">Хоосон байна.</div>
      )}
    </div>
  );
};

export default React.memo(MaterialDetail);

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSealState } from "../pages/Context";

const data = {
  id: 1,
  url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
  name: "ЭКОРАББЕР",
  desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
};

const MaterialDetail = () => {
  const navigate = useNavigate();
  const { setState } = useSealState();

  useEffect(() => {
    setState({ type: "CHANGE_HEADER", data: true });
  }, [setState]);

  return (
    <div className="animate-fade">
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
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <img
            src="https://utmunbox.com/wp-content/uploads/2020/03/500x500.png"
            alt=""
            className="rounded-br-3xl rounded-bl-3xl object-cover"
          />
        </div>
        <div className="p-4">
          <div className="text-lg uppercase font-semibold">{data.name}</div>
          <div>{data.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MaterialDetail);

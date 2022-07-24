import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSealState } from "../pages/Context";
import * as API from "../api/requests";
import Swal from "sweetalert2";

// const material = [
//   {
//     id: 1,
//     url: "https://purepng.com/public/uploads/large/construction-material-zip.png",
//     name: "ЭКОРАББЕР 2",
//     desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
//   },
//   {
//     id: 2,
//     url: "https://purepng.com/public/uploads/large/construction-material-zip.png",
//     name: "ЭКОРАББЕР 2",
//     desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
//   },
//   {
//     id: 3,
//     url: "https://purepng.com/public/uploads/large/construction-material-zip.png",
//     name: "ЭКОРАББЕР 2",
//     desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
//   },
//   {
//     id: 4,
//     url: "https://purepng.com/public/uploads/large/construction-material-zip.png",
//     name: "ЭКОРАББЕР 2",
//     desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
//   },
//   {
//     id: 5,
//     url: "https://purepng.com/public/uploads/large/construction-material-zip.png",
//     name: "ЭКОРАББЕР 2",
//     desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
//   },
//   {
//     id: 6,
//     url: "https://purepng.com/public/uploads/large/construction-material-zip.png",
//     name: "ЭКОРАББЕР 2",
//     desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
//   },
//   {
//     id: 7,
//     url: "https://purepng.com/public/uploads/large/construction-material-zip.png",
//     name: "ЭКОРАББЕР 2",
//     desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
//   },
//   {
//     id: 8,
//     url: "https://purepng.com/public/uploads/large/construction-material-zip.png",
//     name: "ЭКОРАББЕР 2",
//     desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
//   },
// ];

const Material = () => {
  const navigate = useNavigate();
  const { setState } = useSealState();
  const [material, setMaterial] = useState([]);

  useEffect(() => {
    API.getMaterial()
      .then((res) => setMaterial(res.data.data))
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

  return (
    <div className="pt-[58px] flex flex-col justify-center max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
        {material.length > 0 &&
          material.map((el) => {
            return (
              <div className="m-4 rounded-xl bg-white" key={el.id}>
                <img
                  src={"https://mmmall.mn" + el.url}
                  alt=""
                  className="rounded-t-xl object-cover cursor-pointer"
                  onClick={() => navigate("/material/" + el.id)}
                />
                <div className="text-xs text-center text-gray-600 py-1 sm:py-2 md:text-base border-t">
                  {el.name}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default React.memo(Material);

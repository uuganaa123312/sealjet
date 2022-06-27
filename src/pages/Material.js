import React from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "ЭКОРАББЕР 2",
    desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
  },
  {
    id: 2,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "ЭКОРАББЕР 2",
    desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
  },
  {
    id: 3,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "ЭКОРАББЕР 2",
    desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
  },
  {
    id: 4,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "ЭКОРАББЕР 2",
    desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
  },
  {
    id: 5,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "ЭКОРАББЕР 2",
    desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
  },
];

const Material = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-[58px] flex flex-col justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
        {data.map((el) => {
          return (
            <div className="p-4" key={el.id}>
              <img
                src={el.url}
                alt=""
                className="object-cover bg-gray-500 rounded-lg"
                onClick={() => navigate("/material/" + el.id)}
              />
              <div>{el.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Material);

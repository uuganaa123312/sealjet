import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Category from "../components/Category";
import { useSealState } from "./Context";

const data = [
  {
    id: 1,
    cat_id: 1,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Сальник",
    code: "#1",
    desc: "Гидравлик, нэг талын ажиллагаатай. Стандарт хэрэглээнд зориулагдсан тэгш бус хэмт бүлүүрийн сальник.Тохирсон үүрэнд сууж байж стандарт хэрэглээ болдог.",
    temp: [
      { id: 1, name: "-30C ... +110C" },
      { id: 2, name: "-30C ... +110C" },
    ],
    speed: [
      { id: 1, name: "0.5 m/s" },
      { id: 2, name: "0.5 m/s" },
    ],
    pressure: [
      { id: 1, name: "400 bar (5800 psi)" },
      { id: 2, name: "400 bar (5800 psi)" },
    ],
    material: [
      { id: 1, type: 1, name: "Экопур" },
      { id: 2, type: 1, name: "Н-Экопур" },
      { id: 3, type: 2, name: "NBR (70 Sh A)" },
      { id: 4, type: 2, name: "NBR (50 Sh B)" },
      { id: 5, type: 3, name: "Экотал" },
      { id: 6, type: 3, name: "Экомид" },
    ],
  },
  {
    id: 2,
    cat_id: 2,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Сальник",
    code: "#2",
    desc: "Гидравлик, нэг талын ажиллагаатай. Стандарт хэрэглээнд зориулагдсан тэгш бус хэмт бүлүүрийн сальник.Тохирсон үүрэнд сууж байж стандарт хэрэглээ болдог.",
    temp: [
      { id: 1, name: "-30C ... +110C" },
      { id: 2, name: "-30C ... +110C" },
    ],
    speed: [
      { id: 1, name: "0.5 m/s" },
      { id: 2, name: "0.5 m/s" },
    ],
    pressure: [
      { id: 1, name: "400 bar (5800 psi)" },
      { id: 2, name: "400 bar (5800 psi)" },
    ],
    material: [
      { id: 1, type: 1, name: "Экопур" },
      { id: 2, type: 1, name: "Н-Экопур" },
      { id: 3, type: 2, name: "NBR (70 Sh A)" },
      { id: 4, type: 2, name: "NBR (50 Sh B)" },
      { id: 5, type: 3, name: "Экотал" },
      { id: 6, type: 3, name: "Экомид" },
    ],
  },
  {
    id: 3,
    cat_id: 3,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Сальник",
    code: "#3",
    desc: "Гидравлик, нэг талын ажиллагаатай. Стандарт хэрэглээнд зориулагдсан тэгш бус хэмт бүлүүрийн сальник.Тохирсон үүрэнд сууж байж стандарт хэрэглээ болдог.",
    temp: [
      { id: 1, name: "-30C ... +110C" },
      { id: 2, name: "-30C ... +110C" },
    ],
    speed: [
      { id: 1, name: "0.5 m/s" },
      { id: 2, name: "0.5 m/s" },
    ],
    pressure: [
      { id: 1, name: "400 bar (5800 psi)" },
      { id: 2, name: "400 bar (5800 psi)" },
    ],
    material: [
      { id: 1, type: 1, name: "Экопур" },
      { id: 2, type: 1, name: "Н-Экопур" },
      { id: 3, type: 2, name: "NBR (70 Sh A)" },
      { id: 4, type: 2, name: "NBR (50 Sh B)" },
      { id: 5, type: 3, name: "Экотал" },
      { id: 6, type: 3, name: "Экомид" },
    ],
  },
  {
    id: 4,
    cat_id: 4,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Сальник",
    code: "#4",
    desc: "Гидравлик, нэг талын ажиллагаатай. Стандарт хэрэглээнд зориулагдсан тэгш бус хэмт бүлүүрийн сальник.Тохирсон үүрэнд сууж байж стандарт хэрэглээ болдог.",
    temp: [
      { id: 1, name: "-30C ... +110C" },
      { id: 2, name: "-30C ... +110C" },
    ],
    speed: [
      { id: 1, name: "0.5 m/s" },
      { id: 2, name: "0.5 m/s" },
    ],
    pressure: [
      { id: 1, name: "400 bar (5800 psi)" },
      { id: 2, name: "400 bar (5800 psi)" },
    ],
    material: [
      { id: 1, type: 1, name: "Экопур" },
      { id: 2, type: 1, name: "Н-Экопур" },
      { id: 3, type: 2, name: "NBR (70 Sh A)" },
      { id: 4, type: 2, name: "NBR (50 Sh B)" },
      { id: 5, type: 3, name: "Экотал" },
      { id: 6, type: 3, name: "Экомид" },
    ],
  },
  {
    id: 5,
    cat_id: 5,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Сальник",
    code: "#5",
    desc: "Гидравлик, нэг талын ажиллагаатай. Стандарт хэрэглээнд зориулагдсан тэгш бус хэмт бүлүүрийн сальник.Тохирсон үүрэнд сууж байж стандарт хэрэглээ болдог.",
    temp: [
      { id: 1, name: "-30C ... +110C" },
      { id: 2, name: "-30C ... +110C" },
    ],
    speed: [
      { id: 1, name: "0.5 m/s" },
      { id: 2, name: "0.5 m/s" },
    ],
    pressure: [
      { id: 1, name: "400 bar (5800 psi)" },
      { id: 2, name: "400 bar (5800 psi)" },
    ],
    material: [
      { id: 1, type: 1, name: "Экопур" },
      { id: 2, type: 1, name: "Н-Экопур" },
      { id: 3, type: 2, name: "NBR (70 Sh A)" },
      { id: 4, type: 2, name: "NBR (50 Sh B)" },
      { id: 5, type: 3, name: "Экотал" },
      { id: 6, type: 3, name: "Экомид" },
    ],
  },
];

const Product = () => {
  const navigate = useNavigate();
  const { state } = useSealState();
  const [list, setList] = useState([]);

  useEffect(() => {
    var result = data;
    if (state.cat_id !== 0) {
      result = result.filter((el) => el.cat_id === state.cat_id);
    }
    if (state.search_value !== "") {
      result = result.filter(
        (el) =>
          el.name.toLowerCase().includes(state.search_value.toLowerCase()) ||
          el.code.toLowerCase().includes(state.search_value.toLowerCase()) ||
          el.desc.toLowerCase().includes(state.search_value.toLowerCase())
      );
    }
    setList(result);
  }, [state.cat_id, state.search_value]);

  return (
    <>
      <Category />
      <div className="pt-[116px] flex flex-col justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
          {list.length > 0 &&
            list.map((el) => {
              return (
                <div className="p-4" key={el.id}>
                  <img
                    src={el.url}
                    alt=""
                    className="object-cover bg-gray-500 rounded-lg"
                    onClick={() => navigate("/product/" + el.id)}
                  />
                  <div>{el.name + " " + el.code}</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default React.memo(Product);

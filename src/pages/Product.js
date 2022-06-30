import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Category from "../components/Category";
import { useSealState } from "./Context";

const data = [
  {
    id: 1,
    cat_id: 1,
    url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
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
    url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
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
    url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
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
    url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
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
    cat_id: 2,
    url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
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
  {
    id: 6,
    cat_id: 3,
    url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
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
  {
    id: 7,
    cat_id: 2,
    url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
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
  {
    id: 8,
    cat_id: 1,
    url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
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
    <div className="max-w-7xl mx-auto">
      <Category />
      <div className="pt-[116px] flex flex-col justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
          {list.length > 0 ? (
            list.map((el) => {
              return (
                <div className="m-4 rounded-xl bg-white" key={el.id}>
                  <img
                    src={el.url}
                    alt=""
                    className="rounded-t-xl object-cover cursor-pointer"
                    onClick={() => navigate("/product/" + el.id)}
                  />
                  <div className="text-xs text-center text-gray-600 py-1 sm:py-2 md:text-base border-t">
                    {el.name + " " + el.code}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-4">Бүтээгдэхүүн олдсонгүй...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Product);

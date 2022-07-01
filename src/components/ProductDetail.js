import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { useSealState } from "../pages/Context";
import Category from "./Category";

const data = {
  id: 1,
  cat_id: 1,
  url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
  name: "Сальник",
  code: "#1",
  desc: "Гидравлик, нэг талын ажиллагаатай. Стандарт хэрэглээнд зориулагдсан тэгш бус хэмт бүлүүрийн сальник.Тохирсон үүрэнд сууж байж стандарт хэрэглээ болдог.",
  temp: [
    { id: 1, name: "-30C ... +110C" },
    { id: 2, name: "-30C ... +110C" },
    { id: 3, name: "-30C ... +110C" },
    { id: 4, name: "-30C ... +110C" },
    { id: 5, name: "-30C ... +110C" },
    { id: 6, name: "-30C ... +110C" },
  ],
  speed: [
    { id: 1, name: "0.5 m/s" },
    { id: 2, name: "0.5 m/s" },
    { id: 3, name: "0.5 m/s" },
    { id: 4, name: "0.5 m/s" },
    { id: 5, name: "0.5 m/s" },
    { id: 6, name: "0.5 m/s" },
  ],
  pressure: [
    { id: 1, name: "400 bar (5800 psi)" },
    { id: 2, name: "400 bar (5800 psi)" },
    { id: 3, name: "400 bar (5800 psi)" },
    { id: 4, name: "400 bar (5800 psi)" },
    { id: 5, name: "400 bar (5800 psi)" },
    { id: 6, name: "400 bar (5800 psi)" },
    { id: 7, name: "400 bar (5800 psi)" },
    { id: 8, name: "400 bar (5800 psi)" },
  ],
  material: [
    { id: 1, type: 1, name: "Экопур" },
    { id: 2, type: 1, name: "Н-Экопур" },
    { id: 3, type: 2, name: "NBR (70 Sh A)" },
    { id: 4, type: 2, name: "NBR (50 Sh B)" },
    { id: 5, type: 3, name: "Экотал" },
    { id: 6, type: 3, name: "Экомид" },
    { id: 7, type: 1, name: "Экопур" },
    { id: 8, type: 1, name: "Н-Экопур" },
    { id: 9, type: 2, name: "NBR (70 Sh A)" },
    { id: 10, type: 2, name: "NBR (50 Sh B)" },
    { id: 11, type: 3, name: "Экотал" },
    { id: 12, type: 3, name: "Экомид" },
  ],
};
const product = [
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
    cat_id: 5,
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
const productConfig = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
const ProductDetail = () => {
  const navigate = useNavigate();
  const { setState } = useSealState();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 640) {
      setState({ type: "CHANGE_HEADER", data: true });
    }
  }, [setState]);

  return (
    <div className="animate-fade max-w-7xl mx-auto">
      <div className="hidden sm:block">
        <Category />
      </div>
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
      <div className="flex flex-col items-center justify-center sm:mt-[116px]">
        <div className="bg-white sm:mt-10 sm:mx-4 sm:rounded-lg sm:p-10">
          <div className="flex items-center justify-center flex-col sm:flex-row">
            <img
              src={data.url}
              alt=""
              className="rounded-br-3xl rounded-bl-3xl object-cover sm:w-[270px] sm:h-[270px] sm:rounded-xl sm:border"
            />
            <div className="px-4 pt-4 sm:px-8 sm:pt-0">
              <div className="text-lg uppercase font-semibold">
                {data.name + " " + data.code}
              </div>
              <div>{data.desc}</div>
              <div className="bg-[#42725D] py-1 w-[180px] text-center rounded-lg text-white font-bold mt-4 cursor-pointer">
                Захиалах
              </div>
            </div>
          </div>
          <div className="px-4 flex flex-col items-start justify-center w-full sm:px-0 sm:flex-row sm:justify-between sm:gap-5">
            <div>
              {data.temp.length > 0 && (
                <div className="text-lg uppercase font-semibold pt-4">
                  ТЕМПРАТУР
                </div>
              )}
              {data.temp.length > 0 &&
                data.temp.map((el) => {
                  return <div key={el.id}>{el.name}</div>;
                })}
            </div>
            <div>
              {data.speed.length > 0 && (
                <div className="text-lg uppercase font-semibold pt-4">
                  ШИЛЖИЛТИЙН ХУРД
                </div>
              )}
              {data.speed.length > 0 &&
                data.speed.map((el) => {
                  return <div key={el.id}>{el.name}</div>;
                })}
            </div>
            <div>
              {data.pressure.length > 0 && (
                <div className="text-lg uppercase font-semibold pt-4">
                  ДАРАЛТ
                </div>
              )}
              {data.pressure.length > 0 &&
                data.pressure.map((el) => {
                  return <div key={el.id}>{el.name}</div>;
                })}
            </div>
            <div>
              {data.material.length > 0 && (
                <>
                  <div className="text-lg uppercase font-semibold pt-4">
                    МАТЕРИАЛ
                  </div>
                  <div className="flex justify-between flex-col md:flex-row md:gap-5">
                    <div>
                      {data.material.filter((el) => el.type === 1).length >
                        0 && (
                        <div className="font-semibold">Үндсэн сальник</div>
                      )}
                      {data.material.filter((el) => el.type === 1).length > 0 &&
                        data.material
                          .filter((el) => el.type === 1)
                          .map((el) => {
                            return <div key={el.id}>{el.name}</div>;
                          })}
                    </div>
                    <div>
                      {data.material.filter((el) => el.type === 2).length >
                        0 && <div className="font-semibold">Гогцоо резин</div>}
                      {data.material.filter((el) => el.type === 2).length > 0 &&
                        data.material
                          .filter((el) => el.type === 2)
                          .map((el) => {
                            return <div key={el.id}>{el.name}</div>;
                          })}
                    </div>
                    <div>
                      {data.material.filter((el) => el.type === 3).length >
                        0 && <div className="font-semibold">Тулах цагираг</div>}

                      {data.material.filter((el) => el.type === 3).length > 0 &&
                        data.material
                          .filter((el) => el.type === 3)
                          .map((el) => {
                            return <div key={el.id}>{el.name}</div>;
                          })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden px-4 py-4 max-w-7xl mx-auto lg:my-6 sm:block">
        <div className="text-[#253D32] text-xl font-bold pb-2">
          <div>Төстэй Бүтээгдэхүүн</div>
        </div>
        <Carousel
          responsive={productConfig}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          draggable={false}
        >
          {product.map((el) => {
            return (
              <div className="mr-4 rounded-xl bg-white" key={el.id}>
                <div className="flex items-center justify-center p-2">
                  <img
                    src={el.url}
                    alt=""
                    className="rounded-t-xl h-[94px] sm:h-[102px] md:h-[128px] lg:h-[179px] xl:h-[230px] cursor-pointer"
                    onClick={() => navigate("/product/" + el.id)}
                  />
                </div>
                <div className="text-xs text-center text-gray-600 py-1 border-t sm:py-2 md:text-base">
                  {el.name + " " + el.code}
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default React.memo(ProductDetail);

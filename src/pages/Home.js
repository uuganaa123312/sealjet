import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";

const responsive = {
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
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
  },
};
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
const newsConfig = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
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
const material = [
  {
    id: 1,
    url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
    name: "Экобарт 1",
    desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
  },
  {
    id: 2,
    url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
    name: "Экобарт 2",
    desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
  },
  {
    id: 3,
    url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
    name: "Экобарт 2",
    desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
  },
  {
    id: 4,
    url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
    name: "Экобарт 2",
    desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
  },
  {
    id: 5,
    url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
    name: "Экобарт 2",
    desc: "Ногоон єнгєтэй термопластик полиуретан-эластомерийн бїлэгт багтдаг. Тасрах эсэргїїцэл єндєр, бат бєх чанартай. Хэрэглээний хувьд эрдэслэг тосны орчинд ажилдаг. Усанд ажиллахад +40С хїртэл, халуун био тосны орчинд +60С хїртэл температур тэсвэрлэх чадвартай ба сальникийн хэлбэр ажиллах орчиноос хамааран 0.5 м/с-25м/с ийн шилжилт 0.5-700барийн даралт даадаг.",
  },
];
const news = [
  {
    id: 1,
    url: "https://upload.wikimedia.org/wikipedia/commons/5/59/500_x_300_Ramosmania_rodriguesii_%28Rubiaceae%29.jpg",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 21нд нийтлэв",
  },
  {
    id: 2,
    url: "https://upload.wikimedia.org/wikipedia/commons/5/59/500_x_300_Ramosmania_rodriguesii_%28Rubiaceae%29.jpg",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 22нд нийтлэв",
  },
  {
    id: 3,
    url: "https://upload.wikimedia.org/wikipedia/commons/5/59/500_x_300_Ramosmania_rodriguesii_%28Rubiaceae%29.jpg",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 23нд нийтлэв",
  },
  {
    id: 4,
    url: "https://upload.wikimedia.org/wikipedia/commons/5/59/500_x_300_Ramosmania_rodriguesii_%28Rubiaceae%29.jpg",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 24нд нийтлэв",
  },
  {
    id: 5,
    url: "https://upload.wikimedia.org/wikipedia/commons/5/59/500_x_300_Ramosmania_rodriguesii_%28Rubiaceae%29.jpg",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 25нд нийтлэв",
  },
  {
    id: 6,
    url: "https://upload.wikimedia.org/wikipedia/commons/5/59/500_x_300_Ramosmania_rodriguesii_%28Rubiaceae%29.jpg",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 26нд нийтлэв",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-[58px]">
      <div className="">
        <div className="bg-black">
          <img
            src="/img/home-bg.png"
            alt=""
            className="opacity-40 object-cover h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
          />
        </div>
        <div className="absolute top-[179px] font-bold text-white text-xl w-full text-center uppercase">
          <div className="flex items-center justify-center max-w-7xl mx-auto px-4">
            <img
              src="/img/home-s.png"
              alt=""
              className="w-[40%] h-[280px] object-cover hidden md:block md:flex-1"
            />
            <div className="w-[60%] lg:text-3xl">
              Сальникийн төрөлжсөн дэлгүүр
              <br />
              <span className="text-xs opacity-60 font-normal hidden sm:block md:flex-1 md:pt-2 lg:text-base">
                Монгол - Австрийн хамтарсан Сийл Жет Монгол ХХК нь 2003 оноос
                эхлэн бүх төрлийн авто машин, техник тоног төхөөрөмжийн
                нягтруулагч цагираг, жийргэвч ( сальник )-ийг үйлдвэрлэн
                дотоодын зах зээлд нийлүүлж байна.
              </span>
            </div>
          </div>
        </div>
        <div className="py-5 -mt-20 lg:-mt-40 lg:py-10">
          <Carousel
            responsive={responsive}
            draggable={false}
            infinite={true}
            centerMode={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <img
              src="/img/Rectangle 348.png"
              alt=""
              className="w-10 h-10 object-cover lg:w-20 lg:h-20"
            />
            <img
              src="/img/Rectangle 349.png"
              alt=""
              className="w-10 h-10 object-cover lg:w-20 lg:h-20"
            />
            <img
              src="/img/Rectangle 350.png"
              alt=""
              className="w-10 h-10 object-cover lg:w-20 lg:h-20"
            />
            <img
              src="/img/Rectangle 351.png"
              alt=""
              className="w-10 h-10 object-cover lg:w-20 lg:h-20"
            />
            <img
              src="/img/Rectangle 352.png"
              alt=""
              className="w-10 h-10 object-cover lg:w-20 lg:h-20"
            />
            <img
              src="/img/Rectangle 353.png"
              alt=""
              className="w-10 h-10 object-cover lg:w-20 lg:h-20"
            />
            <img
              src="/img/Rectangle 354.png"
              alt=""
              className="w-10 h-10 object-cover lg:w-20 lg:h-20"
            />
          </Carousel>
        </div>
        <div className="px-4 py-4 max-w-7xl mx-auto lg:my-6">
          <div className="text-[#253D32] text-xl font-bold pb-2 flex items-center justify-between">
            <div>Бүтээгдэхүүн</div>
            <div
              className="text-xs text-gray-600 pr-4  cursor-pointer"
              onClick={() => navigate("/product")}
            >
              Бүгдийг үзэх
            </div>
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
        <div className="px-4 pb-4 max-w-7xl mx-auto lg:my-6">
          <div className="text-[#253D32] text-xl font-bold pb-2 flex items-center justify-between">
            <div>Материал</div>
            <div
              className="text-xs text-gray-600 pr-4  cursor-pointer"
              onClick={() => navigate("/material")}
            >
              Бүгдийг үзэх
            </div>
          </div>
          <Carousel
            responsive={productConfig}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            draggable={false}
          >
            {material.map((el) => {
              return (
                <div className="mr-4 rounded-xl bg-white" key={el.id}>
                  <div className="flex items-center justify-center p-2">
                    <img
                      src={el.url}
                      alt=""
                      className="rounded-t-xl h-[94px] sm:h-[102px] md:h-[128px] lg:h-[179px] xl:h-[230px] cursor-pointer"
                      onClick={() => navigate("/material/" + el.id)}
                    />
                  </div>

                  <div className="text-xs text-center text-gray-600 py-1 border-t sm:py-2 md:text-base">
                    {el.name}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="px-4 pb-4 max-w-7xl mx-auto lg:my-6">
          <div className="text-[#253D32] text-xl font-bold pb-2 flex items-center justify-between">
            <div>Мэдээ, мэдээлэл</div>
            <div
              className="text-xs text-gray-600 pr-4 cursor-pointer"
              onClick={() => navigate("/news")}
            >
              Бүгдийг үзэх
            </div>
          </div>
          <Carousel
            responsive={newsConfig}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            draggable={false}
          >
            {news.map((el) => {
              return (
                <div className="mr-4 rounded-xl bg-white" key={el.id}>
                  <div className="flex items-center justify-center">
                    <img
                      src={el.url}
                      alt=""
                      className="rounded-t-xl w-full cursor-pointer"
                      onClick={() => navigate("/news/" + el.id)}
                    />
                  </div>
                  <div className="text-xs text-center text-gray-600 pt-1 md:text-base py-1 border-t sm:py-2">
                    {el.name}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);

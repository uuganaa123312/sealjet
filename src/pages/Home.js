import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import * as API from "../api/requests";
import Swal from "sweetalert2";

const logoConfig = {
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

// const main = {
//   url1: "/img/home-bg.png",
//   url2: "/img/home-s.png",
//   title: "Сальникийн төрөлжсөн дэлгүүр",
//   desc: "Монгол - Австрийн хамтарсан Сийл Жет Монгол ХХК нь 2003 оноос эхлэн бүх төрлийн авто машин, техник тоног төхөөрөмжийн нягтруулагч цагираг, жийргэвч ( сальник )-ийг үйлдвэрлэн дотоодын зах зээлд нийлүүлж байна.",
// };

const Home = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [product, setProduct] = useState([]);
  const [material, setMaterial] = useState([]);
  const [logo, setLogo] = useState([]);
  const [main, setMain] = useState();

  useEffect(() => {
    API.getHome()
      .then((res) => {
        setMain(res.data.data[0]);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#395C4D",
        });
      });
    API.getNews()
      .then((res) => setNews(res.data.data))
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#395C4D",
        });
      });
    API.getProduct()
      .then((res) => setProduct(res.data.data))
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#395C4D",
        });
      });
    API.getMaterial()
      .then((res) => setMaterial(res.data.data))
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#395C4D",
        });
      });
    API.getLogo()
      .then((res) => setLogo(res.data.data))
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#395C4D",
        });
      });
  }, []);

  return (
    <div className="pt-[58px]">
      <div className="">
        <div className="bg-black">
          {main && (
            <img
              src={"https://mmmall.mn" + main?.url1}
              alt=""
              className="opacity-40 object-cover h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
            />
          )}
        </div>
        <div className="absolute top-[179px] font-bold text-white text-xl w-full text-center uppercase">
          {main && (
            <div className="flex items-center justify-center max-w-7xl mx-auto px-4">
              <img
                src={"https://mmmall.mn" + main?.url2}
                alt=""
                className="w-[40%] h-[280px] object-cover hidden md:block md:flex-1"
              />
              <div className="w-[60%] lg:text-3xl">
                {main?.title}
                <br />
                <span className="text-xs opacity-60 font-normal hidden sm:block md:flex-1 md:pt-2 lg:text-base">
                  {main?.desc}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="py-5 -mt-20 lg:-mt-40 lg:py-10">
          <Carousel
            responsive={logoConfig}
            draggable={false}
            infinite={true}
            centerMode={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {logo.length > 0 &&
              logo.map((el, index) => {
                return (
                  <img
                    key={index}
                    src={"https://mmmall.mn" + el.img}
                    alt=""
                    className="w-10 h-10 object-cover lg:w-20 lg:h-20 cursor-pointer"
                    onClick={() => {
                      window.open(el.url, "_blank");
                    }}
                  />
                );
              })}
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
                      src={"https://mmmall.mn" + el.url}
                      alt=""
                      className="rounded-t-xl h-[94px] sm:h-[102px] md:h-[128px] lg:h-[179px] xl:h-[200px] cursor-pointer"
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
                      src={"https://mmmall.mn" + el.url}
                      alt=""
                      className="rounded-t-xl h-[94px] sm:h-[102px] md:h-[128px] lg:h-[179px] xl:h-[200px] cursor-pointer"
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
                      src={"https://mmmall.mn" + el.url}
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

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
  },
};

const Home = () => {
  return (
    <div className="pt-[58px]">
      <div className="sm:hidden">
        <div className="bg-black">
          <img
            src="/img/home-bg.png"
            alt=""
            className="opacity-40 object-cover"
          />
        </div>
        <div className="py-5 -mt-20">
          <Carousel
            responsive={responsive}
            draggable={false}
            infinite={true}
            centerMode={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <img
              src="/img/Rectangle 348.png"
              alt=""
              className="w-10 h-10 object-cover"
            />
            <img
              src="/img/Rectangle 349.png"
              alt=""
              className="w-10 h-10 object-cover"
            />
            <img
              src="/img/Rectangle 350.png"
              alt=""
              className="w-10 h-10 object-cover"
            />
            <img
              src="/img/Rectangle 351.png"
              alt=""
              className="w-10 h-10 object-cover"
            />
            <img
              src="/img/Rectangle 352.png"
              alt=""
              className="w-10 h-10 object-cover"
            />
            <img
              src="/img/Rectangle 353.png"
              alt=""
              className="w-10 h-10 object-cover"
            />
            <img
              src="/img/Rectangle 354.png"
              alt=""
              className="w-10 h-10 object-cover"
            />
          </Carousel>
        </div>
      </div>
      <div className="hidden sm:block">desktopHome</div>
    </div>
  );
};

export default React.memo(Home);

import React from "react";
import Category from "../components/Category";

const Product = () => {
  return (
    <>
      <Category />
      <div className="pt-[116px] flex flex-col justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
          <div className="p-4">
            <img
              src="https://utmunbox.com/wp-content/uploads/2020/03/500x500.png"
              alt=""
              className="object-cover bg-gray-500 rounded-lg"
            />
            <div>Сальник 212.232</div>
          </div>
          <div className="p-4">
            <img
              src="https://utmunbox.com/wp-content/uploads/2020/03/500x500.png"
              alt=""
              className="object-cover bg-gray-500 rounded-lg"
            />
            <div>Сальник 212.232</div>
          </div>
          <div className="p-4">
            <img
              src="https://utmunbox.com/wp-content/uploads/2020/03/500x500.png"
              alt=""
              className="object-cover bg-gray-500 rounded-lg"
            />
            <div>Сальник 212.232</div>
          </div>
          <div className="p-4">
            <img
              src="https://utmunbox.com/wp-content/uploads/2020/03/500x500.png"
              alt=""
              className="object-cover bg-gray-500 rounded-lg"
            />
            <div>Сальник 212.232</div>
          </div>
          <div className="p-4">
            <img
              src="https://utmunbox.com/wp-content/uploads/2020/03/500x500.png"
              alt=""
              className="object-cover bg-gray-500 rounded-lg"
            />
            <div>Сальник 212.232</div>
          </div>
          <div className="p-4">
            <img
              src="https://utmunbox.com/wp-content/uploads/2020/03/500x500.png"
              alt=""
              className="object-cover bg-gray-500 rounded-lg"
            />
            <div>Сальник 212.232</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Product);

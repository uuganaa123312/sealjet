import React from "react";
import { useNavigate } from "react-router-dom";
import Category from "../components/Category";

const data = [
  {
    id: 1,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Сальник 212.232",
  },
  {
    id: 2,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Сальник 212.232",
  },
  {
    id: 3,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Сальник 212.232",
  },
  {
    id: 4,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Сальник 212.232",
  },
  {
    id: 5,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Сальник 212.232",
  },
];

const Product = () => {
  const navigate = useNavigate();
  return (
    <>
      <Category />
      <div className="pt-[116px] flex flex-col justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
          {data.map((el) => {
            return (
              <div className="p-4" key={el.id}>
                <img
                  src={el.url}
                  alt=""
                  className="object-cover bg-gray-500 rounded-lg"
                  onClick={() => navigate("/product/" + el.id)}
                />
                <div>{el.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default React.memo(Product);

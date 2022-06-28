import React from "react";
import { useNavigate } from "react-router-dom";

const news = [
  {
    id: 1,
    url: "https://thewharfkitchenbar.co.nz/wp-content/uploads/2016/10/500x300-1.png",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 21нд нийтлэв",
  },
  {
    id: 2,
    url: "https://thewharfkitchenbar.co.nz/wp-content/uploads/2016/10/500x300-1.png",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 22нд нийтлэв",
  },
  {
    id: 3,
    url: "https://thewharfkitchenbar.co.nz/wp-content/uploads/2016/10/500x300-1.png",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 23нд нийтлэв",
  },
  {
    id: 4,
    url: "https://thewharfkitchenbar.co.nz/wp-content/uploads/2016/10/500x300-1.png",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 24нд нийтлэв",
  },
  {
    id: 5,
    url: "https://thewharfkitchenbar.co.nz/wp-content/uploads/2016/10/500x300-1.png",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 25нд нийтлэв",
  },
  {
    id: 6,
    url: "https://thewharfkitchenbar.co.nz/wp-content/uploads/2016/10/500x300-1.png",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 26нд нийтлэв",
  },
];

const News = () => {
  const navigate = useNavigate();

  const lastOne = news.slice(-1).pop();
  const other = news.filter((el) => el.id !== lastOne.id);
  return (
    <div className="pt-[58px]">
      {/* topPost */}
      <div className="p-4" onClick={() => navigate("/news/" + lastOne.id)}>
        <img
          src={lastOne.url}
          alt=""
          className="rounded-xl object-cover h-[250px] w-full"
        />
        <div className="font-bold pt-4">{lastOne.name}</div>
        <div className="text-sm pt-2">{lastOne.date}</div>
        <hr className="mt-3" />
      </div>
      {/* topPost */}
      {other.length > 0 &&
        other.reverse().map((el) => {
          return (
            <div key={el.id}>
              <div
                className="px-4 flex w-full"
                onClick={() => navigate("/news/" + el.id)}
              >
                <div className="w-[80%] flex flex-col justify-center">
                  <div className="font-bold">{el.name}</div>
                  <div className="text-sm pt-2">{el.date}</div>
                </div>
                <div className="w-[20%]">
                  <img
                    src={el.url}
                    alt=""
                    className="rounded-xl w-16 h-16 object-cover "
                  />
                </div>
              </div>
              <hr className="my-3" />
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(News);

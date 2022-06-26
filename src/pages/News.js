import React from "react";

const news = [
  {
    id: 1,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 21нд нийтлэв",
  },
  {
    id: 2,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 22нд нийтлэв",
  },
  {
    id: 3,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 23нд нийтлэв",
  },
  {
    id: 4,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 24нд нийтлэв",
  },
  {
    id: 5,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 25нд нийтлэв",
  },
  {
    id: 6,
    url: "https://utmunbox.com/wp-content/uploads/2020/03/500x500.png",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: "6 сарын 26нд нийтлэв",
  },
];

const News = () => {
  const lastOne = news.reverse()[0];
  const other = news.filter((el) => el.id !== lastOne.id);
  return (
    <div className="pt-[58px]">
      {/* topPost */}
      <div className="p-4">
        <img src={lastOne.url} alt="" className="rounded-xl object-cover" />
        <div className="font-bold pt-4">{lastOne.name}</div>
        <div className="text-sm pt-2">{lastOne.date}</div>
        <hr className="mt-3" />
      </div>
      {/* topPost */}
      {/* list */}
      {other.length > 0 &&
        other.map((el) => {
          return (
            <div key={el.id}>
              <div className="px-4 flex w-full">
                <div className="w-[80%] flex flex-col justify-center">
                  <div className="font-bold">{el.name}</div>
                  <div className="text-sm pt-2">{el.date}</div>
                </div>
                <div className="w-[20%]">
                  <img
                    src={el.url}
                    alt=""
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
              <hr className="my-3" />
            </div>
          );
        })}
      {/* <div className="px-4 flex w-full">
        <div className="w-[80%] flex flex-col justify-center">
          <div className="font-bold">
            "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг"
          </div>
          <div className="text-sm pt-2">12 сарын 15нд нийтлэв</div>
        </div>
        <div className="w-[20%]">
          <img
            src="https://utmunbox.com/wp-content/uploads/2020/03/500x500.png"
            alt=""
            className="rounded-xl object-cover"
          />
        </div>
      </div>
      <hr className="my-3" /> */}

      {/* list */}
    </div>
  );
};

export default React.memo(News);

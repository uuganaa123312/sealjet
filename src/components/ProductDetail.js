import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSealState } from "../pages/Context";

const data = {
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
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <img
            src="https://utmunbox.com/wp-content/uploads/2020/03/500x500.png"
            alt=""
            className="rounded-br-3xl rounded-bl-3xl object-cover"
          />
        </div>
        <div className="p-4">
          <div className="text-lg uppercase font-semibold">
            {data.name + " " + data.code}
          </div>
          <div>{data.desc}</div>
          {data.temp.length > 0 && (
            <div className="text-lg uppercase font-semibold pt-4">
              ТЕМПРАТУР
            </div>
          )}
          {data.temp.length > 0 &&
            data.temp.map((el) => {
              return <div key={el.id}>{el.name}</div>;
            })}
          {data.speed.length > 0 && (
            <div className="text-lg uppercase font-semibold pt-4">
              ШИЛЖИЛТИЙН ХУРД
            </div>
          )}
          {data.speed.length > 0 &&
            data.speed.map((el) => {
              return <div key={el.id}>{el.name}</div>;
            })}
          {data.pressure.length > 0 && (
            <div className="text-lg uppercase font-semibold pt-4">ДАРАЛТ</div>
          )}
          {data.pressure.length > 0 &&
            data.pressure.map((el) => {
              return <div key={el.id}>{el.name}</div>;
            })}
          {data.material.length > 0 && (
            <>
              <div className="text-lg uppercase font-semibold pt-4">
                МАТЕРИАЛ
              </div>
              {data.material.filter((el) => el.type === 1).length > 0 && (
                <div className="font-semibold">Үндсэн сальник</div>
              )}
              {data.material.filter((el) => el.type === 1).length > 0 &&
                data.material
                  .filter((el) => el.type === 1)
                  .map((el) => {
                    return <div key={el.id}>{el.name}</div>;
                  })}
              {data.material.filter((el) => el.type === 2).length > 0 && (
                <div className="font-semibold">Гогцоо резин</div>
              )}
              {data.material.filter((el) => el.type === 2).length > 0 &&
                data.material
                  .filter((el) => el.type === 2)
                  .map((el) => {
                    return <div key={el.id}>{el.name}</div>;
                  })}
              {data.material.filter((el) => el.type === 3).length > 0 && (
                <div className="font-semibold">Тулах цагираг</div>
              )}

              {data.material.filter((el) => el.type === 3).length > 0 &&
                data.material
                  .filter((el) => el.type === 3)
                  .map((el) => {
                    return <div key={el.id}>{el.name}</div>;
                  })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductDetail);

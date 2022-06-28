import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSealState } from "../pages/Context";

const data = {
  id: 1,
  url: "https://thewharfkitchenbar.co.nz/wp-content/uploads/2016/10/500x300-1.png",
  name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
  desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  date: "6 сарын 21нд нийтлэв",
};

const NewsDetail = () => {
  const navigate = useNavigate();
  const { setState } = useSealState();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 640) {
      setState({ type: "CHANGE_HEADER", data: true });
    }
  }, [setState]);

  return (
    <div className="animate-fade">
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
      <div className="">
        <img src={data.url} alt="" className="h-[250px] w-full object-cover" />
        <div className="bg-white rounded-tr-3xl rounded-tl-3xl w-full -mt-4 inline-block p-4">
          <div className="text-sm">12 сарын 15</div>
          <div className="text-xl font-bold pt-3">
            “ДЭВШИЛТЭТ ТЕХНОЛОГИ, ШИНЖЛЭХ УХААНЫ ОЛОЛТЫГ НЭВТРҮҮЛСЭН ШИЛДЭГ”
          </div>
          <div className="pt-3 text-justify">
            Бизнесийн салбарт өөрийн мэдлэг боловсрол, авъяас чадвар, оюун
            ухаанаа дайчлан ажиллаж буй “Сийл Жет Монгол” ХХК-ний хамт олон 2010
            оны 5- р сарын 10-ны өдөр Хүнс Хөдөө Аж Ахуй, Хөнгөн Үйлдвэрийн
            Яамнаас зохион байгуулсан “Жижиг, дунд үйлдвэр -Хоршоо-2010”
            үзэсгэлэн худалдаанд амжилттай оролцон “Дэвшилтэт технологи,
            шинжилэх ухааны ололтыг нэвтрүүлсэн Шилдэг үйлдвэрлэгч ” номинацид
            шалгарч Цом, Хүндэт өргөмжлөл гардан авлаа. Бизнесийн салбарт өөрийн
            мэдлэг боловсрол, авъяас чадвар, оюун ухаанаа дайчлан ажиллаж буй
            “Сийл Жет Монгол” ХХК-ний хамт олон 2010 оны 5- р сарын 10-ны өдөр
            Хүнс Хөдөө Аж Ахуй, Хөнгөн Үйлдвэрийн Яамнаас зохион байгуулсан
            “Жижиг, дунд үйлдвэр -Хоршоо-2010” үзэсгэлэн худалдаанд амжилттай
            оролцон “Дэвшилтэт технологи, шинжилэх ухааны ололтыг нэвтрүүлсэн
            Шилдэг үйлдвэрлэгч ” номинацид шалгарч Цом, Хүндэт өргөмжлөл гардан
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NewsDetail);

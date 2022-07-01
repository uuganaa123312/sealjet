import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const news = [
  {
    id: 1,
    url: "https://upload.wikimedia.org/wikipedia/commons/5/59/500_x_300_Ramosmania_rodriguesii_%28Rubiaceae%29.jpg",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "Үндэсний агаарын тээвэрлэгч МИАТ компани JU-1021 бүртгэлийн дугаартай Боинг767-300ER агаарын хөлгийн түрээсийн төлбөрийг хугацаанаас нь өмнө барагдуулж, 2022 оны зургаадугаар сарын 16-ны өдрөөс эхлэн өөрийн өмч болгон шилжүүлж авах ёслол өнөөдөр Хөшигийн хөндий дэх “Чингис хаан” олон улсын нисэх буудалд боллоо. Анх 2013 оны есдүгээр сард Монгол Улсын Засгийн газрын тогтоолоор 122 сая ам.долларын зээлийн баталгаа гаргаж, мөн оны 12-р сард АНУ-ын Экспорт-Импорт банкны баталгаа бүхий зээлээр МИАТ компани АНУ-ын Боинг компанийн хооронд байгуулсан гэрээний Худалдах, худалдан авах гэрээний дагуу Монголд Боинг767-300ER маягийн будаг нь ханхалсан онгоц ирсэн түүхтэй. Зээлийг 2014 оноос эхлэн 2022 он хүртэл гэрээнд заасан хуваарийн дагуу МИАТ компани өөрийн үйл ажиллагааны орлогоор цаг хугацаанд нь төлж байжээ. Зээлийн төлбөрийг 2023 оны хоёрдугаар сард төлж дуусах графиктай байсан бөгөөд зээлийн үлдэгдэл болох 8.15 сая ам.долларыг бүрэн төлснөөр онгоц МИАТ-ын эзэмшилд ирлээ. Иргэний нисэхийн ерөнхий газрын дарга С.Мөнхнасан Боинг767-300ER агаарын хөлгийн бүртгэлийн гэрчилгээг МИАТ ТӨХК-ийн гүйцэтгэх захирал Б.Мөнхтамирт гардуулан өгч, нисэх багийн хамт олонд баяр хүргэлээ.",
    date: "6 сарын 21нд нийтлэв",
  },
  {
    id: 2,
    url: "https://upload.wikimedia.org/wikipedia/commons/5/59/500_x_300_Ramosmania_rodriguesii_%28Rubiaceae%29.jpg",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "Бизнесийн салбарт өөрийн мэдлэг боловсрол, авъяас чадвар, оюун ухаанаа  дайчлан  ажиллаж буй “Сийл  Жет Монгол” ХХК-ний хамт олон  2010 оны 5- р сарын 10-ны өдөр Хүнс Хөдөө Аж Ахуй, Хөнгөн Үйлдвэрийн  Яамнаас зохион байгуулсан “Жижиг, дунд үйлдвэр -Хоршоо-2010”  үзэсгэлэн худалдаанд  амжилттай оролцон “Дэвшилтэт  технологи, шинжилэх ухааны ололтыг  нэвтрүүлсэн  Шилдэг  үйлдвэрлэгч ” номинацид шалгарч  Цом, Хүндэт өргөмжлөл гардан авлаа.",
    date: "6 сарын 22нд нийтлэв",
  },
  {
    id: 3,
    url: "https://upload.wikimedia.org/wikipedia/commons/5/59/500_x_300_Ramosmania_rodriguesii_%28Rubiaceae%29.jpg",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "Бизнесийн салбарт өөрийн мэдлэг боловсрол, авъяас чадвар, оюун ухаанаа  дайчлан  ажиллаж буй “Сийл  Жет Монгол” ХХК-ний хамт олон  2010 оны 5- р сарын 10-ны өдөр Хүнс Хөдөө Аж Ахуй, Хөнгөн Үйлдвэрийн  Яамнаас зохион байгуулсан “Жижиг, дунд үйлдвэр -Хоршоо-2010”  үзэсгэлэн худалдаанд  амжилттай оролцон “Дэвшилтэт  технологи, шинжилэх ухааны ололтыг  нэвтрүүлсэн  Шилдэг  үйлдвэрлэгч ” номинацид шалгарч  Цом, Хүндэт өргөмжлөл гардан авлаа.",
    date: "6 сарын 23нд нийтлэв",
  },
  {
    id: 4,
    url: "https://upload.wikimedia.org/wikipedia/commons/5/59/500_x_300_Ramosmania_rodriguesii_%28Rubiaceae%29.jpg",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "Бизнесийн салбарт өөрийн мэдлэг боловсрол, авъяас чадвар, оюун ухаанаа  дайчлан  ажиллаж буй “Сийл  Жет Монгол” ХХК-ний хамт олон  2010 оны 5- р сарын 10-ны өдөр Хүнс Хөдөө Аж Ахуй, Хөнгөн Үйлдвэрийн  Яамнаас зохион байгуулсан “Жижиг, дунд үйлдвэр -Хоршоо-2010”  үзэсгэлэн худалдаанд  амжилттай оролцон “Дэвшилтэт  технологи, шинжилэх ухааны ололтыг  нэвтрүүлсэн  Шилдэг  үйлдвэрлэгч ” номинацид шалгарч  Цом, Хүндэт өргөмжлөл гардан авлаа.",
    date: "6 сарын 24нд нийтлэв",
  },
  {
    id: 5,
    url: "https://upload.wikimedia.org/wikipedia/commons/5/59/500_x_300_Ramosmania_rodriguesii_%28Rubiaceae%29.jpg",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "Бизнесийн салбарт өөрийн мэдлэг боловсрол, авъяас чадвар, оюун ухаанаа  дайчлан  ажиллаж буй “Сийл  Жет Монгол” ХХК-ний хамт олон  2010 оны 5- р сарын 10-ны өдөр Хүнс Хөдөө Аж Ахуй, Хөнгөн Үйлдвэрийн  Яамнаас зохион байгуулсан “Жижиг, дунд үйлдвэр -Хоршоо-2010”  үзэсгэлэн худалдаанд  амжилттай оролцон “Дэвшилтэт  технологи, шинжилэх ухааны ололтыг  нэвтрүүлсэн  Шилдэг  үйлдвэрлэгч ” номинацид шалгарч  Цом, Хүндэт өргөмжлөл гардан авлаа.",
    date: "6 сарын 25нд нийтлэв",
  },
  {
    id: 6,
    url: "https://upload.wikimedia.org/wikipedia/commons/5/59/500_x_300_Ramosmania_rodriguesii_%28Rubiaceae%29.jpg",
    name: "Дэвшилтэд технологи, шинжлэх ухааны ололтын нэвтрүүлсэн шилдэг",
    desc: "Бизнесийн салбарт өөрийн мэдлэг боловсрол, авъяас чадвар, оюун ухаанаа  дайчлан  ажиллаж буй “Сийл  Жет Монгол” ХХК-ний хамт олон  2010 оны 5- р сарын 10-ны өдөр Хүнс Хөдөө Аж Ахуй, Хөнгөн Үйлдвэрийн  Яамнаас зохион байгуулсан “Жижиг, дунд үйлдвэр -Хоршоо-2010”  үзэсгэлэн худалдаанд  амжилттай оролцон “Дэвшилтэт  технологи, шинжилэх ухааны ололтыг  нэвтрүүлсэн  Шилдэг  үйлдвэрлэгч ” номинацид шалгарч  Цом, Хүндэт өргөмжлөл гардан авлаа.",
    date: "6 сарын 26нд нийтлэв",
  },
];

const News = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastOne = news.slice(-1).pop();
  const lastFour = news
    .slice(Math.max(news.length - 5, 1))
    .filter((el) => el.id !== lastOne?.id);
  const other = news.filter((el) => el.id !== lastOne?.id);

  return (
    <div className="mt-[58px] bg-white">
      <div className="max-w-7xl mx-auto">
        {/* topPost */}
        {/* mobile */}
        {lastOne ? (
          <div
            className="p-4 md:hidden"
            onClick={() => navigate("/news/" + lastOne?.id)}
          >
            <img
              src={lastOne?.url}
              alt=""
              className="rounded-xl object-cover h-[250px] w-full"
            />
            <div className="font-bold pt-4">{lastOne?.name}</div>
            <div className="text-sm pt-2">{lastOne?.date}</div>
            <hr className="mt-3" />
          </div>
        ) : (
          <div className="md:hidden text-center">Мэдээлэл байхгүй байна.</div>
        )}

        {/* mobile */}
        {/* desktop */}
        <div className="hidden md:flex items-center justify-center px-4 py-10 h-[300px] lg:h-[400px] xl:h-[500px] ">
          <div className="w-full h-full flex items-center justify-center pr-4">
            {lastOne ? (
              <div className="relative w-full h-full">
                <img
                  src={lastOne?.url}
                  alt=""
                  className="w-full h-full object-cover rounded-lg cursor-default"
                />
                <div
                  className="absolute bottom-2 left-1/2 w-full text-center text-white font-bold"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  {lastOne?.name}
                </div>
              </div>
            ) : (
              <div>Мэдээлэл байхгүй байна.</div>
            )}
          </div>
          <div className="w-full h-full flex items-center justify-center flex-wrap gap-[4%]">
            {lastFour.length > 0 &&
              lastFour.map((el) => {
                return (
                  <div
                    className="w-[48%] h-[48%] flex items-center justify-center"
                    key={el.id}
                  >
                    <div className="relative w-full h-full cursor-default">
                      <img
                        src={el.url}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div
                        className="absolute bottom-2 left-1/2 w-full text-center text-xs text-white font-bold"
                        style={{ transform: "translate(-50%, -50%)" }}
                      >
                        {el.name}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="px-4 hidden md:block">
          {other.length > 0 &&
            other.reverse().map((el) => {
              return (
                <div
                  className="flex text-xs lg:text-base pb-4 cursor-default"
                  key={el.id}
                >
                  <img
                    src={el.url}
                    alt=""
                    className="w-[25%] rounded-xl object-cover"
                  />
                  <div className="w-[75%] pl-[5%] flex flex-col justify-center">
                    <div className="flex flex-row justify-between">
                      <div className="font-bold uppercase">{el.name}</div>
                      <div className="text-xs text-gray-500">{el.date}</div>
                    </div>
                    <div className="pt-2 text-justify">{el.desc}</div>
                  </div>
                </div>
              );
            })}
        </div>
        {/* desktop */}
        {/* topPost */}
        <div className="md:hidden">
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
                        className="w-16 h-16 rounded-xl object-cover sm:w-20 sm:h-20"
                      />
                    </div>
                  </div>
                  <hr className="my-3" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(News);

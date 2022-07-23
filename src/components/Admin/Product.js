import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import * as API from "../../api/requests";

// const data = {
//   id: 1,
//   cat_id: 1,
//   url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hcd/48057544081438/topran-salnik-pervicnogo-vala-100059-103341407-1.png",
//   name: "Сальник",
//   code: "#1",
//   desc: "Гидравлик, нэг талын ажиллагаатай. Стандарт хэрэглээнд зориулагдсан тэгш бус хэмт бүлүүрийн сальник.Тохирсон үүрэнд сууж байж стандарт хэрэглээ болдог.",
//   temp: [
//     { id: 1, name: "-30C ... +110C" },
//     { id: 2, name: "-30C ... +110C" },
//     { id: 3, name: "-30C ... +110C" },
//     { id: 4, name: "-30C ... +110C" },
//     { id: 5, name: "-30C ... +110C" },
//     { id: 6, name: "-30C ... +110C" },
//   ],
//   speed: [
//     { id: 1, name: "0.5 m/s" },
//     { id: 2, name: "0.5 m/s" },
//     { id: 3, name: "0.5 m/s" },
//     { id: 4, name: "0.5 m/s" },
//     { id: 5, name: "0.5 m/s" },
//     { id: 6, name: "0.5 m/s" },
//   ],
//   pressure: [
//     { id: 1, name: "400 bar (5800 psi)" },
//     { id: 2, name: "400 bar (5800 psi)" },
//     { id: 3, name: "400 bar (5800 psi)" },
//     { id: 4, name: "400 bar (5800 psi)" },
//     { id: 5, name: "400 bar (5800 psi)" },
//     { id: 6, name: "400 bar (5800 psi)" },
//     { id: 7, name: "400 bar (5800 psi)" },
//     { id: 8, name: "400 bar (5800 psi)" },
//   ],
//   material: [
//     { id: 1, type: 1, name: "Экопур" },
//     { id: 2, type: 1, name: "Н-Экопур" },
//     { id: 3, type: 2, name: "NBR (70 Sh A)" },
//     { id: 4, type: 2, name: "NBR (50 Sh B)" },
//     { id: 5, type: 3, name: "Экотал" },
//     { id: 6, type: 3, name: "Экомид" },
//     { id: 7, type: 1, name: "Экопур" },
//     { id: 8, type: 1, name: "Н-Экопур" },
//     { id: 9, type: 2, name: "NBR (70 Sh A)" },
//     { id: 10, type: 2, name: "NBR (50 Sh B)" },
//     { id: 11, type: 3, name: "Экотал" },
//     { id: 12, type: 3, name: "Экомид" },
//   ],
// };

const Product = () => {
  const [refresh, setRefresh] = useState(1);
  const [id, setId] = useState("new");
  const [url, setUrl] = useState();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState([]);

  const Save = () => {
    let validation = "";
    name || (validation += "Мэдээний гарчиг оруулна уу!<br/>");
    desc || (validation += "Мэдээний дэлгэрэнгүй оруулна уу!<br/>");
    url || (validation += "Зураг оруулна уу!<br/>");
    if (validation !== "") {
      Swal.fire({
        icon: "warning",
        html: validation,
        confirmButtonColor: "#395C4D",
      });
    } else {
      const formData = new FormData();
      formData.append("url", url);
      formData.append("name", name);
      formData.append("desc", desc);
      API.postMaterial(id, formData)
        .then((res) => {
          if (res.data.success) {
            setId("new");
            setUrl();
            setName("");
            setDesc("");
            setRefresh(refresh + 1);
            Swal.fire({
              icon: "success",
              title: "Амжилттай хадгалагдлаа.",
              confirmButtonColor: "#395C4D",
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            text: err,
            confirmButtonColor: "#395C4D",
          });
        });
    }
  };

  const Delete = (id) => {
    Swal.fire({
      title: "",
      text: "Та устгахдаа итгэлтэй байна уу.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#395C4D",
      cancelButtonText: "Үгүй",
      confirmButtonText: "Тийм",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        API.deleteMaterial(id)
          .then((res) => {
            setRefresh(refresh + 1);
            Swal.fire({
              icon: "success",
              text: "Амжилттай устгагдлаа.",
              confirmButtonColor: "#395C4D",
              timer: 1500,
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              text: err,
              confirmButtonColor: "#395C4D",
            });
          });
      }
    });
  };

  useEffect(() => {
    API.getMaterial()
      .then((res) => setList(res.data.data))
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err,
          confirmButtonColor: "#395C4D",
        });
      });
  }, [refresh]);
  return (
    <div className="mx-4 text-[#244437] font-[roboto]">
      <div className="text-xl font-bold my-2">Бүтээгдэхүүн</div>
      {/* modal */}

      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 w-full h-modal h-full bg-black opacity-30"></div>
      <div
        className="fixed top-1/2 left-1/2 w-[500px]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex justify-between items-center px-4 py-2 rounded-t border-b">
            <div className="font-semibold text-gray-900">
              Категори нэмэх цонх
            </div>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center">
              <div className="mr-4 w-[35%]">Категори нэр</div>
              <input
                className="appearance-none block w-full bg-gray-50 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <div className="p-2 ml-2 w-[20%] rounded-md bg-[#395C4D] text-white cursor-pointer">
                Нэмэх
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <div className="flex">
        <div className="flex-1 mr-4">
          <div className="mt-3">
            <label className="block tracking-wide mb-1">
              Бүтээгдэхүүний нэр
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div className="mt-3">
            <label className="block tracking-wide mb-1">
              Бүтээгдэхүүний код
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div className="mt-4">
            <label className="block tracking-wide mb-1">Тайлбар</label>
            <textarea
              rows="6"
              className="block p-2.5 w-full  bg-gray-50 rounded-lg border border-gray-300  focus:outline-none"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="block tracking-wide mb-1">Зураг оруулах</label>
            <label id="asdasd" className="block tracking-wide mb-1">
              <div className="flex items-center">
                <div className="bg-gray-50 py-2 border rounded flex items-center justify-center w-full cursor-pointer text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={30}
                    height={30}
                    fill="currentColor"
                  >
                    <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                  </svg>
                </div>
              </div>
              <input
                className="hidden w-full p-2  bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => setUrl(e.target.files[0])}
                id="asdasd"
              />
            </label>
            <div className="text-xl text-green-800">
              {url?.name ? url?.name : url}
            </div>
            <p className="mt-1 text-sm text-red-500">
              JPG or PNG ( 500x500px )
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div
              className="bg-[#395C4D] text-gray-200 px-6 py-2 rounded-3xl tracking-widest cursor-pointer"
              onClick={() => Save()}
            >
              Хадгалах
            </div>
          </div>
        </div>
        <div className="flex-1 ml-4">
          <div className="mt-3">
            <label className="block tracking-wide mb-1">
              Сүүлд оруулсан материалууд
            </label>
          </div>
          <div className="max-h-[650px] overflow-auto">
            {list.length > 0 &&
              list.map((el) => {
                return (
                  <div
                    className="flex items-center justify-between py-2"
                    key={el.id}
                  >
                    <img
                      src={"https://mmmall.mn" + el.url}
                      alt=""
                      className="w-14 h-14 object-cover rounded-xl mr-8"
                    />
                    <div className="pr-4">
                      <div className="text-sm font-semibold mb-2">
                        {el.name}
                      </div>
                      <div className="text-xs text-gray-500">{el.desc}</div>
                    </div>
                    <div className="flex">
                      <div
                        className="mr-2 text-white bg-[#395C4D] rounded-lg cursor-pointer"
                        onClick={() => {
                          setId(el.id);
                          setDesc(el.desc);
                          setName(el.name);
                          setUrl(el.url);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="p-2"
                          width={30}
                          height={30}
                        >
                          <path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" />
                        </svg>
                      </div>
                      <div
                        className="mr-2 text-white bg-[#395C4D] rounded-lg cursor-pointer"
                        onClick={() => Delete(el.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                          width={30}
                          height={30}
                          className="p-2"
                        >
                          <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Product);

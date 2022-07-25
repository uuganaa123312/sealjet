import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import * as API from "../../api/requests";

const Setting = () => {
  // Footer
  const [footer, setFooter] = useState(false);
  const [address, setAddress] = useState("");
  const [url, setUrl] = useState();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");

  const Update = () => {
    let validation = "";
    url || (validation += "Зураг оруулна уу!<br/>");
    address || (validation += "Хаяг оруулна уу!<br/>");
    phone || (validation += "Утас оруулна уу!<br/>");
    if (validation !== "") {
      Swal.fire({
        icon: "warning",
        html: validation,
        confirmButtonColor: "#395C4D",
      });
    } else {
      const formData = new FormData();
      formData.append("address", address);
      formData.append("url", url);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("facebook", facebook);
      formData.append("instagram", instagram);
      formData.append("twitter", twitter);
      API.putFooter(formData)
        .then((res) => {
          if (res.data.success) {
            setAddress(res.data.data.address);
            setUrl(res.data.data.url);
            setPhone(res.data.data.phone);
            setEmail(res.data.data.email);
            setFacebook(res.data.data.facebook);
            setInstagram(res.data.data.instagram);
            setTwitter(res.data.data.twitter);
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
            text: err.message,
            confirmButtonColor: "#395C4D",
          });
        });
    }
  };

  useEffect(() => {
    API.getFooter()
      .then((res) => {
        if (res.data.success) {
          setAddress(res.data.data[0].address);
          setUrl(res.data.data[0].url);
          setPhone(res.data.data[0].phone);
          setEmail(res.data.data[0].email);
          setFacebook(res.data.data[0].facebook);
          setInstagram(res.data.data[0].instagram);
          setTwitter(res.data.data[0].twitter);
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#395C4D",
        });
      });
  }, []);
  // Footer

  // Logo
  const [logo, setLogo] = useState(false);
  const [logo_list, setLogo_list] = useState([]);
  const [logo_refresh, setLogo_refresh] = useState(1);

  const [logo_id, setLogo_id] = useState("new");
  const [logo_img, setLogo_img] = useState();
  const [logo_url, setLogo_url] = useState("");

  const LogoSave = () => {
    let validation = "";
    logo_url || (validation += "Хаяг оруулна уу!<br/>");
    logo_img || (validation += "Зураг оруулна уу!<br/>");
    if (validation !== "") {
      Swal.fire({
        icon: "warning",
        html: validation,
        confirmButtonColor: "#395C4D",
      });
    } else {
      const formData = new FormData();
      formData.append("img", logo_img);
      formData.append("url", logo_url);
      API.postLogo(logo_id, formData)
        .then((res) => {
          if (res.data.success) {
            setLogo_id("new");
            setLogo_img();
            setLogo_url("");
            setLogo_refresh(logo_refresh + 1);
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
            text: err.message,
            confirmButtonColor: "#395C4D",
          });
        });
    }
  };

  const LogoDelete = (id) => {
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
        API.deleteLogo(id)
          .then((res) => {
            setLogo_refresh(logo_refresh + 1);
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
              text: err.message,
              confirmButtonColor: "#395C4D",
            });
          });
      }
    });
  };

  useEffect(() => {
    API.getLogo()
      .then((res) => setLogo_list(res.data.data))
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#395C4D",
        });
      });
  }, [logo_refresh]);

  // Logo

  // Home
  const [home, setHome] = useState(false);
  const [home_refresh, setHome_refresh] = useState(1);
  const [url1, setUrl1] = useState();
  const [url2, setUrl2] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const HomeSave = () => {
    let validation = "";
    url1 || (validation += "Ковер зураг оруулна уу!<br/>");
    url2 || (validation += "Лого зураг оруулна уу!<br/>");
    title || (validation += "Гарчиг оруулна уу!<br/>");
    desc || (validation += "Тайлбар оруулна уу!<br/>");
    if (validation !== "") {
      Swal.fire({
        icon: "warning",
        html: validation,
        confirmButtonColor: "#395C4D",
      });
    } else {
      const formData = new FormData();
      formData.append("url1", url1);
      formData.append("url2", url2);
      formData.append("title", title);
      formData.append("desc", desc);
      API.putHome(formData)
        .then((res) => {
          if (res.data.success) {
            setHome_refresh(home_refresh + 1);
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
            text: err.message,
            confirmButtonColor: "#395C4D",
          });
        });
    }
  };

  useEffect(() => {
    API.getHome()
      .then((res) => {
        setUrl1(res.data.data[0].url1);
        setUrl2(res.data.data[0].url2);
        setTitle(res.data.data[0].title);
        setDesc(res.data.data[0].desc);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#395C4D",
        });
      });
  }, [home_refresh]);

  // Home

  return (
    <div className="font-[roboto] mx-4">
      <div className="flex">
        <div
          className="bg-[#395C4D] text-gray-200 flex items-center justify-center py-2 rounded-md tracking-widest cursor-pointer px-4 mr-4"
          onClick={() => {
            setHome(!home);
            setLogo(false);
            setFooter(false);
          }}
        >
          Home
        </div>
        <div
          className="bg-[#395C4D] text-gray-200 flex items-center justify-center py-2 rounded-md tracking-widest cursor-pointer px-4 mr-4"
          onClick={() => {
            setLogo(!logo);
            setFooter(false);
            setHome(false);
          }}
        >
          Logo
        </div>
        <div
          className="bg-[#395C4D] text-gray-200 flex items-center justify-center py-2 rounded-md tracking-widest cursor-pointer px-4 mr-4"
          onClick={() => {
            setFooter(!footer);
            setLogo(false);
            setHome(false);
          }}
        >
          Footer
        </div>
      </div>

      {/* footer */}
      {footer && (
        <div className="flex">
          <div className="flex-1 mr-4">
            <div className="mt-3">
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
                JPG or PNG ( MAX 400x230px )
              </p>
            </div>
            <div className="mt-3">
              <label className="block tracking-wide mb-1">Хаяг</label>
              <input
                className="appearance-none block w-full bg-gray-50 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label className="block tracking-wide mb-1">Утас</label>
              <input
                className="appearance-none block w-full bg-gray-50 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label className="block tracking-wide mb-1">Email</label>
              <input
                className="appearance-none block w-full bg-gray-50 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center mt-4">
              <div
                className="bg-[#395C4D] text-gray-200 px-6 py-2 rounded-3xl tracking-widest cursor-pointer"
                onClick={() => {
                  Update();
                }}
              >
                Хадгалах
              </div>
            </div>
          </div>
          <div className="flex-1 ml-4">
            <div className="mt-3">
              <label className="block tracking-wide mb-1">Facebook</label>
              <input
                className="appearance-none block w-full bg-gray-50 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                type="text"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label className="block tracking-wide mb-1">Instagram</label>
              <input
                className="appearance-none block w-full bg-gray-50 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label className="block tracking-wide mb-1">Twitter</label>
              <input
                className="appearance-none block w-full bg-gray-50 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                type="text"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
      {/* footer */}
      {/* logo */}
      {logo && (
        <div className="flex">
          <div className="flex-1 mr-4">
            <div className="mt-3">
              <label className="block tracking-wide mb-1">Хаяг</label>
              <input
                className="appearance-none block w-full bg-gray-50 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                type="text"
                onChange={(e) => {
                  setLogo_url(e.target.value);
                }}
                value={logo_url}
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
                  onChange={(e) => setLogo_img(e.target.files[0])}
                  id="asdasd"
                />
              </label>
              <div className="text-xl text-green-800">
                {logo_img?.name ? logo_img?.name : logo_img}
              </div>
              <p className="mt-1 text-sm text-red-500">
                JPG or PNG ( MAX 500x500px )
              </p>
            </div>
            <div className="flex items-center mt-4">
              <div
                className="bg-[#395C4D] text-gray-200 px-6 py-2 rounded-3xl tracking-widest cursor-pointer"
                onClick={() => {
                  LogoSave();
                }}
              >
                Хадгалах
              </div>
            </div>
          </div>
          <div className="flex-1 ml-4">
            <div className="mt-3">
              <label className="block tracking-wide mb-1">
                Сүүлд оруулсан логонууд
              </label>
            </div>
            <div className="max-h-[650px] overflow-auto">
              {logo_list.length > 0 &&
                logo_list.map((el) => {
                  return (
                    <div
                      className="flex items-center justify-between py-2"
                      key={el.id}
                    >
                      <img
                        src={"https://mmmall.mn" + el.img}
                        alt=""
                        className="w-14 h-14 object-cover rounded-xl mr-8"
                      />
                      <div className="pr-4">
                        <div className="text-sm font-semibold mb-2">
                          {el.url}
                        </div>
                      </div>
                      <div className="flex">
                        <div
                          className="mr-2 text-white bg-[#395C4D] rounded-lg cursor-pointer"
                          onClick={() => {
                            setLogo_id(el.id);
                            setLogo_img(el.img);
                            setLogo_url(el.url);
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
                          onClick={() => {
                            LogoDelete(el.id);
                          }}
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
      )}
      {/* logo */}
      {/* Home */}
      {home && (
        <div className="flex">
          <div className="flex-1 mr-4">
            <div className="mt-3">
              <label className="block tracking-wide mb-1">Гарчиг</label>
              <input
                className="appearance-none block w-full bg-gray-50 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />
            </div>
            <div className="mt-3">
              <label className="block tracking-wide mb-1">Тайлбар</label>
              <textarea
                rows="6"
                className="block p-2.5 w-full  bg-gray-50 rounded-lg border border-gray-300  focus:outline-none"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                value={desc}
              />
            </div>
            <div className="mt-4">
              <label className="block tracking-wide mb-1">
                Ковер зураг оруулах
              </label>
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
                  onChange={(e) => setUrl1(e.target.files[0])}
                  id="asdasd"
                />
              </label>
              <div className="text-xl text-green-800">
                {url1?.name ? url1?.name : url1}
              </div>
              <p className="mt-1 text-sm text-red-500">
                JPG or PNG ( MAX 1440x800px )
              </p>
            </div>
            <div className="mt-4">
              <label className="block tracking-wide mb-1">
                Лого зураг оруулах
              </label>
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
                  onChange={(e) => setUrl2(e.target.files[0])}
                  id="asdasd"
                />
              </label>
              <div className="text-xl text-green-800">
                {url2?.name ? url2?.name : url2}
              </div>
              <p className="mt-1 text-sm text-red-500">
                JPG or PNG ( MAX 500x500px )
              </p>
            </div>
            <div className="flex items-center mt-4">
              <div
                className="bg-[#395C4D] text-gray-200 px-6 py-2 rounded-3xl tracking-widest cursor-pointer"
                onClick={() => {
                  HomeSave();
                }}
              >
                Хадгалах
              </div>
            </div>
          </div>
          <div className="flex-1 ml-4"></div>
        </div>
      )}
      {/* Home */}
    </div>
  );
};

export default React.memo(Setting);

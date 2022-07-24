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
  // const [logo_id, setLogo_id] = useState("new");
  // Logo

  return (
    <div className="font-[roboto] mx-4">
      <div className="flex">
        <div
          className="bg-[#395C4D] text-gray-200 flex items-center justify-center py-2 rounded-md tracking-widest cursor-pointer px-4 mr-4"
          onClick={() => {
            setFooter(!footer);
            setLogo(false);
          }}
        >
          Footer
        </div>
        <div
          className="bg-[#395C4D] text-gray-200 flex items-center justify-center py-2 rounded-md tracking-widest cursor-pointer px-4"
          onClick={() => {
            setLogo(!logo);
            setFooter(false);
          }}
        >
          Logo
        </div>
      </div>

      {/* footer */}
      {footer && (
        <div className="">
          <div className="flex justify-center items-center w-full mt-2">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col justify-center items-center w-full h-64 bg-gray-100 rounded-lg border-2 border-gray-100 border-dashed cursor-pointer dark:hover:bg-bray-100 dark:bg-gray-100 hover:bg-gray-100 dark:border-gray-400 dark:hover:border-gray-500 dark:hover:bg-gray-100"
            >
              {url ? (
                url.name ? (
                  url.name
                ) : (
                  <img src={"https://mmmall.mn" + url} alt="" className="" />
                )
              ) : (
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="mb-3 w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Энд дарж</span> зураг
                    оруулна уу
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG or JPG ( 400x230px )
                  </p>
                </div>
              )}

              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept="image/png, image/jpeg"
                onChange={(e) => setUrl(e.target.files[0])}
              />
            </label>
          </div>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="text"
            placeholder="Хаяг"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="text"
            placeholder="Утас"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="text"
            placeholder="Facebook"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="text"
            placeholder="Instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="text"
            placeholder="Twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
          <div className="flex items-center justify-center">
            <div
              className="py-2 px-4 mt-2 bg-[#395C4D] flex items-center justify-center w-[200px] rounded-xl text-white tracking-widest cursor-pointer"
              onClick={() => Update()}
            >
              Хадгалах
            </div>
          </div>
        </div>
      )}
      {/* footer */}
      {/* logo */}
      {logo && <div>logo</div>}
      {/* logo */}
    </div>
  );
};

export default React.memo(Setting);

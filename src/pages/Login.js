import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSealState } from "../pages/Context";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { setState } = useSealState();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
      setUserName(localStorage.getItem("username"));
      setPassword(localStorage.getItem("password"));
    }
  }, []);

  const Login = () => {
    let validation = "";
    username || (validation += "Нэр оруулна уу.<br/>");
    password || (validation += "Нууц үг оруулна уу.<br/>");
    if (validation !== "") {
      Swal.fire({
        icon: "warning",
        html: validation,
      });
    } else {
      axios
        .post(
          "https://mmmall.mn/api/sealjet/auth/login",
          { username: username, password: password },
          {
            "Content-Type": "application/json",
          }
        )
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem("data", JSON.stringify(res.data));
            setState({ type: "LOGIN", data: res.data });
            navigate("/admin", { replace: true });
          } else {
            Swal.fire({
              icon: "warning",
              text: res.data.message,
              confirmButtonColor: "#0e965a",
            });
          }
        });
    }
  };

  return (
    <div className="flex h-screen mx-auto w-full max-w-full items-center justify-center bg-[#395C4D] ">
      <div className="mx-auto p-8 w-[450px] rounded">
        <div className="flex items-center justify-center mb-8">
          <img src="/img/logo.png" alt="" />
        </div>
        <div className="text-gray-200 mb-2 tracking-widest">Нэвтрэх нэр</div>
        <input
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none"
          type="text"
          placeholder="Нэр"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <div className="text-gray-200 mb-2 tracking-widest">Нууц үг</div>
        <input
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 mb-6 leading-tight focus:outline-none"
          type="password"
          placeholder="Нууц үг"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-[#0E9151] py-1 px-4 text-white font-bold rounded w-full tracking-widest"
          onClick={(e) => {
            e.preventDefault();
            Login();
          }}
        >
          Нэвтрэх
        </button>
      </div>
    </div>
  );
};

export default React.memo(Login);

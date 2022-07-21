import React, { useContext, useReducer, useEffect } from "react";
import Reducer from "../pages/Reducer";

const Context = React.createContext();

const initialState = {
  userInfo: {},
  loggedIn: false,
  header: false,
  menu: [
    { id: 1, url: "/", name: "Нүүр" },
    { id: 2, url: "/material", name: "Материал" },
    { id: 3, url: "/product", name: "Бүтээгдэхүүн" },
    { id: 4, url: "/news", name: "Мэдээ" },
    { id: 5, url: "/order", name: "Захиалах" },
  ],
  admin_menu: [
    {
      id: 1,
      url: "/admin/order",
      class: "fa-regular fa-square-check",
      name: "Захиалга",
    },
    {
      id: 2,
      url: "/admin/product",
      class: "fa-brands fa-codepen",
      name: "Бүтээгдэхүүн",
    },
    {
      id: 3,
      url: "/admin/news",
      class: "fa-regular fa-file-lines",
      name: "Мэдээ",
    },
    {
      id: 4,
      url: "/admin/material",
      class: "fa-solid fa-box-archive",
      name: "Материал",
    },
    {
      id: 5,
      url: "/admin/setting",
      class: "fa-solid fa-gear",
      name: "Тохиргоо",
    },
  ],
  menu_url: undefined,
  sidebar: false,
  toggle: false,
  search_value: "",
  cat_id: 0,
  productList: [],
};

export const useSealState = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useState нь ContextProvider дотор ашиглагдах ёстой.");
  }
  return context;
};

const ContextProvider = ({ children }) => {
  const [state, setState] = useReducer(Reducer, initialState);

  const logOut = () => {
    localStorage.removeItem("data");
    setState({ type: "LOGOUT" });
    window.location = "/";
  };

  useEffect(() => {
    if (localStorage.getItem("data")) {
      const userdata = localStorage.getItem("data");
      setState({ type: "LOGIN", data: JSON.parse(userdata) });
    }
  }, []);

  return (
    <Context.Provider
      value={{
        state,
        setState,
        logOut,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default React.memo(ContextProvider);

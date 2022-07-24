import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Category from "../components/Category";
import { useSealState } from "./Context";
import * as API from "../api/requests";
import Swal from "sweetalert2";

const Product = () => {
  const navigate = useNavigate();
  const { state, setState } = useSealState();
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (window.innerWidth < 640) {
      setState({ type: "CHANGE_HEADER", data: false });
    }
  }, [setState]);

  useEffect(() => {
    API.getProduct()
      .then((res) => setData(res.data.data))
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#395C4D",
        });
      });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      var result = data;
      if (state.cat_id !== 0) {
        result = result.filter((el) => el.cat_id === state.cat_id);
      }
      if (state.search_value !== "") {
        result = result.filter(
          (el) =>
            el.name.toLowerCase().includes(state.search_value.toLowerCase()) ||
            el.code.toLowerCase().includes(state.search_value.toLowerCase())
        );
      }
      setList(result);
    }
  }, [data, state.cat_id, state.search_value]);

  return (
    <div className="max-w-7xl mx-auto">
      <Category />
      <div className="pt-[116px] flex flex-col justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
          {list.length > 0 ? (
            list.map((el) => {
              return (
                <div className="m-4 rounded-xl bg-white" key={el.id}>
                  <img
                    src={"https://mmmall.mn" + el.url}
                    alt=""
                    className="rounded-t-xl object-cover cursor-pointer"
                    onClick={() => navigate("/product/" + el.id)}
                  />
                  <div className="text-xs text-center text-gray-600 py-1 sm:py-2 md:text-base border-t">
                    {el.name + " " + el.code}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-4">Бүтээгдэхүүн олдсонгүй...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Product);

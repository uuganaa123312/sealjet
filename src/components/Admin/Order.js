import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import moment from "moment";
import * as API from "../../api/requests";

const Order = () => {
  const [list, setList] = useState([]);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    API.getOrder()
      .then((res) => {
        setList(res.data.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.message,
          confirmButtonColor: "#395C4D",
        });
      });
  }, [refresh]);

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
        API.deleteOrder(id)
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
              text: err.message,
              confirmButtonColor: "#395C4D",
            });
          });
      }
    });
  };

  return (
    <div className="mx-4 text-[#244437] font-[roboto]">
      <div className="text-xl font-bold ">Захиалга</div>
      <div className="grid grid-cols-6 py-2 font-semibold">
        <div>Овог, нэр</div>
        <div>Холбогдох утас</div>
        <div>И-мэйл</div>
        <div>Бүтээгдэхүүний хүсэлт</div>
        <div>Огноо</div>
        <div>Үйлдэл</div>
      </div>
      <div className="overflow-y-auto max-h-[650px]">
        {list.length > 0 &&
          list.map((el, index) => {
            return (
              <div className="grid grid-cols-6 py-1" key={index}>
                <div>{el.name}</div>
                <div>{el.phone}</div>
                <div>{el.email}</div>
                <div>{el.product}</div>
                <div>{moment(el.createdDate).format("YYYY-MM-DD")}</div>
                <div className="flex text-xs">
                  <div
                    className="py-1 px-2 bg-[#395C4D] text-gray-100 rounded-md flex items-center justify-center cursor-pointer ml-1"
                    onClick={() => Delete(el.id)}
                  >
                    Устгах
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default React.memo(Order);

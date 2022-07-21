import axios from "axios";
import Swal from "sweetalert2";

const URL = "https://mmmall.mn/api/sealjet";

export function SEALJET() {
  return createInstance(URL);
}

const createInstance = (baseURL) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const token =
    typeof window !== "undefined" ? localStorage.getItem("data") : null;

  if (token != null) {
    Object.assign(headers, {
      Authorization: "Bearer " + JSON.parse(token).accessToken,
    });
  }

  let api = axios.create({
    baseURL: baseURL,
    timeout: 200000,
    headers,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status !== 503) {
        if (error.message !== "Network Error") {
          if (error.response.status === 401) {
            // localStorage.removeItem("data");
          } else {
            throw error;
          }
        } else {
          Swal.fire({
            icon: "warning",
            text: "Сервис дээр алдаа гарлаа.",
            confirmButtonColor: "#0e965a",
          });
          throw error;
        }
      } else {
        Swal.fire({
          icon: "warning",
          text: "Сервис дээр алдаа гарлаа.",
          confirmButtonColor: "#0e965a",
        });
        throw error;
      }
    }
  );
  return api;
};

// Footer
export async function putFooter(formData) {
  const response = await SEALJET().put(
    "/footer/62d909d85abfdf140a578cda",
    formData
  );
  return response;
}

export async function getFooter() {
  const response = await SEALJET().get("/footer");
  return response;
}

export async function deleteFooter(id) {
  const response = await SEALJET().delete("/footer/" + id);
  return response;
}
// Footer

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
// Order
export async function postOrder(formData) {
  const response = await SEALJET().post("/order", formData);
  return response;
}
export async function getOrder() {
  const response = await SEALJET().get("/order");
  return response;
}
export async function deleteOrder(id) {
  const response = await SEALJET().delete("/order/" + id);
  return response;
}
// Order
// Footer
export async function putFooter(formData) {
  const response = await SEALJET().put(
    "/footer/62d935e5af8a5c1848c2ec74",
    formData
  );
  return response;
}

export async function getFooter() {
  const response = await SEALJET().get("/footer");
  return response;
}
// Footer
// News
export async function postNews(id, formData) {
  if (id === "new") {
    const response = await SEALJET().post("/news", formData);
    return response;
  } else {
    const response = await SEALJET().put("/news/" + id, formData);

    return response;
  }
}
export async function getNews() {
  const response = await SEALJET().get("/news");
  return response;
}
export async function deleteNews(id) {
  const response = await SEALJET().delete("/news/" + id);
  return response;
}
// News
// Material
export async function postMaterial(id, formData) {
  if (id === "new") {
    const response = await SEALJET().post("/material", formData);
    return response;
  } else {
    const response = await SEALJET().put("/material/" + id, formData);

    return response;
  }
}
export async function getMaterial() {
  const response = await SEALJET().get("/material");
  return response;
}
export async function deleteMaterial(id) {
  const response = await SEALJET().delete("/material/" + id);
  return response;
}
// Material

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
export async function getNewsOne(id) {
  const response = await SEALJET().get("/news/" + id);
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
export async function getMaterialOne(id) {
  const response = await SEALJET().get("/material/" + id);
  return response;
}
export async function deleteMaterial(id) {
  const response = await SEALJET().delete("/material/" + id);
  return response;
}
// Material
// Product
export async function postProduct(id, formData) {
  if (id === "new") {
    const response = await SEALJET().post("/product", formData);
    return response;
  } else {
    const response = await SEALJET().put("/product/" + id, formData);

    return response;
  }
}
export async function getProduct() {
  const response = await SEALJET().get("/product");
  return response;
}
export async function getProductOne(id) {
  const response = await SEALJET().get("/product/" + id);
  return response;
}
export async function deleteProduct(id) {
  const response = await SEALJET().delete("/product/" + id);
  return response;
}
// Product
// Category
export async function postCategory(id, params) {
  if (id === "new") {
    const response = await SEALJET().post("/category", {
      ...params,
    });
    return response;
  } else {
    const response = await SEALJET().put("/category/" + id, {
      ...params,
    });

    return response;
  }
}
export async function getCategory() {
  const response = await SEALJET().get("/category");
  return response;
}
export async function deleteCategory(id) {
  const response = await SEALJET().delete("/category/" + id);
  return response;
}
// Category
// Temp
export async function getProductChild(type, id) {
  const response = await SEALJET().get(type + id);
  return response;
}
export async function postProductChild(type, product_id, tempData) {
  const response = await SEALJET().post(type + product_id, tempData);
  return response;
}
export async function deleteProductChild(type, product_id, id) {
  const response = await SEALJET().delete(type + product_id + "/" + id);
  return response;
}
// Temp
// Logo
export async function getLogo() {
  const response = await SEALJET().get("/logo");
  return response;
}
export async function postLogo(id, formData) {
  if (id === "new") {
    const response = await SEALJET().post("/logo", formData);
    return response;
  } else {
    const response = await SEALJET().put("/logo/" + id, formData);
    return response;
  }
}
export async function deleteLogo(id) {
  const response = await SEALJET().delete("/logo/" + id);
  return response;
}
// Logo
// Logo
export async function getHome() {
  const response = await SEALJET().get("/main");
  return response;
}
export async function putHome(formData) {
  const response = await SEALJET().put(
    "/main/62de982ab9cd5829e02b3b8f",
    formData
  );
  return response;
}

// Logo

import http from "./http-common";

export const getAllProduct = () => {
  return http.get(`/product-upc`);
};
export const getInfoUser = () => {
  return http.post(`/users/get-user-info`);
};

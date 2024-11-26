import http from "./http-common";

export const getAllProduct = () => {
  return http.get(`/item/get-all`);
};

export const getAllDeal = () => {
  return http.get(`/deal/get-all`);
};
export const getInfoUser = () => {
  return http.get(`/user/get-info`);
};

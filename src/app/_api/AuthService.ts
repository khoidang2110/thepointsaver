import http from "./http-common";

export const getAllProduct = () => {
  return http.get(`/item/get-all`);
};

export const getAllDeal = (payload: any) => {
  return http.get(`/deal/get-deal`);
};
export const getInfoUser = () => {
  return http.get(`/user/get-info`);
};

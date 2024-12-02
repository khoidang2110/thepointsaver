import http from "./http-common";

export const getAllProduct = () => {
  return http.get(`/item/get-all`);
};

export const getAllDeal = (payload: any) => {
  return http.post(`/deal/get-deal`, payload);
};

export const getInfoUser = () => {
  return http.get(`/user/get-info`);
};

export const getDetailDeal = (payload: any) => {
  return http.get(`/deal/get-deal-detail/${payload}`);
};

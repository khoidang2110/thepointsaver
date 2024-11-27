import http from "./http-common";

export const getAllProduct = () => {
  return http.get(`/item/get-all`);
};

export const getAllDeal = (payload: any) => {
  console.log("payload", payload);
  return http.get(`/deal/get-all/asd/1/1`);
};
export const getInfoUser = () => {
  return http.get(`/user/get-info`);
};

import http from "./http-common";

export const getAllProduct = () => {
  return http.get(`/item/get-all`);
};

export const getAllDeal = (payload: any) => {
  return http.post(`/deal/get-deals`, payload);
};

export const getInfoUser = () => {
  return http.get(`/user/get-info`);
};

export const getDetailDeal = (payload: any) => {
  return http.get(`/deal/get-info/${payload}`);
};

export const postSaveCommitments = (payload: any) => {
  return http.post(`/commitment/save-commitments`, payload);
};

export const getCommitments = (payload: any) => {
  return http.post(`/commitment/get-commitments`, payload);
};

export const getListStore = () => {
  return http.get(`/stores/get-list`);
};

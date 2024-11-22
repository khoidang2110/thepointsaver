import http from "./http-common";
export const postLogin = (payload: any) => {
  return http.post(`/auth/login`, payload);
};

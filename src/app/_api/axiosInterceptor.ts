// import { Tokens } from '../constants';

const axiosInterceptor = {
  setupInterceptors: (axios: any, isToken = false, isFormData = false) => {
    axios.interceptors.request.use(
      (config: any) => {
        if (isToken) {
          return config;
        }

        let token = localStorage.getItem("authUser");
        if (token) {
          config.headers["auth_token"] = `${token}`;
        }

        if (isFormData) {
          config.headers["Content-Type"] = "multipart/form-data";
        }
        return config;
      },
      (error: any) => {
        console.log("error", error);
        return Promise.reject(error);
      },
    );
    axios.interceptors.response.use(
      (response: any) => {
        return response;
      },
      (error: any) => {
        if (error.status === 401) {
          localStorage.removeItem("authUser");
          window.location.href = "/login";
          return Promise.reject(error);
        }
        return error;
      },
    );
  },
};

export default axiosInterceptor;

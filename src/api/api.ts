import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosParams = {
  baseURL: "https://frontend-challenge-api-xpjf.onrender.com",
};

const axiosInstance = axios.create(axiosParams);

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
  };
};

export default api(axiosInstance);

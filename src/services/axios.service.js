import { createBrowserHistory } from "@remix-run/router";
import axios from "axios";
import { baseURL } from "../constants/urls";
import { authService } from "../services";

const history = createBrowserHistory();

const axiosService = axios.create({
  baseURL,
});

axiosService.interceptors.request.use((config) => {
  const access_token = authService.getAccessToken();

  if (access_token) {
    config.headers.Authorization = access_token;
  }

  return config;
});

let isRefreshing = false;

axiosService.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const refreshToken = authService.getRefreshToken();

    if (
      error.response?.status === 400 &&
      error.config &&
      !isRefreshing &&
      refreshToken
    ) {
      isRefreshing = true;
      try {
        const { data } = await authService.getRefreshToken();

        authService.setTokens(data);
      } catch (e) {
        authService.deleteTokens();

        return history.replace("/login?expireToken=true");
      }
      isRefreshing = false;
      return axiosService(error.config);
    }
    return Promise.reject(error);
  }
);

export { axiosService, history };

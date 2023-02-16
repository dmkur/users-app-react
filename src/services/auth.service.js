import { axiosService } from "./axios.service";
import { urls } from "../constants/urls";

const _accessTokenKey = "access_token";
const _refreshTokenKey = "refresh_token";

const authService = {
  login: (data) => axiosService.post(urls.login, data),

  setTokens: ({ access_token, refresh_token }) => {
    localStorage.setItem(_accessTokenKey, access_token);
    localStorage.setItem(_refreshTokenKey, refresh_token);
  },
  deleteTokens: () => {
    localStorage.removeItem(_accessTokenKey);
    localStorage.removeItem(_refreshTokenKey);
  },

  getAccessToken: () => localStorage.getItem(_accessTokenKey),
  getRefreshToken: () => localStorage.getItem(_refreshTokenKey),
};

export { authService };

import { data } from "autoprefixer";
import axios from "axios";
import { config } from "dotenv";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "http://[::1]:3000";

export const axiosClient = axios.create({
  baseURL: `${BACKEND_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const refreshRefreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  try {
    const res = await axiosClient.post("/auth/refresh", null, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    console.log("refresh data", res.data);
    localStorage.setItem("refreshToken", res.data.refreshToken);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createAxios = (currentUser, dispatch, stateSuccess) => {
  const refreshToken = localStorage.getItem("refreshToken");

  const navigate = useNavigate();
  const newInstance = axios.create({
    baseURL: `${BACKEND_URL}/api/v1`,
  });

  newInstance.interceptors.request.use(async (config) => {
    let date = new Date();
    const decodedToken = jwtDecode(currentUser?.tokens.accessToken);

    if (decodedToken.exp < date.getTime() / 1000) {
      try {
        const data = await refreshRefreshToken();
        const refreshCurrentUser = {
          ...currentUser,
          tokens: {
            accessToken: data.accessToken,
            refreshToken,
          },
        };

        dispatch(stateSuccess(refreshCurrentUser));
        config.headers[
          "Authorization"
        ] = `Bearer ${currentUser.tokens.accessToken}`;

        return config;
      } catch (error) {
        return Promise.reject(err);
      }
    }
  });
  return newInstance;
};

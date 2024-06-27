import { axiosClient } from "../api/axiosConfig";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
} from "../redux/slices/authSlice";

export const loginUserService = async (
  { username, password },
  dispatch,
  navigate
) => {
  dispatch(loginStart());
  try {
    const payload = { username, password };
    const res = await axiosClient.post("/auth/sign-in", payload);
    dispatch(loginSuccess(res.data.data));
    navigate("/");
    localStorage.setItem("refreshToken", res.data.data.tokens.refreshToken);
    return res.data.data;
  } catch (error) {
    dispatch(loginFailed());
    throw error;
  }
};

export const logoutService = async (
  dispatch,
  navigate,
  accessToken,
  axiosJWT
) => {
  dispatch(logoutStart());
  try {
    await axiosJWT.post("/auth/logout", null, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(logoutSuccess());
    navigate("/");
    localStorage.removeItem("refreshToken");
    return true;
  } catch (error) {
    dispatch(logoutFailed());
    throw error;
  }
};

export const registerUserService = async (
  { firstName, lastName, email, phone, username, password, role },
  dispatch,
  navigate
) => {
  try {
    const payload = {
      firstName,
      lastName,
      email,
      phone,
      username,
      password,
      role,
    };

    const res = await axiosClient.post("/auth/sign-up", payload);
    navigate("/");
    return res.data;
  } catch (error) {
    throw error;
  }
};

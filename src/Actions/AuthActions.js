import axios from "axios";
import { BASE_URL, LOGIN_URL } from "../Constant/CommonApi";
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${BASE_URL}${LOGIN_URL}`,

        {
          email,
          password,
        }
      );
      const { token } = response.result.token;
      dispatch(loginSuccess(token));
      localStorage.setItem("token", token);
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
};

export const loginSuccess = (token) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: token,
  };
};

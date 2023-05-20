import axios from "axios";
import { BASE_URL, ADD_USER_URL, ADD_UPDATE_URL } from "../Constant/CommonApi";

export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";

export const addUserSuccess = (user) => ({
  type: ADD_USER_SUCCESS,
  payload: user,
});

export const updateUserSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
});

export const addUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${BASE_URL}${ADD_USER_URL}`,

        userData
      );
      const newUser = response.data.result;
      dispatch(addUserSuccess(newUser));
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
};

export const updateUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${BASE_URL}${ADD_UPDATE_URL}`,

        userData
      );
      const updatedUser = response.data.result;
      dispatch(updateUserSuccess(updatedUser));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
};

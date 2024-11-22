import {
  CURRENT_USER,
  DELETE_USER,
  ERROR_USER,
  LOAD_USER,
  LOAD_USERS,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  RESET_PASSWORD,
} from "../ActionTypes/ActionTypes";
import axios from "axios";

// Log in a user
export const loginUser = (email, password) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const response = await axios.post("http://localhost:8000/api/user/login", {
      email,
      password,
    });
    dispatch({
      type: LOGIN_USER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_USER,
      payload: error,
    });
  }
};

// Log out a user
export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    dispatch({
      type: LOGOUT_USER,
    });
  } catch (error) {
    dispatch({
      type: ERROR_USER,
      payload: error,
    });
  }
};

// Register a new user
export const registerUser = (newUser) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const response = await axios.post(
      "http://localhost:8000/api/user/register",
      newUser
    );
    dispatch({
      type: REGISTER_USER,
      payload: response.data,
    });
    console.log("Login Response:", response.data);
  } catch (error) {
    dispatch({
      type: ERROR_USER,
      payload: error,
    });
  }
};

// Delete a user by ID
export const deleteUser = (_id) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/user/${_id}` // Updated route
    );
    dispatch({
      type: DELETE_USER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_USER,
      payload: error,
    });
  }
};

// Reset user's password by ID
export const resetPasswordUser = (_id, newPassword) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const response = await axios.put(
      `http://localhost:8000/api/user/${_id}/reset-password`, // Updated route
      { newPassword }
    );
    dispatch({
      type: RESET_PASSWORD,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_USER,
      payload: error,
    });
  }
};

// Get current logged-in user
export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const response = await axios.post(
      "http://localhost:8000/api/user/current", // Updated route
      config
    );
    dispatch({
      type: CURRENT_USER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_USER,
      payload: error,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const response = await axios.get("http://localhost:8000/api/user/all");
    dispatch({
      type: LOAD_USERS,
      payload: response.data.users || response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_USER,
      payload: error,
    });
  }
};

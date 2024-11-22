import axios from "axios";
import {
  ADD_ORDER,
  DELETE_ORDER,
  ERROR_ORDER,
  GET_ALL_ORDERS,
  GET_ORDER_BY_ID,
  LOAD_ORDERS,
  UPDATE_ORDER,
} from "../ActionTypes/ActionTypes";

// Add a new order
export const addOrder = (newOrder) => async (dispatch) => {
  dispatch({ type: LOAD_ORDERS });
  try {
    const response = await axios.post(
      "http://localhost:8000/api/order/",
      newOrder
    );
    dispatch({
      type: ADD_ORDER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ORDER,
      payload: error,
    });
  }
};

// Get an order by its ID
export const getOrderById = (_id) => async (dispatch) => {
  dispatch({ type: LOAD_ORDERS });
  try {
    const response = await axios.get(`http://localhost:8000/api/order/${_id}`);
    dispatch({
      type: GET_ORDER_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ORDER,
      payload: error,
    });
  }
};

// Get all orders
export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: LOAD_ORDERS });
  try {
    const response = await axios.get("http://localhost:8000/api/order/");
    dispatch({
      type: GET_ALL_ORDERS,
      payload: response.data.orders || response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ORDER,
      payload: error,
    });
  }
};

// Delete an order by its ID
export const deleteOrder = (_id) => async (dispatch) => {
  dispatch({ type: LOAD_ORDERS });
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/order/${_id}`
    );
    dispatch({
      type: DELETE_ORDER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_ORDER,
      payload: error,
    });
  }
};

// Update an order by its ID
export const updateOrder =
  ({ _id, updatedOrder }) =>
  async (dispatch) => {
    dispatch({ type: LOAD_ORDERS });
    try {
      const response = await axios.put(
        `http://localhost:8000/api/order/${_id}`,
        updatedOrder
      );
      dispatch({
        type: UPDATE_ORDER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_ORDER,
        payload: error,
      });
    }
  };

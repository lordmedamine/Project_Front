import axios from "axios";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  ERROR_PRODUCT,
  GET_PRODUCT_BY_ID,
  GET_PRODUCTS,
  LOAD_PRODUCT,
  UPDATE_PRODUCT,
} from "../ActionTypes/ActionTypes";

// Add a new product
export const addProduct = (newProduct) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const response = await axios.post(
      "http://localhost:8000/api/product/", // URL adjusted to match the new route
      newProduct
    );
    dispatch({
      type: ADD_PRODUCT,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_PRODUCT,
      payload: error,
    });
  }
};

// Update a product by ID
export const updateProduct = (_id, updatedProduct) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const response = await axios.put(
      `http://localhost:8000/api/product/${_id}`, // URL adjusted to match the new route
      updatedProduct
    );
    dispatch({
      type: UPDATE_PRODUCT,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_PRODUCT,
      payload: error,
    });
  }
};

// Delete a product by ID
export const deleteProduct = (_id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/product/${_id}` // URL adjusted to match the new route
    );
    dispatch({
      type: DELETE_PRODUCT,
      payload: response.data,
    });
    getProducts(); // Fetch updated products after deleting
  } catch (error) {
    dispatch({
      type: ERROR_PRODUCT,
      payload: error,
    });
  }
};

// Get a product by its ID
export const getProductById = (_id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const response = await axios.get(
      `http://localhost:8000/api/product/${_id}` // URL adjusted to match the new route
    );
    dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_PRODUCT,
      payload: error,
    });
  }
};

// Get all products
export const getProducts = () => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    const response = await axios.get(
      "http://localhost:8000/api/product/" // URL adjusted to match the new route
    );
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_PRODUCT,
      payload: error,
    });
  }
};

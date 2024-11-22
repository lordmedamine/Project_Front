import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  UPDATE_CART_ITEM,
} from "../ActionTypes/ActionTypes";

export const addToCart = (product) => (dispatch, getState) => {
  const { cart } = getState();
  const existingItem = cart.items.find((item) => item._id === product._id);

  if (existingItem) {
    dispatch({
      type: UPDATE_CART_ITEM,
      payload: { ...existingItem, quantity: existingItem.quantity + 1 },
    });
  } else {
    dispatch({
      type: ADD_TO_CART,
      payload: { ...product, quantity: 1 },
    });
  }
};

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

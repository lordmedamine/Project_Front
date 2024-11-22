const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  UPDATE_CART_ITEM,
} = require("../ActionTypes/ActionTypes");

const initialState = {
  items: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemExists = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (itemExists) {
        return {
          ...state,
          items: state.items.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        return { ...state, items: [...state.items, action.payload] };
      }

    case UPDATE_CART_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    case CLEAR_CART:
      return { ...state, items: [] };

    default:
      return state;
  }
};

export default CartReducer;

const {
  LOAD_ORDERS,
  ADD_ORDER,
  GET_ORDER_BY_ID,
  GET_ALL_ORDERS,
  DELETE_ORDER,
  UPDATE_ORDER,
  ERROR_ORDER,
} = require("../ActionTypes/ActionTypes");

const initialState = {
  loading: false,
  orders: [],
  error: null,
  currentOrder: null,
};

const OrderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ORDERS:
      return { ...state, loading: true };

    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, payload],
        loading: false,
      };

    case GET_ORDER_BY_ID:
      return { ...state, currentOrder: payload, loading: false };

    case GET_ALL_ORDERS:
      return { ...state, orders: payload, loading: false };

    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order._id !== payload._id),
        loading: false,
      };

    case UPDATE_ORDER:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order._id === payload._id ? payload : order
        ),
        loading: false,
      };

    case ERROR_ORDER:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};

export default OrderReducer;

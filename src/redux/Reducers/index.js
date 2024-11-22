import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ProductReducer from "./ProductReducer";
import OrderReducer from "./OrderReducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  products: ProductReducer,
  orders: OrderReducer,
  cart: CartReducer,
});

export default rootReducer;

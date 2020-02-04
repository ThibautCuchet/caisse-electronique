import { combineReducers } from "redux";
import CartReducer from "./cart";
import ProductsReducer from "./products";

export default combineReducers({
  cart: CartReducer,
  products: ProductsReducer
});

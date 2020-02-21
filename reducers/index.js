import { combineReducers } from "redux";
import CartReducer from "./cart";
import ProductsReducer from "./products";
import StorageReducer from "./storage";

export default combineReducers({
  cart: CartReducer,
  products: ProductsReducer,
  storage: StorageReducer
});

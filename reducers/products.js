import {
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
  RESET_PRODUCT,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_CONNECTION_STATE,
  UPDATE_PRODUCT_LIST
} from "../actions/action-type";
import { database } from "../storages/database";

const initState = {};

export default function(state = initState, action) {
  if (action.type === INCREASE_PRODUCT) {
    const product = action.payload;
    const newState = { ...state };
    state[product.type][product.name].count++;
    return newState;
  } else if (action.type === DECREASE_PRODUCT) {
    const product = action.payload;
    const newState = { ...state };
    state[product.type][product.name].count--;
    return newState;
  } else if (action.type === RESET_PRODUCT) {
    const newState = { ...state };
    Object.keys(newState).forEach(type => {
      Object.keys(newState[type]).forEach(product => {
        newState[type][product].count = 0;
      });
    });
    return newState;
  } else if (action.type === ADD_PRODUCT) {
    const product = action.payload;
    const productName = product.name.toLowerCase().replace(" ", "_");
    const newState = { ...state };
    newState[productName] = product;
    return newState;
  } else if (action.type === REMOVE_PRODUCT) {
    const product = action.payload;
    const productName = product.name.toLowerCase().replace(" ", "_");
    const newState = { ...state };
    delete newState[productName];
    return newState;
  } else if (action.type === UPDATE_PRODUCT) {
    const { product, price } = action.payload;
    const productName = product.name.toLowerCase().replace(" ", "_");
    newState[productName].price = price;
    return newState;
  } else if (action.type === UPDATE_PRODUCT_LIST) {
    return action.payload;
  }
  return state;
}

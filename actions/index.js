import {
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
  RESET_PRODUCT,
  APPLY_REDUCTION,
  REMOVE_REDUCTION,
  CONFIRM_PAYMENT,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_CONNECTION_STATE,
  UPDATE_PRODUCT_LIST,
  UPDATE_REDUCTION_LIST,
  START_CAISSE
} from "./action-type";
import { database } from "../storages/database";

//Data function

export const loadProductStorage = products => async dispatch => {
  dispatch({ type: UPDATE_PRODUCT_LIST, payload: products });
};
export const loadReductionStorage = reductions => async dispatch => {
  dispatch({ type: UPDATE_REDUCTION_LIST, payload: reductions });
};
export const updateConnectionState = (
  connected,
  currentPaying
) => async dispatch => {
  if (connected && !currentPaying) {
    const products = await database
      .ref("products/")
      .once("value")
      .then(snapshot => snapshot.val());
    dispatch({ type: UPDATE_PRODUCT_LIST, payload: products });

    const reductions = await database
      .ref("reductions/")
      .once("value")
      .then(snapshot => snapshot.val());
    dispatch({ type: UPDATE_REDUCTION_LIST, payload: reductions });
  }
  dispatch({ type: UPDATE_CONNECTION_STATE, payload: connected });
};

//Payement function
export const applyReduction = reduction => async dispatch => {
  dispatch({ type: APPLY_REDUCTION, payload: reduction });
};
export const confirmPayement = () => async dispatch => {
  dispatch({ type: CONFIRM_PAYMENT });
};
export const decreaseProduct = product => async dispatch => {
  dispatch({ type: DECREASE_PRODUCT, payload: product });
};
export const increaseProduct = product => async dispatch => {
  dispatch({ type: INCREASE_PRODUCT, payload: product });
};
export const removeReduction = () => async dispatch => {
  dispatch({ type: REMOVE_REDUCTION });
};
export const resetProduct = () => async dispatch => {
  dispatch({ type: RESET_PRODUCT });
};
export const startCaisse = products => async dispatch => {
  dispatch({ type: START_CAISSE });
};

//Product function
export const addProduct = product => async dispatch => {
  dispatch({ type: ADD_PRODUCT, payload: product });
};
export const removeProduct = product => async dispatch => {
  dispatch({ type: REMOVE_PRODUCT, payload: product });
};
export const updateProduct = (product, price) => async dispatch => {
  dispatch({ type: UPDATE_PRODUCT, payload: { product, price } });
};

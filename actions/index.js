import {
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
  RESET_PRODUCT
} from "./action-type";

export const increaseProduct = product => async dispatch => {
  dispatch({ type: INCREASE_PRODUCT, payload: product });
};

export const decreaseProduct = product => async dispatch => {
  dispatch({ type: DECREASE_PRODUCT, payload: product });
};

export const resetProduct = () => async dispatch => {
  dispatch({ type: RESET_PRODUCT });
};

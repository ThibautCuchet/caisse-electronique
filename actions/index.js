import {
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
  RESET_PRODUCT,
  APPLY_REDUCTION,
  REMOVE_REDUCTION,
  CONFIRM_PAYMENT
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

export const applyReduction = reduction => async dispatch => {
  dispatch({ type: APPLY_REDUCTION, payload: reduction });
};

export const removeReduction = () => async dispatch => {
  dispatch({ type: REMOVE_REDUCTION });
};

export const confirmPayement = () => async dispatch => {
  dispatch({ type: CONFIRM_PAYMENT });
};

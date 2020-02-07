import {
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
  RESET_PRODUCT,
  APPLY_REDUCTION,
  REMOVE_REDUCTION,
  CONFIRM_PAYMENT
} from "../actions/action-type";

const initState = {
  total: 0.0,
  history: [],
  reduction: {
    police: { name: "Police", percent: 0.8 }
  },
  activeReduction: undefined
};

export default function(state = initState, action) {
  if (action.type === INCREASE_PRODUCT) {
    const newState = { ...state };
    newState.total = newState.total + action.payload.price;
    return newState;
  } else if (action.type === DECREASE_PRODUCT) {
    const newState = { ...state };
    newState.total = newState.total - action.payload.price;
    return newState;
  } else if (action.type === RESET_PRODUCT) {
    const newState = { ...state };
    newState.total = 0;
    newState.activeReduction = undefined;
    return newState;
  } else if (action.type === APPLY_REDUCTION) {
    const newState = { ...state };
    newState.activeReduction = action.payload;
    return newState;
  } else if (action.type === REMOVE_REDUCTION) {
    const newState = { ...state };
    newState.activeReduction = undefined;
    return newState;
  } else if (action.type === CONFIRM_PAYMENT) {
    const newState = { ...state };
    const date = new Date();
    const total = activeReduction
      ? total * (1 - activeReduction.percent)
      : total;
    newState.history.push({ date, total });
  }
  return state;
}

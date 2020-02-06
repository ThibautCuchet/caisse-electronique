import {
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
  RESET_PRODUCT
} from "../actions/action-type";

const initState = {
  total: 0.0
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
    return newState;
  }
  return state;
}

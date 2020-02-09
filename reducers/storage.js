import {
  ADD_CHECK_CONNECTION,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT
} from "../actions/action-type";

const initState = {
  connected: false
};

export default function(state = initState, action) {
  if (action.type === ADD_CHECK_CONNECTION) {
  } else if (action.type === ADD_PRODUCT) {
    if (state.connected) {
    } else {
    }
  } else if (action.type === REMOVE_PRODUCT) {
    if (state.connected) {
    } else {
    }
  } else if (action.type === UPDATE_PRODUCT) {
    if (state.connected) {
    } else {
    }
  }
}

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_CONNECTION_STATE
} from "../actions/action-type";
import { database } from "../storages/database";

const initState = {
  connected: false
};

export default function(state = initState, action) {
  if (action.type === UPDATE_CONNECTION_STATE) {
    const newState = { ...state };
    newState.connected = action.payload;
    return newState;
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
  return state;
}

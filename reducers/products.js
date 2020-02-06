import {
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
  RESET_PRODUCT
} from "../actions/action-type";

const initState = {
  viande: {
    viandelle: { price: 2.2, name: "Viandelle", count: 0 },
    poulicroc: { price: 2.2, name: "Poulicroc", count: 0 },
    lucifer: { price: 2.2, name: "Lucifer", count: 0 },
    croquette_fromage: { price: 2.2, name: "Croquette fromage", count: 0 },
    mexicano: { price: 2.5, name: "Mexicano", count: 0 }
  },
  brochettes: {
    oignons: { price: 3.2, name: "Oignons", count: 0 },
    pilon: { price: 3.2, name: "Pilon", count: 0 }
  }
};

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
  }
  return state;
}

import Immutable from 'seamless-immutable';

/**
 * Types
 */

export const Types = {
  ADD: 'cart/ADD',
  REMOVE: 'cart/REMOVE',
  UPDATE_AMOUNT: 'cart/UPDATE_AMOUNT',
};

/**
 * reducer
 */

const INITIAL_STATE = Immutable({
  data: [],
});

export function reducer(state = INITIAL_STATE, action) {
  let currentItem = null;
  let before;
  let after;
  switch (action.type) {
    case Types.ADD:
      return state.merge({
        data: [
          ...state.data, {
            id: Math.random(),
            amount: 1,
            product: action.payload.product,
          },
        ],
      });
    case Types.REMOVE:
      return state.merge({
        data: state.data.filter(item => item.id !== action.payload.id),
      });
    case Types.UPDATE_AMOUNT:
      currentItem = state.data.findIndex(item => item.id === action.payload.id);
      if (currentItem === -1) {
        return state;
      }
      before = currentItem === 0 ? [] : state.data.slice(0, currentItem);
      after = currentItem === state.data.length - 1
        ? []
        : state.data.slice(currentItem + 1);
      return state.merge({
        data: [
          ...before, {
            ...state.data[currentItem],
            amount: action.payload.amount,
          }, ...after,
        ],
      });
    default:
      return state;
  }
}

/**
 * Actions
 */

export default {
  addToCart: product => ({
    type: Types.ADD,
    payload: {
      product,
    },
  }),
  removeFromCart: id => ({
    type: Types.REMOVE,
    payload: {
      id,
    },
  }),
  updateCartItemAmount: (id, amount) => ({
    type: Types.UPDATE_AMOUNT,
    payload: {
      id,
      amount,
    },
  }),
};

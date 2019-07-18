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

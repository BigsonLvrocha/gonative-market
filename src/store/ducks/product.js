import Immutable from 'seamless-immutable';

/**
 * Types
 */

export const Types = {
  FETCH_REQUEST: 'product/FETCH_REQUEST',
  FETCH_SUCCESS: 'product/FETCH_SUCCESS',
  FETCH_FAILURE: 'product/FETCH_FAILURE',
};

/**
 * reducer
 */
const INITIAL_STATE = Immutable({
  data: [],
  isLoading: false,
  error: false,
});

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_REQUEST:
      return state.merge({
        isLoading: true,
      });
    case Types.FETCH_SUCCESS:
      return state.merge({
        data: action.payload.data,
        error: false,
        isLoading: false,
      });
    case Types.FETCH_FAILURE:
      return state.merge({
        isLoading: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
}

export default {
  fetchProductRequest: () => ({
    type: Types.FETCH_REQUEST,
  }),
  fetchProductSuccess: data => ({
    type: Types.FETCH_SUCCESS,
    payload: {
      data,
    },
  }),
  fetchProductFailure: error => ({
    type: Types.FETCH_FAILURE,
    payload: {
      error,
    },
  }),
};

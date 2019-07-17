/**
 * Types
 */

export const Types = {
  FETCH_REQUEST: 'category/FETCH_REQUEST',
  FETCH_SUCCESS: 'category/FETCH_SUCCESS',
  FETCH_FAILURE: 'category/FETCH_FAILURE',
  SET_CATEGORY: 'category/SET_CATEGORY',
};

/**
 * reducer
 */

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  error: false,
  activeCategory: -1,
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        error: false,
      };
    case Types.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case Types.SET_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload.category,
      };
    default:
      return state;
  }
}

/**
 * creators
 */

export default {
  fetchCategoryRequest: () => ({
    type: Types.FETCH_REQUEST,
  }),
  fetchCategorySuccess: data => ({
    type: Types.FETCH_SUCCESS,
    payload: {
      data,
    },
  }),
  fetchCategoryFailure: error => ({
    type: Types.FETCH_FAILURE,
    payload: {
      error,
    },
  }),
  setCategory: category => ({
    type: Types.SET_CATEGORY,
    payload: {
      category,
    },
  }),
};

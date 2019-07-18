import { combineReducers } from 'redux';
import { reducer as category } from './category';
import { reducer as product } from './product';
import { reducer as cart } from './cart';

export default combineReducers({
  category,
  product,
  cart,
});

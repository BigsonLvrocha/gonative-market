import { combineReducers } from 'redux';
import { reducer as category } from './category';
import { reducer as product } from './product';

export default combineReducers({
  category,
  product,
});

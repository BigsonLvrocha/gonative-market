import { all, takeLatest } from 'redux-saga/effects';
import { Types as CategoryTypes } from '../ducks/category';
import * as CategorySagas from './category';
import * as ProductSagas from './product';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoryTypes.FETCH_REQUEST, CategorySagas.fetchCategories),
    takeLatest(CategoryTypes.SET_CATEGORY, ProductSagas.fetchProducts),
  ]);
}

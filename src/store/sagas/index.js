import { all, takeLatest } from 'redux-saga/effects';
import { Types as CategoryTypes } from '../ducks/category';
import * as CategorySagas from './category';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoryTypes.FETCH_REQUEST, CategorySagas.fetchCategories),
  ]);
}

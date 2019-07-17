import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import CategoryActions from '../ducks/category';

export function* fetchCategories() {
  try {
    const { data } = yield call(api.get, 'categories');
    yield put(CategoryActions.fetchCategorySuccess(data));
  } catch (err) {
    yield put(CategoryActions.fetchCategoryFailure('houve um erro'));
  }
}

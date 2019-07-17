import { call, put } from 'redux-saga/effects';
import ProductActions from '../ducks/product';
import api from '~/services/api';

export function* fetchProducts(action) {
  yield put(ProductActions.fetchProductRequest());
  try {
    const { data } = yield call(api.get, `/category_products/${action.payload.category}`);
    yield put(ProductActions.fetchProductSuccess(data.products));
  } catch (err) {
    yield put(ProductActions.fetchProductFailure('houve um erro buscando os produtos'));
  }
}

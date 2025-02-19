import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";
import {takeEvery, put} from 'redux-saga/effects'



function* getProducts() {
  let data = yield fetch("http://localhost:3001/product");
  data = yield data.json();
  yield put ({type: SET_PRODUCT_LIST, data:data})
}

function* searchProducts(data) {
  let result = yield fetch(`http://localhost:3001/product?q=${data.query}`);
  result = yield result.json();
  console.log("action is called", data)
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;

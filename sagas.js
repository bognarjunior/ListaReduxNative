import { takeLatest, put } from 'redux-saga/effects';
import API from './api';

function* getItems(action) {
	console.log('saga', action)
	yield put({type: 'GET_ITEM_REQUEST'});
}

function* rootSaga() {
  yield takeLatest('GET_ITEMS', getItems)
}

export default rootSaga;
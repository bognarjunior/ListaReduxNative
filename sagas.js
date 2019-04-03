import { takeLatest } from 'redux-saga/effects';

function* getItems(action) {
	console.log('saga', action)
}

function* rootSaga() {
  yield takeLatest('GET_ITEMS', getItems)
}

export default rootSaga;
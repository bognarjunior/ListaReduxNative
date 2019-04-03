import { takeLatest, put,call } from 'redux-saga/effects';
import API from './api';

function* getItems(action) {
	console.log('saga', action)
	yield put({ type: 'GET_ITEMS_REQUEST' });

	const items = yield call(API.getItems);
	console.log('items -> ', items)

	yield put({ 
		type: 'GET_ITEMS_COMPLETE',
		payload: items
	})
}

function* rootSaga() {
  yield takeLatest('GET_ITEMS', getItems)
}

export default rootSaga;
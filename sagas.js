import { takeLatest, put,call } from 'redux-saga/effects';
import API from './api';

function* getItems(action) {
	try {
		yield put({ type: 'GET_ITEMS_REQUEST' });

		const items = yield call(API.getItems);
		yield put({ 
			type: 'GET_ITEMS_COMPLETE',
			payload: items
		});

	} catch (error) {
		
		yield put({ 
			type: 'GET_ITEMS_ERROR',
			error: error.message
		});
	}
}

function* rootSaga() {
  yield takeLatest('GET_ITEMS', getItems)
}

export default rootSaga;
import { takeLatest, put,call,takeEvery, select, all } from 'redux-saga/effects';
import API from './api';

function* getItems() {
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

function* addItem(action) {
	try {
		yield put({ type: 'ADD_ITEM_REQUEST' });

		const item = yield call(API.addItem, action.value);
		yield put({ 
			type: 'ADD_ITEM_COMPLETE',
			payload: item
		});

	} catch (error) {

		yield put({ 
			type: 'ADD_ITEM_ERROR',
			error: error.message
		});
	}
}

function* removeItem(action) {
	try {
		yield put({ type: 'REMOVE_ITEM_REQUEST' });

		const id = yield call(API.removeItem, action.id);
		yield put({ 
			type: 'REMOVE_ITEM_COMPLETE',
			id
		});

	} catch (error) {

		yield put({ 
			type: 'REMOVE_ITEM_ERROR',
			error: error.message
		});
	}
}


function* clearList() {
	try {

		yield put({ type: 'CLEAR_LIST_REQUEST' });
		const items = yield select(state => state.items);
		yield all(
			items.map( item  => call(API.removeItem, item.id))
		);
		yield put({ type: 'CLEAR_LIST_COMPLETE'	});

	} catch (error) {

		yield put({ 
			type: 'CLEAR_LIST_ERROR',
			error: error.message
		});

		yield put({ type: 'GET_ITEMS'	});
	}
}



function* rootSaga() {
  yield takeLatest('GET_ITEMS', getItems);
  yield takeLatest('ADD_ITEM', addItem);
  yield takeEvery('REMOVE_ITEM', removeItem);
  yield takeLatest('CLEAR_LIST', clearList);
}

export default rootSaga;
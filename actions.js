export const getItems = () => {
	return {
		type: 'GET_ITEMS'
	};
}

export const addItem = value => {
	return {
		type: 'ADD_ITEM',
		value
	}
}

export const removeItem = id => {
	return {
		type: 'REMOVE_ITEM',
		id
	};
}

export const clearList = () => {
	return {
		type: 'CLEAR_LIST'
	};
}
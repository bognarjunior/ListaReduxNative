const initialState = {
	items: [],
	loadingItems: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			const id = state.length > 0 ? state[state.length - 1].id + 1 : 1;
			return state.concat([{
				id: id,
				value: action.value
			}]);
	
		case "REMOVE_ITEM":
			return state.filter(item => item.id !== action.id);

		case "CLEAR_LIST":
			return [];

		case "GET_ITEMS_REQUEST":
			return {
				...state,
				loadingItems: true
			};

		case "GET_ITEMS_COMPLETE":
			return {
				...state,
				loadingItems: false,
				items: action.payload
			};

		case "GET_ITEMS_ERROR":
			return {
				...state,
				loadingItems: false,
				error: action.error
			};
		  
		default:
		  return state;
	  }
};
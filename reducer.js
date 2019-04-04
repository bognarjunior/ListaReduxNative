const initialState = {
	items: [],
	loadingItems: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_ITEM_COMPLETE":
			return {
				...state,
				items: state.items.concat([action.payload])
			} 

		case "ADD_ITEM_ERROR":
			return {
				...state,
				error: action.error
			};

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
		
		case "REMOVE_ITEM_COMPLETE":
			return {
				...state,
				items: state.items.filter(item => item.id !== action.id)
			};
		
			case "REMOVE_ITEM_ERROR":
			return {
				...state,
				error: action.error
			};
		

		case "CLEAR_LIST_COMPLETE":
			return {
				...state,
				items: []
			};

		case "CLEAR_LIST_ERROR":
			return {
				...state,
				error: action.error
			};
		  
		default:
		  return state;
	  }
};
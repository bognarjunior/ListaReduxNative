const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case "ADICIONAR_ITEM":
			const id = state.length > 0 ? state[state.length - 1].id + 1 : 1;
			return state.concat([{
				id: id,
				value: action.value
			}]);
	
		case "REMOVER_ITEM":
			return state.filter(item => item.id !== action.id);

		case "LIMPAR_LISTA":
			return [];
		  
		default:
		  return state;
	  }
};
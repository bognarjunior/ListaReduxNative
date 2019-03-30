const initialState = [
	{
		id: 1,
		value:'Banana'
	}, 
	{
		id: 2,
		value:'Morango'
	}, 
	{
		id: 3,
		value:'Pera'
	},
	{
		id: 4,
		value:'Uva'
	}
];

export default (state = initialState, action) => {
	switch (action.type) {
		case "ADICIONAR_ITEM":
			const id = state.length + 1;
			return state.concat([{
				id: id,
				value: action.value
			}]);
	
		case "REMOVER_ITEM":
			return state;

		case "LIMPAR_LISTA":
			return state;
		  
		default:
		  return state;
	  }
};
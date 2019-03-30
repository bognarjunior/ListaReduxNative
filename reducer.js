const initialState = [
	{
		id: 1,
		name:'Banana'
	}, 
	{
		id: 2,
		name:'Morango'
	}, 
	{
		id: 3,
		name:'Pera'
	},
	{
		id: 4,
		name:'Uva'
	}
];

export default (state = initialState, action) => {
	console.log('Reducer', action)
	return state;
};
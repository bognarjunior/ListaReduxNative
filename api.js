let items = [
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
let lastId = 4;

const getItems = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(items);
			// reject(new Error('Marcianos estão atacando a Terra, mas não se preocupe, já estamos cuidando disso!!'));
		}, 3000);
	});
}

const addItem = (value) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const id = ++lastId;
			const item = {
				value,
				id
			}
			items = items.concat([item]);
			resolve(item);
			// reject(new Error('Marcianos estão atacando a Terra, mas não se preocupe, já estamos cuidando disso!!'));
		}, 3000);
	});
}

const removeItem = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			items = items.filter(item => item.id !== id);
			resolve(id);
			// reject(new Error('Marcianos estão atacando a Terra, mas não se preocupe, já estamos cuidando disso!!'));
		}, 3000);
	});
}

export default {
	getItems,
	addItem,
	removeItem
}
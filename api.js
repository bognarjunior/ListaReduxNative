let items = [];
let lastId = 0;

const getItems = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(items);
		}, 3000);
	});
}

const addItem = (value) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const id = ++lastId;
			items = items.concat([
				{
					value,
					id
				}
			]);
		}, 3000);
	});
}

const removeItem = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			items = items.filter(item => item.id !== id);
		}, 3000);
	});
}

export default {
	getItems,
	addItem,
	removeItem
}
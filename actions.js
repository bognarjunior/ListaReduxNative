export const addItem = value => {
	return {
		type: 'ADICIONAR_ITEM',
		value
	}
}

export const removeItem = id => {
	return {
		type: 'REMOVER_ITEM',
		id
	};
}

export const clearList = () => {
	return {
		type: 'LIMPAR_LISTA'
	};
}
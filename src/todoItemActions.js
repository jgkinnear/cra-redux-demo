export const toggleItemStatus = (itemId) => {
	return {
		type: 'TOGGLE_STATUS',
		payload: itemId
	};
};
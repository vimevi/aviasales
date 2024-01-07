const initialState = {
	filter: null,
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'filter/cheapest':
			return {
				filter: 'cheapest',
			};
		case 'filter/shortest':
			return {
				filter: 'shortest',
			};
		case 'filter/reset':
			return { filter: null };

		default:
			return state;
	}
};

export default filterReducer;

const initialState = {
	searchId: null,
	tickets: [],
	loading: true,
	displayCount: 5,
	displayedTicketsCount: 5,
};

const ticketsReducer = (state = initialState, action, filter) => {
	switch (action.type) {
		case 'RECEIVE_SEARCH_ID':
			return {
				...state,
				searchId: action.payload,
			};
		case 'RECEIVE_TICKETS':
			let sortedTickets = [];

			if (action.payload && action.payload.length > 0) {
				sortedTickets = action.payload.sort((a, b) => {
					if (filter === 'cheapest') {
						return a.price - b.price;
					} else if (filter === 'shortest') {
						const durationA = a.segments.reduce(
							(sum, segment) => sum + segment.duration,
							0
						);
						const durationB = b.segments.reduce(
							(sum, segment) => sum + segment.duration,
							0
						);
						return durationA - durationB;
					}
					return 0;
				});
			}

			return {
				...state,
				tickets: sortedTickets,
				loading: false,
			};
		case 'UPDATE_DISPLAY_COUNT':
			return {
				...state,
				displayedTicketsCount: state.displayedTicketsCount + action.payload,
			};

		default:
			return state;
	}
};

export default ticketsReducer;

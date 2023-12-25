const defaultState = {
	cash: 0,
	allChecked: true,
	noStopsChecked: true,
	oneStopChecked: true,
	twoStopsChecked: true,
	threeStopsChecked: true,
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'checkbox/all':
			console.log('clicked');
			
			if (
				state.noStopsChecked &&
				state.oneStopChecked &&
				state.twoStopsChecked &&
				state.threeStopsChecked
			) {
				return {
					...state,
					allChecked: false,
					noStopsChecked: false,
					oneStopChecked: false,
					twoStopsChecked: false,
					threeStopsChecked: false,
				};
			} else {
				return {
					...state,
					allChecked: true,
					noStopsChecked: true,
					oneStopChecked: true,
					twoStopsChecked: true,
					threeStopsChecked: true,
				};
			}
		case 'checkbox/nostops':
			return {
				...state,
				noStopsChecked: !state.noStopsChecked,
			};
		case 'checkbox/onestop':
			return {
				...state,
				oneStopChecked: !state.oneStopChecked,
			};
		case 'checkbox/twostops':
			return {
				...state,
				twoStopsChecked: !state.twoStopsChecked,
			};
		case 'checkbox/threestops':
			return {
				...state,
				threeStopsChecked: !state.threeStopsChecked,
			};
		default:
			return state;
	}
};

export default reducer;

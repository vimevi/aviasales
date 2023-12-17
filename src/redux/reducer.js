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
			// Если все чекбоксы уже отмечены, снимаем отметки со всех, иначе отмечаем все
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
			// Снимаем отметку с "all", если чекбокс снимается
			return {
				...state,
				noStopsChecked: !state.noStopsChecked,
			};
		case 'checkbox/onestop':
			// Снимаем отметку с "all", если чекбокс снимается
			return {
				...state,
				oneStopChecked: !state.oneStopChecked,
			};
		case 'checkbox/twostops':
			// Снимаем отметку с "all", если чекбокс снимается
			return {
				...state,
				twoStopsChecked: !state.twoStopsChecked,
			};
		case 'checkbox/threestops':
			// Снимаем отметку с "all", если чекбокс снимается
			return {
				...state,
				threeStopsChecked: !state.threeStopsChecked,
			};
		default:
			return state;
	}
};

export default reducer;

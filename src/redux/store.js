import {
	configureStore,
	combineReducers,
} from '@reduxjs/toolkit';

import ticketsReducer from './reducer/tickets';
import checkboxReducer from './reducer/filter';
import filterReducer from './reducer/sort';

const rootReducer = combineReducers({
	checkbox: checkboxReducer,
	filter: filterReducer,
	tickets: ticketsReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
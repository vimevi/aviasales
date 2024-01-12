import { configureStore, combineReducers } from "@reduxjs/toolkit";

import ticketsReducer from "./reducer/tickets";
import checkboxReducer from "./reducer/filter";
import filterReducer from "./reducer/sort";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  checkbox: checkboxReducer,
  filter: filterReducer,
  tickets: ticketsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(thunk), // Add thunk middleware
});

export default store;

// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import ticketsReducer from "./reducer/tickets";
// import checkboxReducer from "./reducer/filter";
// import filterReducer from "./reducer/sort";
// // import thunk from "redux-thunk";

// const rootReducer = combineReducers({
//   checkbox: checkboxReducer,
//   filter: filterReducer,
//   tickets: ticketsReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       immutableCheck: false,
//       serializableCheck: false,
//     }),
// });

// export default store;

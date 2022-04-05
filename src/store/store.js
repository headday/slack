import {configureStore} from "@reduxjs/toolkit";
import {reducer, userReducer} from "./reducers";

const store = configureStore({
	reducer: {
		main: reducer,
		user: userReducer
	},
});

export default store;
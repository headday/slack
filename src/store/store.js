import {configureStore} from "@reduxjs/toolkit";
import {loginReducer, reducer, registrationReducer, userReducer} from "./reducers";

const store = configureStore({
	reducer: {
		main: reducer,
		user: userReducer,
		registration: registrationReducer,
		login: loginReducer
	},
});

export default store;
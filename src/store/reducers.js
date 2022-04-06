import {createReducer} from "@reduxjs/toolkit";
import {
	setAuth,
	setCurrentUser,
	setCurrentUserId, setLoginError, setLoginSuccess,
	setRegistrationError,
	setRegistrationSuccess,
	setToken,
	setUsers
} from "./actions";

const initState = {
	isAuth: false,
	token: ""
};

const userState = {
	users: [],
	currentUser: {},
	currentUserId: null
}

const registrationState = {
	isSuccess: false,
	isError: false
}

const loginState = {
	isError: false
}

const reducer = createReducer(initState, (builder) => {
	builder
		.addCase(setAuth, (state, action) => {
			state.isAuth = action.payload;
		})
		.addCase(setToken, (state, action) => {
			state.token = action.payload;
		})
})

const userReducer = createReducer(userState, (builder) => {
	builder
		.addCase(setUsers, (state, action) => {
			state.users = action.payload;
		})
		.addCase(setCurrentUser, (state, action) => {
			state.currentUser = action.payload;
		})
		.addCase(setCurrentUserId, (state, action) => {
			state.currentUserId = action.payload;
		})
})

const registrationReducer = createReducer(registrationState, (builder) => {
	builder
		.addCase(setRegistrationSuccess, (state, action) => {
			state.isSuccess = action.payload;
		})
		.addCase(setRegistrationError, (state, action) => {
			state.isError = action.payload;
		})
})

const loginReducer = createReducer(loginState, (builder) => {
	builder
		.addCase(setLoginError, (state, action) => {
			state.isError = action.payload;
		})
})

export{
	reducer,
	userReducer,
	registrationReducer,
	loginReducer
};
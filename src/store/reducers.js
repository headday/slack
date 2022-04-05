import {createReducer} from "@reduxjs/toolkit";
import {setAuth, setCurrentUser, setCurrentUserId, setToken, setUsers} from "./actions";

const initState = {
	isAuth: false,
	token: ""
};

const userState = {
	users: [],
	currentUser: {},
	currentUserId: null
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

export{
	reducer,
	userReducer
};
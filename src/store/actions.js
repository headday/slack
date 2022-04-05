import {createAction} from "@reduxjs/toolkit";
import {SET_AUTH, SET_CURRENT_USER, SET_CURRENT_USER_ID, SET_TOKEN, SET_USERS} from "./constants";
import instance from "../http/instance";
const setUsers = createAction(SET_USERS);
const setAuth = createAction(SET_AUTH);
const setCurrentUser = createAction(SET_CURRENT_USER);
const setCurrentUserId = createAction(SET_CURRENT_USER_ID);
const setToken = createAction(SET_TOKEN);

function fetchUsersGET() {
	return function (dispatch) {
		instance.get("/auth/users")
			.then(resp => {
				dispatch(setUsers(resp.data));
			})
			.catch(error => {
				console.log(error);
			});
	};
}

function fetchRegistrationPOST(postData) {
	return function (dispatch) {
		instance.post("/auth/registration", postData)
			.then(resp => {
				if (resp.status === 200) {
					console.log('success')
				} else {
					console.log("error");
				}
			})
			.catch(error => {
				console.log(error);
			});
	};
}

function fetchLoginPOST(postData) {
	return async function (dispatch) {
		instance.post("/auth/login", postData)
			.then(resp => {
				if (resp.status === 200) {
					const token = resp.data.token;
					localStorage.setItem("token", JSON.stringify(token));
					
					dispatch(setAuth(true));
					dispatch(setToken(token));
					dispatch(setCurrentUser(resp.data));
				} else {
					console.log("error");
				}
			})
			.catch(error => {
				console.log(error);
			});
	};
}

function fetchLogOutPOST(postData) {
	return function (dispatch) {
		instance.post("/auth/logout", postData)
			.then(resp => {
				if (resp.status === 200){
					localStorage.removeItem('token');
					
					window.location.reload();
				} else {
					console.log('error')
				}
			})
			.catch(error => {
				console.log(error);
			});
	};
}

export {
	setUsers,
	setCurrentUser, 
	setCurrentUserId,
	setAuth,
	setToken,
	fetchUsersGET,
	fetchRegistrationPOST,
	fetchLoginPOST,
	fetchLogOutPOST
};
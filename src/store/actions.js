import {createAction} from "@reduxjs/toolkit";
import {
	SET_AUTH,
	SET_CURRENT_USER,
	SET_CURRENT_USER_ID, SET_LOGIN_ERROR, SET_LOGIN_SUCCESS, SET_REGISTRATION_ERROR,
	SET_REGISTRATION_SUCCESS,
	SET_TOKEN,
	SET_USERS
} from "./constants";
import instance from "../http/instance";

const setUsers = createAction(SET_USERS);
const setAuth = createAction(SET_AUTH);
const setCurrentUser = createAction(SET_CURRENT_USER);
const setCurrentUserId = createAction(SET_CURRENT_USER_ID);
const setToken = createAction(SET_TOKEN);
const setRegistrationSuccess = createAction(SET_REGISTRATION_SUCCESS);
const setRegistrationError = createAction(SET_REGISTRATION_ERROR);
const setLoginError = createAction(SET_LOGIN_ERROR);

function fetchUsersGET() {
	return function (dispatch) {
		instance.get("/auth/users")
			.then(resp => {
				if (resp.status === 200) {
					dispatch(setUsers(resp.data));
				} else {
					console.log("error");
				}
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
					dispatch(alertAction(setRegistrationSuccess, 3000));
				} else {
					dispatch(alertAction(setRegistrationError, 3000));
				}
			})
			.catch(() => {
				dispatch(alertAction(setRegistrationError, 3000));
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
					dispatch(alertAction(setLoginError, 3000));
				}
			})
			.catch(() => {
				dispatch(alertAction(setLoginError, 3000));
			});
	};
}

function fetchLogOutPOST(postData) {
	return function (dispatch) {
		instance.post("/auth/logout", postData)
			.then(resp => {
				if (resp.status === 200) {
					localStorage.removeItem("token");

					window.location.reload();
				} else {
					console.log("error");
				}
			})
			.catch(error => {
				console.log(error);
			});
	};
}

function alertAction(action, time) {
	return function (dispatch) {
		dispatch(action(true));
		setTimeout(() => {
			dispatch(action(false));
		}, time);
	};
}

export {
	setUsers,
	setCurrentUser,
	setCurrentUserId,
	setAuth,
	setToken,
	setRegistrationSuccess,
	setRegistrationError,
	setLoginError,
	fetchUsersGET,
	fetchRegistrationPOST,
	fetchLoginPOST,
	fetchLogOutPOST
};
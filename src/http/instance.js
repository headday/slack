import axios from "axios";

const token = JSON.parse(localStorage.getItem('token')) ?? "";

const instance = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		authorization: `Bearer ${token}`
	}
});

export default instance;
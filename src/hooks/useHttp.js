import {useEffect, useState} from "react";

function useHttp(request) {
	const [data, setData] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		request
			.then(({data}) => {
				setData(data);
			})
			.catch(error => {
				console.log("Ошибка запроса!");
				setError("Ошибка запроса!");
			})
			.finally(() => setLoading(false));
	}, [request]);

	return [
		data,
		error,
		loading
	];
}

export default useHttp;
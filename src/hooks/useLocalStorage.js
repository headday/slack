import { useState } from "react";

function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			if (item) {
				return JSON.parse(item);
			}
			window.localStorage.setItem(key, JSON.stringify(initialValue));
			return initialValue;
		} catch (error) {
			console.error(error);
			return initialValue;
		}
	});
	const setValue = (newValue) => {
		try {
			window.localStorage.setItem(key, JSON.stringify(newValue));
			setStoredValue(newValue);
		} catch (error) {
			console.error(error);
		}
	};
	return [storedValue, setValue];
};

export default useLocalStorage;
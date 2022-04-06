import {useState} from "react";

function useInput(initValue, pattern) {
	const [value, setValue] = useState(initValue);
	const [isError, setIsError] = useState(false);

	function onChange(e) {
		if (!pattern.test(value)){
			setIsError(true);
		} else {
			setIsError(false);
		}

		setValue(e.target.value);
	}

	return {
		value,
		onChange,
		error: isError,
		setValue
	};
}

export default useInput;
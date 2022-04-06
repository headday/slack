import {FormControl, FormHelperText, TextField} from "@mui/material";

function InputText({field, label, errorText, variant}) {
	const {value, onChange, error} = field;
	
	return (
		<FormControl>
			<TextField value={value} onChange={onChange} error={error} label={label} variant={variant} />
			{field.error && <FormHelperText error>{errorText}</FormHelperText>}
		</FormControl>
	);
}

export default InputText;
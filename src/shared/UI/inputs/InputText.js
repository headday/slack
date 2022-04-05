import {FormControl, FormHelperText, TextField} from "@mui/material";

function InputText({field, label, errorText, variant}) {
	return (
		<FormControl>
			<TextField {...field} label={label} variant={variant} />
			{field.error && <FormHelperText error>{errorText}</FormHelperText>}
		</FormControl>
	);
}

export default InputText;
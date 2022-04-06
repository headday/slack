import AlertContainer from "./AlertContainer";
import {Alert} from "@mui/material";

function AlertError({title, isActive}){
	return (
		<AlertContainer isActive={isActive}>
			<Alert severity="error">{title}</Alert>
		</AlertContainer>
	)
}

export default AlertError;
import AlertContainer from "./AlertContainer";
import {Alert} from "@mui/material";

function AlertSuccess({title, isActive}){
	return (
		<AlertContainer isActive={isActive}>
			<Alert severity="success">{title}</Alert>
		</AlertContainer>
	)
}

export default AlertSuccess;
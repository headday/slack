import {Container} from "../style/style";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchLogOutPOST} from "../store/actions";

function Main(){
	const dispatch = useDispatch();
	const token = useSelector(state => state.main.token);
	const currentUser = useSelector(state => state.user.currentUser);
	
	function handleLogOut(){
		dispatch(fetchLogOutPOST({token}));
	}
	
	return (
		<Container>
			<div style={{color: 'white'}}>
				<p>{currentUser.name}</p>
				<p>{currentUser.login}</p>
				<p>{currentUser.id}</p>
			</div>
			<Button onClick={handleLogOut}>Log out</Button>
		</Container>
	)
}

export default Main;
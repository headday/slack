import {
	Button, TextField
} from "@mui/material";
import Window from "../shared/window/Window";
import useInput from "../hooks/useInput";
import InputText from "../shared/UI/inputs/InputText";
import {fetchRegistrationPOST} from "../store/actions";
import {useDispatch} from "react-redux";
import {Container, Form, LinkText} from "../style/style";
import isValid from "../helpers/isValidField";
import {Link} from "react-router-dom";
import {loginPattern, namePattern, passwordPattern, typePattern} from "../helpers/constants";
import {useRef} from "react";

function Registration() {
	const dispatch = useDispatch();
	const name = useInput("", namePattern);
	const login = useInput("", loginPattern);
	const password = useInput("", passwordPattern);

	function onSubmitRegistration(e) {
		e.preventDefault();

		if (isValid(name) && isValid(login) && isValid(password)) {
			const data = {
				name: name.value,
				login: login.value,
				password: password.value,
				bio: ""
			};

			dispatch(fetchRegistrationPOST(data));
		}
	}

	return (
		<Container>
			<Window title={"Регистрация"}>
				<Form onSubmit={onSubmitRegistration}>
					<InputText field={name} label="Имя" errorText={"Невалидное имя!"} variant={"outlined"}/>
					<InputText field={login} label="Логин" errorText={"Невалидный логин!"} variant={"outlined"}/>
					<InputText field={password} label="Пароль" errorText={"Невалидный пароль!"} variant={"outlined"}/>
					<Button variant="contained" type={"submit"}>Зарегистирироваться</Button>
				</Form>
				<Link to={"/login"}>
					<LinkText>Войти</LinkText>
				</Link>
			</Window>
		</Container>
	);
}

export default Registration;
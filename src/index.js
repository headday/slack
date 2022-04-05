import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import store from "./store/store";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
//
// const darkTheme = createTheme({
// 	typography: {
// 		fontFamily: "'Work Sans', sans-serif",
// 		fontSize: 14,
// 		fontFamilySecondary: "'Roboto Condensed', sans-serif"
// 	},
// 	palette: {
// 		type: "dark",
// 		primary: {
// 			main: "#26a27b"
// 		},
// 		secondary: {
// 			main: "#fafafa"
// 		}
// 	}
// })

const darkTheme = createTheme({
	palette: {
		type: "dark",
	}
});

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={darkTheme}>
			<App/>
		</ThemeProvider>
	</Provider>,
	document.getElementById("root")
);

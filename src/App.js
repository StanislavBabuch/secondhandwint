import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ProfilPage from "./pages/ProfilPage";
import { ThemeProvider } from "./Context/themeContext";
import { Toggle } from "./components/toggle";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import SearchPage from "./pages/SearchPage";
import AllProducts from "./pages/AllProducts";
const App = ({ children }) => {
	const userId = sessionStorage.getItem("id");
	const [userInfo, setUserInfo] = useState([]);
	const getUserInfo = useCallback(() => {
		axios
			.get("https://dummyjson.com/users/" + userId)
			.then((response) => {
				setUserInfo(response.data);
			})
			.catch((error) => {
				if (error.response) {
				}
			});
	}, [userId]);
	useEffect(() => getUserInfo(), [getUserInfo]);
	console.log(userInfo);
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}

	localStorage.theme = "light";

	localStorage.theme = "dark";

	return (
		<>
			<ThemeProvider>
				<NavBar userInfo={userInfo}>
					<Toggle />
				</NavBar>

				<main>{children}</main>
				{!sessionStorage.getItem("id") ? <LoginPage /> : <AllProducts />}
			</ThemeProvider>
		</>
	);
};

export default App;

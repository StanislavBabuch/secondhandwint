import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { ThemeProvider } from "../Context/themeContext";
import NavBar from "../components/NavBar";
import { Toggle } from "../components/toggle";
import { Link } from "react-router-dom";

const Home = ({ children }) => {
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
				<div>
					<h1>This is the home page</h1>
					<Link to="search">Click to view our about page</Link>
					<Link to="contact">Click to view our contact page</Link>
				</div>
				<main>{children}</main>
				{/* {!sessionStorage.getItem("id") ? (
      <LoginPage />
    ) : (
      <ProfilPage userInfo={userInfo} />
    )} */}
			</ThemeProvider>
		</>
	);
};

export default Home;

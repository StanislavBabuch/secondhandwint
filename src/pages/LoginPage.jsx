import axios from "axios";
import { useState } from "react";

const LoginPage = ({ children }) => {
	const [error, setError] = useState(null);

	const [data, setData] = useState({
		username: "",
		password: "",
	});

	const [userDatas, setUserDatas] = useState({});
	const handleChange = (e) => {
		const value = e.target.value;
		setData({
			...data,
			[e.target.name]: value,
		});
	};
	const userToken = sessionStorage.getItem("token");

	const handleSubmit = (e) => {
		e.preventDefault();
		const userData = {
			username: data.username,
			password: data.password,
		};
		if (userToken !== 0) {
			axios

				.post("https://dummyjson.com/auth/login", userData)
				.then((response) => {
					setUserDatas(response.data);

					sessionStorage.setItem("token", response.data.token);
					sessionStorage.setItem("id", response.data.id);

					window.location.reload(false);
				})
				.catch((error) => {
					if (error.response) {
						setError(error.response.data);
					} else if (error.request) {
						setError(error.response.data);
					} else {
						console.log(error.data);
					}
				});
		}
	};
	console.log(error, "d");
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

	localStorage.removeItem("theme");

	return (
		<div class="h-screen flex">
			<div class="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
				<div class="relative w-full max-w-lg">
					<div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
					<div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
					<div class="absolute -bottom-32 left-20 w-72 h-72 bg-red 	-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
					<div class="m-8 relative space-y-4 ">
						<div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8  bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
							<form class="bg-white  bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
								<h1 class="text-gray-800 font-bold text-2xl mb-1">
									Hello Again!
								</h1>
								<p class="text-sm font-normal text-gray-600 mb-7">
									Welcome Back
								</p>
								<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
										/>
									</svg>
									<input
										onChange={handleChange}
										name="username"
										value={data.username}
										class="pl-2 outline-none border-none"
										type="text"
										placeholder="Email Address"
									/>
								</div>
								<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5 text-gray-400"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
											clip-rule="evenodd"
										/>
									</svg>
									<input
										type="password"
										name="password"
										value={data.password}
										onChange={handleChange}
										class="pl-2 outline-none border-none"
										id=""
										placeholder="Password"
									/>
								</div>
								<button
									type="submit"
									onClick={handleSubmit}
									class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
								>
									Login
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;

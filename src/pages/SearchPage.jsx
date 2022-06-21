import { click } from "@testing-library/user-event/dist/click";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchPage = () => {
	const [input, setInput] = useState("");

	const [error, setError] = useState(null);

	const [data, setData] = useState({
		search: "",
	});
	const history = useNavigate();
	const click = (e) => {
		const value = e.target.value;
		<p>sdsd</p>;
		history("/product", {
			state: {
				userId: value,
			},
		});
	};
	const [userDatas, setUserDatas] = useState({});
	const handleChange = async (e) => {
		const value = e.target.value;
		setData({
			...data,
			[e.target.name]: value,
		});

		e.preventDefault();
		const userData = {
			search: data.search,
		};

		await axios
			.get("https://dummyjson.com/users/search?q=" + userData.search)
			.then((response) => {
				setUserDatas(response.data.users);
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
	};

	return (
		<div class="max-w-2xl mx-auto">
			<input
				onInput={(e) => setInput(e.target.value)}
				type="search"
				name="search"
				placeholder="Search..."
				value={data.search}
				onChange={handleChange}
				class="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900"
			/>
			{data.search.length > 3 ? (
				<div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
					<div class="flex justify-between items-center mb-4">
						<h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
							Find users
						</h3>
					</div>
					<div class="flow-root">
						<ul
							role="list"
							class="divide-y divide-gray-200 dark:divide-gray-700"
						>
							{userDatas.map((userInfo) => (
								<li class="py-3 sm:py-4">
									<div class="flex items-center space-x-4">
										<div class="flex-shrink-0">
											<img
												class="w-8 h-8 rounded-full"
												src={userInfo.image}
												alt="Neil image"
											/>
										</div>
										<div class="flex-1 min-w-0">
											<button onClick={click} value={userInfo.id}>
												View
											</button>
											<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
												{userInfo.firstName}{" "}
											</p>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			) : undefined}
		</div>
	);
};

export default SearchPage;
// import React from "react";

// export default function Modal() {
// 	const [showModal, setShowModal] = React.useState(false);
// 	return (
// 		<>
// 			<button
// 				className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
// 				type="button"
// 				onClick={() => setShowModal(true)}
// 			>
// 				Open regular modal
// 			</button>
// 			{showModal ? (
// 				<>
// 					<div class="min-h-screen bg-gray-100 flex items-center">
// 						<div class="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
// 							<div class="py-12 p-10 bg-white rounded-xl">
// 								<div class="mb-6">
// 									<label
// 										class="mr-4 text-gray-700 font-bold inline-block mb-2"
// 										for="name"
// 									>
// 										Name
// 									</label>
// 									<input
// 										type="text"
// 										class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
// 										placeholder="Your name"
// 									/>
// 								</div>
// 								<div class="">
// 									<label
// 										class="mr-4 text-gray-700 font-bold inline-block mb-2"
// 										for="name"
// 									>
// 										Email
// 									</label>
// 									<input
// 										type="text"
// 										class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
// 										placeholder="@email"
// 									/>
// 								</div>
// 								<label class="flex justify-start items-start">
// 									<div class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
// 										<input type="checkbox" class="opacity-0 absolute" />
// 										<svg
// 											class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
// 											viewBox="0 0 20 20"
// 										>
// 											<path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
// 										</svg>
// 									</div>
// 									<div class="select-none">Label Text</div>
// 								</label>
// 								<span class="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">
// 									forget password
// 								</span>
// 								<button class="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">
// 									LOGIN
// 								</button>
// 							</div>
// 						</div>
// 					</div>
// 				</>
// 			) : null}
// 		</>
// 	);
// }

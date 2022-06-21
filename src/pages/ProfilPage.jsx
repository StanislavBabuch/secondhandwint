import React, { useEffect, useState } from "react";
import axios from "axios";
// import myIcon from "././././static/Like_Icon.svg";
import { useNavigate } from "react-router-dom";
import Post from "../components/post";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
function ProfilPage({ children, userInfo }) {
	const [posts, setPosts] = useState([]);
	const userId = sessionStorage.getItem("id");
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/login");
	};
	const getUserInfo = () => {
		axios
			.get("https://dummyjson.com/users/" + userId + "/posts")
			.then((response) => {
				setPosts(response.data.posts);
				console.log(response.data.posts);
			})
			.catch((error) => {
				if (error.response) {
				}
			});
	};
	console.log(
		"https://dummyjson.com/comments/post/" + posts.map((po) => po.id),
		"post",
	);

	useEffect(() => getUserInfo(), []);
	console.log(posts, "33");
	return (
		<>
			<section class="text-gray-600 body-font w-full">
				<div class="container px-5 py-24 mx-auto flex flex-wrap">
					<div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
						<div class="w-full sm:p-4 px-4 mb-6">
							<h1 class="title-font font-medium text-xl mb-2 text-gray-900">
								{userInfo.firstName} {userInfo.lastName}z{" "}
							</h1>
						</div>
						<div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
							<h2 class="title-font font-medium text-3xl text-gray-900">
								{userInfo.age}{" "}
							</h2>
							<p class="leading-relaxed">Age</p>
						</div>
						<div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
							<h2 class="title-font font-medium text-3xl text-gray-900">
								{/* {userInfo.address.city}{" "} */}
							</h2>
							<p class="leading-relaxed">Address</p>
						</div>
						<div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
							<h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
							<p class="leading-relaxed">Downloads</p>
						</div>
						<div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
							<h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
							<p class="leading-relaxed">Products</p>
						</div>
					</div>
					<div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
						<img
							class="object-cover object-center  laptop:h-40 w-40  phone:h-19 w-19"
							src={userInfo.image}
							alt="stats"
						/>
					</div>
				</div>
			</section>
			{/* <div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
				<div class="md:flex">
					<div class="md:shrink-0">
						<img
							class="h-48 w-full object-cover md:h-full md:w-48"
							src={userInfo.image}
							alt="Man looking at item at a store"
						/>
					</div>
					<div class="p-8">
						<div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
							<p class="text-gray-800 dark:text-white text-xl font-medium mt-2">
								{userInfo.firstName} {userInfo.lastName}
							</p>{" "}
						</div>

						<a
							class=" mt-3 text-xs p-2 bg-pink-500 text-white px-4 rounded-full"
							href={userInfo.domain}
						>
							{userInfo.domain}
						</a>
					</div>
				</div>
			</div> */}

			<div class="flex flex-wrap -mx-1 overflow-hidden lg:-mx-1 xl:-mx-1">
				<div class="my-1 px-1 w-full overflow-hidden sm:w-1/4 lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
					<Menu />
				</div>

				<div class="my-1 px-1 w-full overflow-hidden sm:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2 m-2">
					<label class="  text-gray-700" for="name">
						<textarea
							class=" bg-white dark:bg-gray-800 text-pink-700  w-112  shadow-lg   p-4flex-1 appearance-none border border-gray-300 w-full py-2 px-4 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
							id="comment"
							placeholder="Enter your comment"
							name="comment"
							rows="5"
							cols="40"
						></textarea>

						<button
							type="button"
							class="py-2 px-4  bg-indigo-300 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
						>
							Send
						</button>
					</label>
					<Post post={posts} userInfo={userInfo} />{" "}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default ProfilPage;

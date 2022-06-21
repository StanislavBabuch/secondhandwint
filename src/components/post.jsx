import React, { useEffect, useState } from "react";
import axios from "axios";
// import myIcon from "././././static/Like_Icon.svg";
import { useNavigate } from "react-router-dom";
function Post({ children, post, userInfo }) {
	const [posts, setPosts] = useState([]);
	const userId = sessionStorage.getItem("id");
	const navigate = useNavigate();
	let a = "";
	console.log(post, "q");
	return (
		<>
			<div class="flex flex-wrap overflow-hidden md:-mx-px lg:-mx-px xl:-mx-px ">
				{post.map((post) => (
					<div
						key={post.id}
						class="bg-white dark:bg-gray-800 w-112  shadow-lg  rounded-xl p-4 m-4 "
					>
						<p class="text-gray-600 dark:text-white">
							<span class="font-bold text-indigo-500 text-lg">“</span>
							{post.body}
							<span class="font-bold text-indigo-500 text-lg">”</span>
						</p>
						<div class="flex  items-center mt-4">
							<a href="#" class="block relative">
								<img
									alt="profil"
									src={userInfo.image}
									class="mx-auto object-cover rounded-full h-10 w-10 "
								/>
							</a>
							<div class="flex flex-col ml-2 justify-between">
								<span class="font-semibold text-indigo-500 text-sm">
									{userInfo.firstName}
									{userInfo.lastName}
								</span>
								<span class="dark:text-gray-400 text-xs flex items-center">
									{post.tags}
								</span>
								<button
									class=" animate-bounce dark:text-gray-400 text-xs flex items-center"
									onClick={() => (a = post.reactions + 1)}
								>
									❤️{" "}
									<span class="  dark:text-gray-400 text-xs flex items-center">
										{post.reactions}
									</span>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default Post;

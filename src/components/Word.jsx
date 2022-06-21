import axios from "axios";
import React, { useState, useEffect, Fragment, useCallback } from "react";

function Word() {
	let [products, setProducts] = useState([]);

	const getProducts = () => {
		axios
			.get("https://dummyjson.com/quotes/1")
			.then((response) => {
				setProducts(response.data.quote);
			})
			.catch((error) => {
				if (error.response) {
				}
			});
	};

	useEffect(() => getProducts());
	console.log(products);
	return (
		<>
			<div class="text-5xl font-extrabold ...">
				<span class="dark:from-red-500 to-violet-530 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
					{products}{" "}
				</span>
			</div>
		</>
	);
}
export default Word;

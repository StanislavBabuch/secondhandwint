import axios from "axios";
import React, { useState, useEffect, Fragment, useCallback } from "react";
import ProductCard from "../components/productCard";
import apiData from "../services/apiService";
import catData from "../services/getCategoryFromApi";

function AllProducts() {
	let [products, setProducts] = useState([]);

	const mapedProducts = products.map((product) => product.price);

	let maxPrice = Math.max.apply(Math, mapedProducts);
	let minPrice = Math.min.apply(Math, mapedProducts);
	let [price, setPrice] = useState([0, 100000]);

	const getProducts = useCallback(() => {
		axios
			.get("https://dummyjson.com/products?limit=100")
			.then((response) => {
				setProducts(response.data.products);
			})
			.catch((error) => {
				if (error.response) {
				}
			});
	}, []);

	useEffect(() => getProducts(), [getProducts]);
	console.log(products);
	return (
		<>
			<div class="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-2 lg:-mx-5 xl:-mx-2">
				{products.length > 0 ? (
					products.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
							products={products}
						/>
					))
				) : (
					<div class="w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-5 lg:px-5 xl:my-2 xl:px-2">
						<div class="bg-white w-1/2 mx-auto p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
							<div class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse"></div>
							<div class="flex flex-col flex-1 gap-5 sm:p-2">
								<div class="flex flex-1 flex-col gap-3">
									<div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl"></div>
									<div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
									<div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
									<div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
									<div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
								</div>
								<div class="mt-auto flex gap-3">
									<div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full"></div>
									<div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full"></div>
									<div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto"></div>
								</div>
							</div>
						</div>{" "}
					</div>
				)}
			</div>
		</>
	);
}
export default AllProducts;

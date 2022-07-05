import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Carousel from "./Carousel";
export default function ProductCard({
	product,
	products,
	children,
	index,
	cart,
	inCart,
}) {
	const history = useNavigate();
	const newProduct = [];
	const wishProduct = [];

	const [disable, setDisable] = useState(false);
	const [open, setOpen] = useState(true);
	const addProduct = () => {
		newProduct.push({
			id: product.id,
			title: product.title,
			count: 1,
			price: product.price,
			thumbnail: product.thumbnail,
			discountPercentage: product.discountPercentage,
		});

		localStorage.setItem(`${product.id}`, JSON.stringify(newProduct));
		setDisable(true);
	};
	const addWishProduct = () => {
		wishProduct.push({
			id: product.id,
			title: product.title,
			count: 1,
			price: product.price,
			thumbnail: product.thumbnail,
			discountPercentage: product.discountPercentage,
		});

		localStorage.setItem(`Wish ${product.id}`, JSON.stringify(wishProduct));
		setDisable(true);
	};
	function handleClick() {
		history("/product", {
			state: {
				productId: product.id,
				product: product,
				products: products,
			},
		});
	}
	return (
		<>
			<div class="w-80 flex justify-center items-center hover:drop-shadow-2xl ">
				<div class="w-full  p-4">
					<div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
						<div class="prod-title">
							<p class="text-2xl uppercase text-gray-900 font-bold">
								{product.title}{" "}
							</p>
							<p class="uppercase text-sm text-gray-400">{product.brand} </p>
						</div>
						<div class="prod-img">
							<img
								src={product.thumbnail}
								class="w-full object-cover object-center"
							/>
						</div>
						{/* <Carousel images={product.images} /> */}
						<div class="prod-info grid gap-10">
							<div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
								<p class="font-bold text-xl"> {product.price}$</p>
								<button class="m-auto mt-5 px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
									Add to cart
								</button>

							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

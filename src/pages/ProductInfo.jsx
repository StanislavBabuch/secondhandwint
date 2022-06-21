import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProductInfo = () => {
	const { state } = useLocation();

	const product = state.userDatas[0];

	console.log(product, "p");
	const products = state;

	return <>sd</>;
};
export default ProductInfo;

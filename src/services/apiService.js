let apiBaseUrl = "https://dummyjson.com/";

const getProductsFromApi = (category, valueProducts) =>
	new Promise((resolve, reject) => {
		let productsEndpoint = apiBaseUrl;

		if (category) {
			productsEndpoint += "products/category/" + category;
		} else if (valueProducts) {
			productsEndpoint += "products/search/" + valueProducts;
		} else {
			productsEndpoint += "products?limit=100";
		}

		fetch(productsEndpoint)
			.then((res) => res.json())
			.then((response) => {
				resolve(response.products);
			})
			.catch((err) => {
				reject(err);
			});
	});

const apiData = {
	getProductsFromApi,
};

export default apiData;

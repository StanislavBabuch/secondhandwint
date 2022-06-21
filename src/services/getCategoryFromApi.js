let apiBaseUrl = "https://dummyjson.com/products/categories";

const getCategoryFromApi = (countCategory) =>
	new Promise((resolve, reject) => {
		const productsEndpoint = apiBaseUrl + "";

		fetch(productsEndpoint)
			.then((res) => res.json())
			.then((response) => {
				resolve(response);
			})
			.catch((err) => {
				reject(err);
			});
	});

const catData = {
	getCategoryFromApi,
};

export default catData;

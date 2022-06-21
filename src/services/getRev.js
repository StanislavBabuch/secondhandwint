const apiRevBaseUrl = "https://testimonialapi.toolcarton.com/api";

const getRev = () =>
    new Promise((resolve, reject) => {
        const productsEndpoint = apiRevBaseUrl;

        fetch(productsEndpoint)
            .then((res) => res.json())
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });

const reviewData = {
    getRev,
};
export default reviewData;

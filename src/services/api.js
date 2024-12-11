const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-3BH5MQLF4FooDAo6Nsv9WaAG";

const getApi = () => {
  return `${BASE_URL}/coins/markets?per_page=20&page=1&x_cg_pro_api_key=${API_KEY}	`;
};

export { getApi };

const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-3BH5MQLF4FooDAo6Nsv9WaAG";

const getApi = (page, currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_api_key=${API_KEY}`;
};

const searchApi = (query) => {
  return `${BASE_URL}/search?query=${query}&x_cg_api_key=${API_KEY}`;
};

export { getApi, searchApi };

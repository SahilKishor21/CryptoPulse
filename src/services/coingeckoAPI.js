import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const getBitcoinPrice = () =>
  axios.get(`${API_BASE_URL}/simple/price`, {
    params: {
      ids: 'bitcoin',
      vs_currencies: 'usd,inr',
      include_24hr_change: true,
    },
  });

export const getTrendingCoins = () =>
  axios.get(`${API_BASE_URL}/search/trending`);

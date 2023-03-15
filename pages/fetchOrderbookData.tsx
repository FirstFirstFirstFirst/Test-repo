import axios from 'axios';

const fetchOrderbookData = async () => {
  try {
    const response = await axios.get('https://api.kucoin.com/api/v1/market/orderbook/level2_20?symbol=BTC-USDT');
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default fetchOrderbookData;

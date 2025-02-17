import axios from "axios";

// Fetching Bitcoin price from Binance API
export const fetchBitcoinPrice = async () => {
    try {
        const response = await axios.get('https://api.binance.com/api/v3/ticker/price', {
            params: { symbol: 'BTCUSDT' },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Bitcoin price', error);
    } finally {
    }
};
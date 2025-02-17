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

export const fetchBitcoinHistory = async () => {
    try {
        const response = await fetch(
            'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=10'
        );
        const data = await response.json();
        return data.map((item: string) => ({
            time: new Date(item[0]).toLocaleTimeString(),
            price: parseFloat(item[4]),
        }));
    } catch (error) {
        console.error('Error fetching Bitcoin history:', error);
        return [];
    }
};
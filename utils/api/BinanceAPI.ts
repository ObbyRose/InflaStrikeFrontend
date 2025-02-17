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
            "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=10"
        );
        const data = await response.json();

        return data.map((item: any) => ({
            time: new Date(item[0]).toLocaleTimeString(), // Timestamp
            open: parseFloat(item[1]), // Open price
            high: parseFloat(item[2]), // High price
            low: parseFloat(item[3]), // Low price
            close: parseFloat(item[4]), // Close price
        }));
    } catch (error) {
        console.error("Error fetching Bitcoin history:", error);
        return [];
    }
};


import { tickerData } from "../internal/sql/handleSQLite";

const popularCurrencies = [
    'BTCUSDT', // Bitcoin  
    'ETHUSDT', // Ethereum  
    'XRPUSDT', // XRP  
    'BNBUSDT', // Binance Coin  
    'ADAUSDT', // Cardano  
    'DOGEUSDT', // Dogecoin  
    'SOLUSDT', // Solana  
    'TONUSDT', // Toncoin  
    'DOTUSDT', // Polkadot  
    'MATICUSDT' // Polygon  
];  

export const fetchCandlestickData = async (symbol: string) => {
    try {
        const response = await fetch(
            `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1h&limit=15`
        );
        const data = await response.json();

        if (!data || data.length === 0) {
            console.warn(`No candlestick data available for ${symbol}`);
            return [];
        }

        return data.map((item: any) => ({
            time: new Date(item[0]).toLocaleTimeString(),
            open: parseFloat(item[1]),
            high: parseFloat(item[2]),
            low: parseFloat(item[3]),
            close: parseFloat(item[4]),
        }));
    } catch (error) {
        console.error(`Error fetching candlestick data for ${symbol}:`, error);
        return [];
    }
};

export const fetchLineData = async (symbol: string) => {
    try {
        const response = await fetch(
            `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1d&limit=15`
        );
        const data = await response.json();

        if (!data || data.length === 0) {
            console.warn(`No line chart data available for ${symbol}`);
            return [];
        }

        return data.map((item: any) => ({
            time: new Date(item[0]).toLocaleTimeString(),
            price: parseFloat(item[4]),
        }));
    } catch (error) {
        console.error(`Error fetching line chart data for ${symbol}:`, error);
        return [];
    }
};

export const fetchAllCoinsTicker = async () => {
    try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/24hr');
        const data = await response.json();

        const filteredData = data.filter((crypto: any) => popularCurrencies.includes(crypto.symbol));
        const sortedData = filteredData.sort(
            (a: any, b: any) => popularCurrencies.indexOf(a.symbol) - popularCurrencies.indexOf(b.symbol)
        );
        const formatted = sortedData.map((curr:any) => ({
            symbol: curr.symbol,
            percentage: curr.priceChangePercent,
            price: curr.lastPrice,
        }))
        // console.log("RES", JSON.stringify(formatted, null, 2));
        return formatted as tickerData[];
    } catch (error) {
        console.error('Error fetching Binance data:', error);
        return [];
    }
};

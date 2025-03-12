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

export const fetchLivePrice = async (symbol: string) => {
    try {
        const response = await fetch(
            `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
        );
        const data = await response.json();

        if (!data?.price) {
            console.warn(`No live price available for ${symbol}`);
            return null;
        }

        return parseFloat(data.price);
    } catch (error) {
        console.error(`Error fetching live price for ${symbol}:`, error);
        return null;
    }
};

export const fetchPercentageGain = async (symbol: string) => {
    try {
        const candlestickData = await fetchCandlestickData(symbol);
        if (candlestickData.length < 2) {
            console.warn(`Not enough data to calculate percentage gain for ${symbol}`);
            return null;
        }

        const latestClose = candlestickData[candlestickData.length - 1].close;
        const previousClose = candlestickData[candlestickData.length - 2].close;

        if (previousClose === 0) {
            console.warn(`Previous closing price is zero for ${symbol}`);
            return null;
        }

        return ((latestClose - previousClose) / previousClose) * 100;
    } catch (error) {
        console.error(`Error fetching percentage gain for ${symbol}:`, error);
        return null;
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

// fetchAllCoinsTicker();
export const fetchBitcoinHistory = async () => fetchCandlestickData("BTCUSDT");
export const fetchEthereumHistory = async () => fetchCandlestickData("ETHUSDT");
export const fetchXRPHistory = async () => fetchCandlestickData("XRPUSDT");

export const fetchBitcoinLineData = async () => fetchLineData("BTCUSDT");
export const fetchEthereumLineData = async () => fetchLineData("ETHUSDT");
export const fetchXRPLineData = async () => fetchLineData("XRPUSDT");

export const fetchBitcoinLivePrice = async () => fetchLivePrice("BTCUSDT");
export const fetchEthereumLivePrice = async () => fetchLivePrice("ETHUSDT");
export const fetchXRPLivePrice = async () => fetchLivePrice("XRPUSDT");

export const fetchBitcoinPercentageGain = async () => fetchPercentageGain("BTCUSDT");
export const fetchEthereumPercentageGain = async () => fetchPercentageGain("ETHUSDT");
export const fetchXRPPercentageGain = async () => fetchPercentageGain("XRPUSDT");

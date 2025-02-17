export const fetchCandlestickData = async (symbol: string) => {
    try {
        const response = await fetch(
            `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1h&limit=11`
        );
        const data = await response.json();

        if (!data || data.length === 0) return [];

        return data.map((item: any) => ({
            time: new Date(item[0]).toLocaleTimeString(),
            open: parseFloat(item[1]),
            high: parseFloat(item[2]),
            low: parseFloat(item[3]),
            close: parseFloat(item[4]),
        }));
    } catch (error) {
        console.error(`Error fetching ${symbol} data:`, error);
        return [];
    }
};

// Fetch BTC, ETH, and XRP data
export const fetchBitcoinHistory = async () => fetchCandlestickData("BTCUSDT");
export const fetchEthereumHistory = async () => fetchCandlestickData("ETHUSDT");
export const fetchXRPHistory = async () => fetchCandlestickData("XRPUSDT");

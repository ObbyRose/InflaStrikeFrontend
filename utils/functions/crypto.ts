import { CandlestickData } from "@/components/market/CandleChart";
import axios from "axios";

const BINANCE_API_URL = "https://api.binance.com/api/v3";

interface ProfitResult {
    symbol: string;
    investedAmount: number;
    startDate: string;
    endDate: string;
    startPrice: number;
    endPrice: number;
    cryptoAmount: number;
    endValue: number;
    profit: number;
    profitPercentage: string;
    historicalData: CandlestickData[];
}

/**
 * Determines the best interval based on the date range.
 * @param {number} startTime - Start time in milliseconds.
 * @param {number} endTime - End time in milliseconds.
 * @returns {string} - Binance Klines interval.
 */
const getBestInterval = (startTime: number, endTime: number): string => {
    const diffMs = endTime - startTime;
    const diffDays = diffMs / (1000 * 60 * 60 * 24); // Convert ms to days

    if (diffDays < 1 / 24) return "1m"; // Less than 1 hour → 1-minute interval
    if (diffDays < 0.25) return "5m"; // Less than 6 hours → 5-minute interval
    if (diffDays < 1) return "15m"; // Less than 24 hours → 15-minute interval
    if (diffDays < 7) return "1h"; // Less than a week → 1-hour interval
    if (diffDays < 30) return "4h"; // Less than a month → 4-hour interval
    if (diffDays < 90) return "1d"; // Less than 3 months → 1-day interval
    if (diffDays < 365) return "1w"; // Less than 1 year → 1-week interval
    return "1M"; // More than 1 year → 1-month interval
};

/**
 * Calculates profit and retrieves historical candlestick data.
 * @param {string} symbol - The trading pair (e.g., "BTCUSDT").
 * @param {number} amount - The amount in USD invested.
 * @param {string} startDate - The investment start date (YYYY-MM-DD).
 * @param {string} endDate - The investment end date (YYYY-MM-DD).
 * @returns {Promise<ProfitResult | null>} - Profit details and historical data.
 */
const calculateCryptoProfitBetweenDates = async (
    symbol: string,
    amount: number,
    startDate: string,
    endDate: string
    ): Promise<ProfitResult | null> => {
    try {
        // Convert dates to UNIX timestamps (milliseconds)
        const startTime = new Date(startDate).getTime();
        const endTime = new Date(endDate).getTime();

        // Fetch start price
        const startResponse = await axios.get(`${BINANCE_API_URL}/klines`, {
        params: { symbol, interval: "1d", limit: 1, startTime },
        });
        if (startResponse.data.length === 0) throw new Error("No data for start date.");
        const startPrice = parseFloat(startResponse.data[0][4]);

        // Fetch end price
        const endResponse = await axios.get(`${BINANCE_API_URL}/klines`, {
        params: { symbol, interval: "1d", limit: 1, startTime: endTime },
        });
        if (endResponse.data.length === 0) throw new Error("No data for end date.");
        const endPrice = parseFloat(endResponse.data[0][4]);

        // Calculate profit details
        const cryptoAmount = amount / startPrice;
        const endValue = cryptoAmount * endPrice;
        const profit = endValue - amount;
        const profitPercentage = ((profit / amount) * 100).toFixed(2);

        // Get the best interval for historical data
        const interval = getBestInterval(startTime, endTime);

        // Fetch historical candlestick data
        const historyResponse = await axios.get(`${BINANCE_API_URL}/klines`, {
        params: { symbol, interval, startTime, endTime },
        });

        // Format historical data for the chart
        const historicalData: CandlestickData[] = historyResponse.data.map((candle: any) => ({
            time: candle[0],
            open: parseFloat(candle[1]),
            high: parseFloat(candle[2]),
            low: parseFloat(candle[3]),
            close: parseFloat(candle[4]),
            volume: parseFloat(candle[5]),
        }));

        return {
        symbol,
        investedAmount: amount,
        startDate,
        endDate,
        startPrice,
        endPrice,
        cryptoAmount,
        endValue,
        profit,
        profitPercentage,
        historicalData,
        };
    } catch (error: any) {
        console.error("Error fetching data:", error.message);
        return null;
    }
};

export default calculateCryptoProfitBetweenDates;

import React, { useEffect, useState } from 'react';
import { LineChart } from 'react-native-wagmi-charts';
import axios from 'axios';
import { Box } from '../ui/box';
import { Text } from '../ui/text';
import { Dimensions } from 'react-native';
import { Spinner } from '../ui/spinner';
import { useTheme } from '@/utils/Themes/ThemeProvider';

interface Order {
    price: number;
    amount: number;
}

interface BinanceOrderBookResponse {
    lastUpdateId: number;
    bids: [string, string][]; // Array of [price, amount] strings
    asks: [string, string][];
}

interface DepthChartProps {
    symbol?: string;
}

function DepthChartComponent({ symbol = 'BTCUSDT' }: DepthChartProps) {
    const [bidData, setBidData] = useState<{timestamp: number, value: number}[]>([]);
    const [askData, setAskData] = useState<{timestamp: number, value: number}[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [midPrice, setMidPrice] = useState<number>(0);
    const [maxVolume, setMaxVolume] = useState<number>(0);
    const { width } = Dimensions.get('window');
    const { appliedTheme } = useTheme();

    useEffect(() => {
        async function fetchOrderBook(): Promise<void> {
            setLoading(true);
            try {
                const { data } = await axios.get<BinanceOrderBookResponse>(
                    `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=100`
                );
                
                // Calculate mid price to center the chart
                const highestBid = parseFloat(data.bids[0][0]);
                const lowestAsk = parseFloat(data.asks[0][0]);
                const midPointPrice = (highestBid + lowestAsk) / 2;
                setMidPrice(midPointPrice);
                
                // Process bids - buy orders (left side, green)
                let cumulativeVolume = 0;
                const processedBids = data.bids
                    .map(([price, amount]) => ({
                        price: parseFloat(price),
                        amount: parseFloat(amount)
                    }))
                    .sort((a, b) => b.price - a.price) // Sort descending by price
                    .map(bid => {
                        cumulativeVolume += bid.amount;
                        return {
                            timestamp: bid.price, // Price is the x-axis
                            value: cumulativeVolume // Cumulative volume is the y-axis
                        };
                    });
                
                // Process asks - sell orders (right side, red)
                cumulativeVolume = 0;
                const processedAsks = data.asks
                    .map(([price, amount]) => ({
                        price: parseFloat(price),
                        amount: parseFloat(amount)
                    }))
                    .sort((a, b) => a.price - b.price) // Sort ascending by price
                    .map(ask => {
                        cumulativeVolume += ask.amount;
                        return {
                            timestamp: ask.price, // Price is the x-axis
                            value: cumulativeVolume // Cumulative volume is the y-axis
                        };
                    });
                
                // Calculate maximum volume for Y-axis labels
                const maxBidVolume = processedBids.length > 0 ? processedBids[processedBids.length - 1].value : 0;
                const maxAskVolume = processedAsks.length > 0 ? processedAsks[processedAsks.length - 1].value : 0;
                setMaxVolume(Math.max(maxBidVolume, maxAskVolume));
                
                // Make sure we have at least one data point
                if (processedBids.length > 0) {
                    setBidData(processedBids);
                }
                
                if (processedAsks.length > 0) {
                    setAskData(processedAsks);
                }
                
                setLoading(false);
            } catch (error) {
                console.error('Error fetching order book:', error);
                setLoading(false);
            }
        }
    
        fetchOrderBook();
        
        // Set up polling every 10 seconds
        // const intervalId = setInterval(fetchOrderBook, 10000);
        
        // Clean up interval
        // return () => clearInterval(intervalId);
    }, [symbol]);

    // Initial empty data to prevent undefined errors
    const emptyData = [{ timestamp: 0, value: 0 }];

    // Calculate bid domain (left side)
    const bidMin = bidData[bidData.length - 1]?.timestamp || 0;
    const bidMax = bidData[0]?.timestamp || 0;
    
    // Calculate ask domain (right side)
    const askMin = askData[0]?.timestamp || 0;
    const askMax = askData[askData.length - 1]?.timestamp || 0;

    // Labeling Components
    const generateVolumeLabels = () => {
        return (
            <Box className="absolute right-0 inset-y-0 w-10 flex flex-col justify-between py-1">
                {[...Array(5)].map((_, i) => {
                    const volume = (maxVolume * (4 - i) / 4).toFixed(3);
                    return (
                        <Text key={i} className="text-xs text-gray-500 text-right">
                            {volume}
                        </Text>
                    );
                })}
            </Box>
        );
    };
    const generatePriceLabels = () => {
        const priceRange = Math.max(askMax - askMin, bidMax - bidMin);
        const step = priceRange / 4;
        
        return (
            <Box className="flex flex-row justify-between py-3">
                {[...Array(5)].map((_, i) => {
                    const price = Math.round(bidMin + (i * step));
                    return (
                        <Text key={i} className="text-xs text-gray-500">
                            {price.toLocaleString()}
                        </Text>
                    );
                })}
            </Box>
        );
    };

    return (
    <Box className={`bg-card-${appliedTheme} rounded-lg flex flex-col space-y-4`}>                
        {loading ?
            <Spinner className='h-[235px]'/>
        : 
        <>
            <Box className="relative h-[200px]">
                {/* Display current mid price */}
                <Text className="text-center text-sm text-gray-500">
                    Mid Price: {midPrice.toFixed(2)} {symbol.slice(-4)}
                </Text>
                
                {/* Volume Y-axis labels */}
                {generateVolumeLabels()}

                {/* Bids (Buy Orders) - Green */}
                <Box className="absolute left-0 inset-y-0 w-1/2">
                    <LineChart.Provider
                        data={bidData.length > 0 ? bidData : emptyData}
                        xDomain={[bidMin, bidMax]}
                    >
                        <LineChart 
                            width={width * 0.48}
                            height={200}
                        >
                            <LineChart.Path color="rgba(0, 200, 100, 1)">
                                <LineChart.Gradient/>
                            </LineChart.Path>
                            <LineChart.CursorCrosshair color="#4A3EF6" />
                            <LineChart.Tooltip 
                                textStyle={{ color: "white" }}
                                style={{ 
                                    backgroundColor: "#4A3EF6", 
                                    borderRadius: 10,
                                }}
                            />
                        </LineChart>
                    </LineChart.Provider>
                </Box>
                
                {/* Asks (Sell Orders) - Red */}
                <Box className="absolute right-0 inset-y-0 w-1/2">
                    <LineChart.Provider
                        data={askData.length > 0 ? askData : emptyData}
                        xDomain={[askMin, askMax]}
                    >
                        <LineChart
                            width={width * 0.49}
                            height={200}
                        >
                            <LineChart.Path color="rgba(255, 80, 80, 1)">
                                <LineChart.Gradient 
                                    color="rgba(255, 80, 80, 0.3)"
                                />
                            </LineChart.Path>
                            <LineChart.CursorCrosshair color="#4A3EF6" />
                            <LineChart.Tooltip 
                                textStyle={{ color: "white" }}
                                style={{ 
                                    backgroundColor: "#4A3EF6", 
                                    borderRadius: 10,
                                }}
                            />
                        </LineChart>
                    </LineChart.Provider>
                </Box>
            </Box>

            {/* Volume Y-axis labels */}
            {generatePriceLabels()}
        </>
        }
    </Box>
    );
}

export default DepthChartComponent;
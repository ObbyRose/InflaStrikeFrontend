import React, { useEffect, useState } from 'react';
import { CandlestickChart } from 'react-native-wagmi-charts';
import { Box } from '../ui/box';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { Text } from '../ui/text';
import { Svg, Rect } from 'react-native-svg';
import { Spinner } from '../ui/spinner';

export interface CandlestickData {
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number; // Added volume
}

export interface CandleMarker {
    x: number;
}

interface CandleChartComponentProps {
    symbol?: string;
    data?: CandlestickData[];
    markerTimestamps?: number[];
}

const CandleChartComponent = ({ symbol="BTCUSDT", data, markerTimestamps }: CandleChartComponentProps) => {
    const { appliedTheme } = useTheme();
    const { width } = Dimensions.get('window');
    const intervals = ["1m", "5m", "15m", "30m", "1h", "1d", "1w", "1M"];
    const [selectedInterval, setSelectedInterval] = useState("1d");

    const [chartData, setChartData] = useState<CandlestickData[]>(data || []);

    async function fetchHistoricalData(symbol: string, interval: string) {
        try {
            const response = await fetch(
                `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${selectedInterval}&limit=35`
            );
            const data = await response.json();

            let formattedData: CandlestickData[] = [];
            if(data) {
                formattedData = data.map(([timestamp, open, high, low, close, volume]: any) => ({
                timestamp,
                open: parseFloat(open),
                high: parseFloat(high),
                low: parseFloat(low),
                close: parseFloat(close),
                volume: parseFloat(volume),
                } as CandlestickData));

                setChartData(formattedData);
            }
        } catch (error) {
            console.error("Error fetching Binance data:", error);
        }
    }

    useEffect(() => {
        if(data)
            setChartData(data);
    }, [data]);

    useEffect(() => {
        if (!data) {
            fetchHistoricalData(symbol, selectedInterval);
            // Refresh data every minute
            const interval = setInterval(() => fetchHistoricalData(symbol, selectedInterval), 60000);
            return () => clearInterval(interval);
        }
    }, [symbol, selectedInterval, data]);

    const handleIntervalChange = (interval: string) => {
        setSelectedInterval(interval);
        if(!data) fetchHistoricalData(symbol, interval);
    };

    // Find the maximum volume for scaling bars
    const maxVolume = Math.max(...chartData.map((item) => item.volume), 1);

    // Find Markers Spots
    let markers: CandleMarker[] = [];
    const timestamps = chartData.map(d => d.timestamp);
    const minTimestamp = Math.min(...timestamps);
    const maxTimestamp = Math.max(...timestamps);

    // Prevent division by zero
    if (maxTimestamp !== minTimestamp) {
        markerTimestamps?.map(stamp =>
            markers.push({x :((stamp - minTimestamp) / (maxTimestamp - minTimestamp)) * width * 0.95})
        )
    }

    return (
    <Box>
        {chartData?.length ?
        <CandlestickChart.Provider data={chartData}>
            <Box className={`mx-auto h-fit bg-card-${appliedTheme} p-1 rounded-xl`}>
                {/* Candlestick Chart */}
                <Box className='relative'>
                    {/* Chart */}
                    <CandlestickChart width={width * 0.95} height={200}>
                        <CandlestickChart.Candles />
                        <CandlestickChart.Crosshair color="#3949AB">
                            <CandlestickChart.Tooltip 
                                textStyle={{ color: "white" }}
                                style={{ 
                                    backgroundColor: "#4A3EF6", 
                                    borderRadius: 10,
                                    }}
                                />
                        </CandlestickChart.Crosshair>
                    </CandlestickChart>
                    {/* Markers */}
                    {markers.map((item) => 
                        <Box
                            key={item.x}
                            className='absolute top-0 h-[200px] w-[2px] bg-red-500' 
                            style={{ left: item.x}} 
                        />
                    )}
                </Box>

                {/* Volume Bars */}
                <View className='h-[50px] flex-row items-end '>
                    <Svg width={width * 0.95} height={50}>
                        {chartData.map((item, index) => (
                            <Rect
                                key={index}
                                x={(index / chartData.length) * (width * 0.95)} 
                                y={50 - (item.volume / maxVolume) * 50} 
                                width={width * 0.95 / chartData.length - 2}
                                height={(item.volume / maxVolume) * 50}
                                fill="#828A9940" 
                            />
                        ))}
                    </Svg>
                </View>

                {/* Date Labels */}
                <Box style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, marginTop: 5 }}>
                    {chartData.map((item, index) => (
                        index % Math.floor(chartData.length / 5) === 0 ? ( // Show date every few bars
                            <Text key={index} className={`text-subText-${appliedTheme} text-[10px]`}>
                                {new Date(item.timestamp).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: '2-digit' })}
                            </Text>
                        ) : (
                            <Text key={index} className={`text-subText-${appliedTheme} text-[10px]`}> </Text>
                        )
                    ))}
                </Box>
            </Box>
        </CandlestickChart.Provider>
        :
        <Spinner className='h-[270px]'/>
        }

        {/* Interval Buttons */}
        { !data &&
        <Box className="flex-row justify-center p-3">
                {intervals.map(interval => (
                    <TouchableOpacity
                        key={interval}
                        onPress={() => handleIntervalChange(interval)}
                        className={`px-3 py-1 mx-1 rounded-2xl ${
                            selectedInterval === interval ? "bg-indigo-600" : `bg-card-${appliedTheme}`
                        }`}
                    >
                        <Text className={`text-sm text-${selectedInterval === interval ? "white" : `gray-${appliedTheme}`}`}>
                            {interval}
                        </Text>
                    </TouchableOpacity>
                ))}
        </Box>
        }
    </Box>
    );
};

export default CandleChartComponent;

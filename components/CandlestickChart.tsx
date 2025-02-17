import React from "react";
import { Text, ActivityIndicator, View, Dimensions } from "react-native";
import Svg, { Line, Rect } from "react-native-svg";
import { scaleLinear } from "d3-scale";
import Foundation from '@expo/vector-icons/Foundation';
import { Box } from "./ui/box";

interface CandlestickChartProps {
    candlestickData: any[];
}

const screenWidth = Dimensions.get("window").width;

const CandlestickChart: React.FC<CandlestickChartProps> = ({ candlestickData }) => {
    const chartWidth = screenWidth * 0.9;
    const chartHeight = 250;
    const candleWidth = 15;

    if (candlestickData.length === 0) {
        return <ActivityIndicator size="large" color="#FFD700" className="my-4" />;
    }

    const minPrice = Math.min(...candlestickData.map((d) => d.low));
    const maxPrice = Math.max(...candlestickData.map((d) => d.high));

    const xScale = scaleLinear().domain([0, candlestickData.length]).range([0, chartWidth]);
    const yScale = scaleLinear().domain([minPrice, maxPrice]).range([chartHeight, 0]);

    return (
        <Box>
            <Box className="mt-6">
                <Text className="text-xl font-bold text-white">Market Data</Text>
            </Box>
            <Svg width={chartWidth} height={chartHeight} style={{ marginTop: 20 }}>
                {candlestickData.map((d, index) => {
                    const x = xScale(index);
                    const openY = yScale(d.open);
                    const closeY = yScale(d.close);
                    const highY = yScale(d.high);
                    const lowY = yScale(d.low);

                    return (
                        <React.Fragment key={index}>
                            <Line
                                x1={x}
                                y1={highY}
                                x2={x}
                                y2={lowY}
                                stroke="white"
                                strokeWidth={2}
                            />
                            {/* Candle Body */}
                            <Rect
                                x={x - candleWidth / 2}
                                y={Math.min(openY, closeY)}
                                width={candleWidth}
                                height={Math.abs(openY - closeY)}
                                fill={d.open > d.close ? "red" : "green"}
                            />
                        </React.Fragment>
                    );
                })}
            </Svg>
        </Box>
    );
};

export default CandlestickChart;

import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Box } from "./ui/box";

interface LineChartProps {
    lineData: { time: string; price: number }[];
    title: string;
}

const screenWidth = Dimensions.get("window").width;

const LineChartComponent: React.FC<LineChartProps> = ({ lineData, title }) => {
    if (!lineData || lineData.length === 0) {
        return <Text className="text-white text-lg my-4">{title} data not available</Text>;
    }

    // Extracting time and price data
    const labels = lineData.map((item) => item.time);
    const prices = lineData.map((item) => item.price);

    return (
        <Box>
            <Text className="text-xl font-bold text-white">{title} Price Trend</Text>
            <LineChart
                data={{
                    labels: labels,
                    datasets: [{ data: prices }],
                }}
                width={screenWidth * 0.9}
                height={220}
                yAxisLabel="$"
                chartConfig={{
                    backgroundGradientFrom: "#1E1E1E",
                    backgroundGradientTo: "#1E1E1E",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: { r: "4", strokeWidth: "1", stroke: "#ffa726" },
                }}
                bezier
                style={{ marginVertical: 10, borderRadius: 8 }}
            />
        </Box>
    );
};

export default LineChartComponent;

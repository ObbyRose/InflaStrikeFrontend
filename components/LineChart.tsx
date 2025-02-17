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

    const prices = lineData.map((item) => item.price);
    const isUp = prices[prices.length - 1] > prices[0];
    const lineColor = isUp ? "rgba(0, 255, 0, 1)" : "rgba(255, 0, 0, 1)";

    return (
        <Box>
            <LineChart
                data={{
                    labels: [],
                    datasets: [{ data: prices, color: () => lineColor }],
                }}
                width={screenWidth * 0.9}
                height={120}
                chartConfig={{
                    decimalPlaces: 2,
                    color: () => "transparent",
                    labelColor: () => "transparent",
                    propsForDots: { r: "0" },
                    backgroundColor: "#111827",
                    backgroundGradientFrom: "#111827",
                    backgroundGradientTo: "#111827",
                }}
                withHorizontalLabels={false}
                withVerticalLabels={false}
                withInnerLines={false}
                withOuterLines={false}
                bezier
                style={{ marginVertical: 10, borderRadius: 8 }}
            />
        </Box>
    );
};

export default LineChartComponent;

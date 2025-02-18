import React from "react";
import { Text, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Box } from "@/components/ui/box";

const screenWidth = Dimensions.get("window").width;
const investmentData = [
    { name: "Stocks", percentage: 40, color: "#FF6384", legendFontColor: "black", legendFontSize: 14 },
    { name: "Crypto", percentage: 25, color: "#36A2EB", legendFontColor: "black", legendFontSize: 14 },
    { name: "Real Estate", percentage: 20, color: "#FFCE56", legendFontColor: "black", legendFontSize: 14 },
    { name: "Bonds", percentage: 10, color: "#4BC0C0", legendFontColor: "black", legendFontSize: 14 },
    { name: "Others", percentage: 5, color: "#9966FF", legendFontColor: "black", legendFontSize: 14 },
];

const InvestmentPieChart = () => {
    return (
        <Box>
            <Text className="text-xl font-bold text-black">My Dashboard</Text>

            <PieChart
                data={investmentData}
                width={screenWidth * 0.9}
                height={220}
                chartConfig={{
                    backgroundGradientFrom: "#1E1E1E",
                    backgroundGradientTo: "#1E1E1E",
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
                accessor={"percentage"}
                backgroundColor="transparent"
                paddingLeft="15"
            />
        </Box>
    );
};

export default InvestmentPieChart;

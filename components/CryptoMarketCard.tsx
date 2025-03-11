import React from "react";
import { Pressable, Text } from "react-native";
import { Box } from "@/components/ui/box";
import LineChartComponent from "@/components/LineChart";
import { LucideIcon } from "lucide-react-native";
import LineChartWagmi from "./LineChartWagmi";

interface CryptoMarketCardProps {
    icon: LucideIcon | React.ElementType;
    name: string;
    symbol: string;
    price: number | null;
    change: number | null;
    lineData: { time: string; price: number }[];
    bgColor: string;
    onPress: () => any;
}

const CryptoMarketCard: React.FC<CryptoMarketCardProps> = ({ icon: Icon, name, symbol, price, change, lineData, bgColor, onPress }) => {
    const dateString = (new Date()).toISOString().split("T")[0];
    const data = lineData.map(({ price, time }) => {
        const timestamp = new Date(`${dateString}T${time}Z`).getTime();
        return { timestamp, value: price };
    });
    
    return (
        <Pressable onPress={onPress}>
            <Box className="p-2 flex flex-row gap-2 items-center">
                <Box className={`${bgColor} max-w-[4rem] p-4 rounded-2xl z-10`}>
                    <Icon className="w-8 h-8" />
                </Box>
                <Box className="flex flex-col justify-center z-10">
                    <Text className="text-[16px] font-bold">{symbol}</Text>
                    <Text className="text-[13px] text-[#969AA0]">
                        {change !== null ? `${change > 0 ? '+' : ''}${change.toFixed(2)}%` : "Loading..."}
                    </Text>
                </Box>
                <Box className="flex-1 flex-row h-full">
                    <LineChartWagmi 
                        lineData={data} 
                        tooltip={true}
                    />
                </Box>
                <Box className="flex flex-col justify-center items-end">
                    <Text className="text-[16px] font-semibold">
                        {price !== null ? `$${price.toFixed(2)}` : ""}
                    </Text>
                    <Text className="text-[#969AA0]">{symbol}</Text>
                </Box>
            </Box>
        </Pressable>
    );
};

export default CryptoMarketCard;

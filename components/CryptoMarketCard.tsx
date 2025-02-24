import React from "react";
import { Text } from "react-native";
import { Box } from "@/components/ui/box";
import LineChartComponent from "@/components/LineChart";
import { LucideIcon } from "lucide-react-native";

interface CryptoMarketCardProps {
    icon: LucideIcon;
    name: string;
    symbol: string;
    price: number | null;
    change: number | null;
    lineData: { time: string; price: number }[];
    bgColor: string;
}

const CryptoMarketCard: React.FC<CryptoMarketCardProps> = ({ icon: Icon, name, symbol, price, change, lineData, bgColor }) => {
    return (
        <>
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
                <Box className="flex-1 flex-row">
                    <LineChartComponent title="" lineData={lineData} />
                </Box>
                <Box className="flex flex-col justify-center items-end">
                    <Text className="text-[16px] font-semibold">
                        {price !== null ? `$${price.toFixed(2)}` : ""}
                    </Text>
                    <Text className="text-[#969AA0]">{symbol}</Text>
                </Box>
            </Box>
        </>
    );
};

export default CryptoMarketCard;
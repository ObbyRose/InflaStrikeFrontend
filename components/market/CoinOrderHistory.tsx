import React, { useState } from "react";
import { Box } from "../ui/box";
import { Button, ButtonText } from "../ui/button";
import { Text } from "../ui/text";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Divider } from "../ui/divider";
import OrderBook from "../OrderBook"; // ✅ Import the OrderBook component

interface CoinOrderHistoryProps {
    orderBook: { bids: any[]; asks: any[] }; // ✅ Use WebSocket data from `CoinScreen`
    onPress: () => void;
}

const CoinOrderHistory: React.FC<CoinOrderHistoryProps> = ({ orderBook, onPress }) => {
    const { appliedTheme } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState<"Order Book" | "Trade History">("Order Book");
    const categories: ("Order Book" | "Trade History")[] = ["Order Book", "Trade History"];

    return (
        <Box className={`relative rounded-lg p-3 bg-card-${appliedTheme} w-full`}>
            <Box className="relative flex-row pt-2 gap-4">
                {categories.map((category) => (
                    <Text
                        key={category}
                        onPress={() => setSelectedCategory(category)}
                        className={`${
                            category === selectedCategory
                                ? `text-text-${appliedTheme} font-semibold border-b-4 border-indigo-500 z-10`
                                : `text-gray-${appliedTheme}`
                        }`}
                    >
                        {category}
                    </Text>
                ))}
                <Divider className="absolute bottom-[0.1px]" />
            </Box>

            {/* ✅ Use WebSocket Data Directly */}
            <OrderBook orderBook={orderBook} />

            <Box className="flex-row mt-3 gap-3">
                <Button className="bg-green-500 px-6 py-3 rounded-full flex-1 h-fit" onPress={onPress}>
                    <ButtonText className="text-white font-semibold">Buy</ButtonText>
                </Button>
                <Button className="bg-red-500 px-6 py-3 rounded-full flex-1 h-fit" onPress={onPress}>
                    <ButtonText className="text-white font-semibold">Sell</ButtonText>
                </Button>
            </Box>
        </Box>
    );
};

export default React.memo(CoinOrderHistory);

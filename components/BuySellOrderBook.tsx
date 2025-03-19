import React from "react";
import { Box } from "./ui/box";
import { Text } from "./ui/text";
import { ScrollView } from "react-native-gesture-handler";
import { formatNumber } from "@/utils/functions/help";

interface Order {
    price: number;
    amount: number;
}

interface BuySellOrderBookProps {
    orderBook: { bids: Order[]; asks: Order[] };  // ✅ Receives WebSocket data from props
}

const BuySellOrderBook: React.FC<BuySellOrderBookProps> = ({ orderBook }) => {
    // ✅ Only take the first 6 asks and 6 bids
    const topAsks = orderBook.asks.slice(0, 6);
    const topBids = orderBook.bids.slice(0, 6);

    return (
        <Box className="px-4 h-full">
            {/* Header */}
            <Box className="flex-row justify-between pb-2 gap-4 border-b border-gray-700">
                <Box>
                    <Text className="text-gray-400 text-sm">Price</Text>
                    <Text className="text-gray-400 text-sm">(USDT)</Text>
                </Box>
                <Box>
                    <Text className="text-gray-400 text-sm">Amount</Text>
                    <Text className="text-gray-400 text-sm self-end">(BTC)</Text>
                </Box>
            </Box>

            <Box className="flex-1 justify-between">
                {/* SELL ORDERS - Red (Top) */}
                <Box className="gap-1">
                    {topAsks.map((ask, index) => (
                        <Box key={`ask-${index}`} className="flex-row justify-between">
                            <Text className="text-red-500">{formatNumber(Number(ask.price.toFixed(2)))}</Text>
                            <Text className="text-gray-400">{ask.amount.toFixed(5)}</Text>
                        </Box>
                    ))}
                </Box>

                <Box className="gap-[1px]">
                    {topBids.length > 0 && topAsks.length > 0 && (
                        <Box className="flex-col justify-center items-center py-1 border-t border-b border-gray-700">
                            <Text className="text-green-500 text-xl font-bold">{(topBids[0].price.toFixed(2))}</Text>
                            <Text className="text-gray-500 font-medium text-lg">≈ ${topBids[0].price.toFixed(2)}</Text>
                        </Box>
                    )}
                </Box>

                <Box className="gap-1">
                    {topBids.map((bid, index) => (
                        <Box key={`bid-${index}`} className="flex-row justify-between">
                            <Text className="text-green-500">{formatNumber(Number(bid.price.toFixed(2)))}</Text>
                            <Text className="text-gray-400">{bid.amount.toFixed(5)}</Text>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default React.memo(BuySellOrderBook);

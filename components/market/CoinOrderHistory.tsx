import React, { useState, useEffect, useRef } from "react";
import { Box } from "../ui/box";
import { Button, ButtonText } from "../ui/button";
import { Text } from "../ui/text";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Divider } from "../ui/divider";
import { ScrollView } from "react-native-gesture-handler";

interface Order {
    price: number;
    amount: number;
}

interface CoinOrderHistoryProps {
    onPress: () => void;
}

const BINANCE_WS_URL = "wss://stream.binance.com:9443/ws/btcusdt@depth@1000ms";

const CoinOrderHistory: React.FC<CoinOrderHistoryProps> = ({ onPress }) => {
    const { appliedTheme } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState<"Order Book" | "Trade History">("Order Book");
    const categories: Array<"Order Book" | "Trade History"> = ["Order Book", "Trade History"];

    const [orderBook, setOrderBook] = useState<{ bids: Order[]; asks: Order[] }>({ bids: [], asks: [] });

    const ws = useRef<WebSocket | null>(null);
    const isMounted = useRef<boolean>(true);

    useEffect(() => {
        isMounted.current = true;
        ws.current = new WebSocket(BINANCE_WS_URL);

        ws.current.onopen = () => {
            console.log("✅ Connected to Binance WebSocket");
        };

        ws.current.onmessage = (event: MessageEvent) => {
            if (!isMounted.current) return; // Prevent updates if unmounted

            const data = JSON.parse(event.data);
            if (data.b && data.a) {
                const updatedBids = mergeOrderBook(data.b, "bids");
                const updatedAsks = mergeOrderBook(data.a, "asks");

                // ✅ Update state immediately when new data arrives
                setOrderBook({ bids: updatedBids, asks: updatedAsks });
            }
        };

        ws.current.onerror = (error) => {
            console.error("🚨 WebSocket Error:", error);
        };

        ws.current.onclose = () => {
            console.log("🔴 WebSocket Disconnected.");
        };

        return () => {
            isMounted.current = false;
            ws.current?.close();
        };
    }, []); // ✅ Runs only once when the component mounts

    const mergeOrderBook = (updates: [string, string][], type: "bids" | "asks") => {
        const updatedOrders = updates
            .map(([price, amount]) => ({ price: parseFloat(price), amount: parseFloat(amount) }))
            .filter(order => order.amount > 0);

        return updatedOrders
            .sort((a, b) => (type === "bids" ? b.price - a.price : a.price - b.price)) // ✅ Sort bids high → low, asks low → high
            .slice(0, 10);
    };

    return (
        <Box className={`relative rounded-lg p-3 bg-card-${appliedTheme} w-full`}>
            
            {/* Header Tabs */}
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

            {/* Order Book Data */}
            <Box className="pt-3 max-h-48">
                <ScrollView>
                    {orderBook.bids.length === 0 && orderBook.asks.length === 0 ? (
                        <Text className="text-center text-gray-500">Loading order book...</Text>
                    ) : (
                        orderBook.bids.map((bid, index) => (
                            <Box key={`bid-${index}`} className="flex-row justify-between py-1 items-center">
                                <Text className="text-gray-500">{orderBook.asks[index]?.amount?.toFixed(5) || "-"}</Text>
                                <Text className="text-red-500">{orderBook.asks[index]?.price?.toFixed(2) || "-"}</Text>
                                <Text className="text-green-500">{bid.price.toFixed(2)}</Text>
                                <Text className="text-gray-500">{bid.amount.toFixed(5)}</Text>
                            </Box>
                        ))
                    )}
                </ScrollView>
            </Box>

            {/* Buy & Sell Buttons */}
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

export default CoinOrderHistory;

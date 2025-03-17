import React, { useState, useEffect, useRef } from "react";
import { Box } from "./ui/box";
import { Text } from "./ui/text";
import { ScrollView } from "react-native-gesture-handler";
import { formatNumber } from "@/utils/functions/help";

interface Order {
    price: number;
    amount: number;
}

const BINANCE_WS_URL = "wss://stream.binance.com:9443/ws/btcusdt@depth@1000ms";

const BuySellOrderBook: React.FC = () => {
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
            if (!isMounted.current) return;

            const data = JSON.parse(event.data);
            if (data.b && data.a) {
                const updatedBids = mergeOrderBook(data.b, "bids");
                const updatedAsks = mergeOrderBook(data.a, "asks");

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
    }, []);

    const mergeOrderBook = (updates: [string, string][], type: "bids" | "asks") => {
        const updatedOrders = updates
            .map(([price, amount]) => ({ price: parseFloat(price), amount: parseFloat(amount) }))
            .filter(order => order.amount > 0);

        return updatedOrders
            .sort((a, b) => (type === "bids" ? b.price - a.price : a.price - b.price)) 
            .slice(0, 6);
    };

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

            {/* <ScrollView className="bg-black"> */}
                <Box className="flex-1 justify-between">
                    {/* SELL ORDERS - Red (Top) */}
                    <Box className="gap-1">
                    {orderBook.asks.map((ask, index) => (
                        <Box key={`ask-${index}`} className="flex-row justify-between">
                            <Text className="text-red-500">{formatNumber(Number(ask.price.toFixed(2)))}</Text>
                            <Text className="text-gray-400">{ask.amount.toFixed(5)}</Text>
                        </Box>
                    ))}
                    </Box>

                    <Box className="gap-[1px]">
                    {/* MARKET PRICE - Green Highlight */}
                    {orderBook.bids.length > 0 && orderBook.asks.length > 0 && (
                        <Box className="flex-col justify-center items-center py-1 border-t border-b border-gray-700">
                            <Text className="text-green-500 text-xl font-bold">{(orderBook.bids[0].price.toFixed(2))}</Text>
                            <Text className="text-gray-500 font-medium text-lg">≈ ${orderBook.bids[0].price.toFixed(2)}</Text>
                        </Box>
                    )}
                    </Box>

                    <Box className="gap-1">
                    {/* BUY ORDERS - Green (Bottom) */}
                    {orderBook.bids.map((bid, index) => (
                        <Box key={`bid-${index}`} className="flex-row justify-between">
                            <Text className="text-green-500">{formatNumber(Number(bid.price.toFixed(2)))}</Text>
                            <Text className="text-gray-400">{bid.amount.toFixed(5)}</Text>
                        </Box>
                    ))}
                    </Box>
                </Box>
            {/* </ScrollView> */}
            {/* </Box> */}
        </Box>
    );
};

export default BuySellOrderBook;

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { RouteProp, useRoute } from '@react-navigation/native';
import BackHeader from '@/components/BackHeader';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import ButtonsTrain from '@/components/ButtonsTrain';
import { formatNumber } from '@/utils/functions/help';
import CandleChartComponent from '@/components/market/CandleChart';
import { Divider } from '@/components/ui/divider';
import CoinOrderHistory from '@/components/market/CoinOrderHistory';
import DepthChartComponent from '@/components/market/DepthChart';
import CoinInfo from '@/components/market/CoinInfo';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import BuySellSheet from './BuySellSheet';
import { CryptoData } from '@/utils/api/internal/sql/handleSQLite';

const getWebSocketUrl = (symbol: string) =>
    `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth@1000ms`;


type RootStackParamList = {
    CoinScreen: { coin: any };
};

type CoinScreenRouteProp = RouteProp<RootStackParamList, 'CoinScreen'>;

function CoinScreen() {
    const route = useRoute<CoinScreenRouteProp>();
    const coin = route.params?.coin as CryptoData;

    const { appliedTheme } = useTheme();
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [category, setCategory] = useState("Price");

    const [orderBook, setOrderBook] = useState<{ bids: any[]; asks: any[] }>({ bids: [], asks: [] });
    const ws = useRef<WebSocket | null>(null);
    const isMounted = useRef<boolean>(true);

    useEffect(() => {
        if (!coin || !coin.symbol) return;
        
        const symbol = coin.symbol.toLowerCase();
        const wsUrl = getWebSocketUrl(symbol);
        ws.current = new WebSocket(wsUrl);
    
        ws.current.onopen = () => console.log(`✅ Connected to Binance WebSocket for ${symbol}`);
        ws.current.onmessage = (event) => {
            if (!isMounted.current) return;
    
            const data = JSON.parse(event.data);
            if (data.b && data.a) {
                const updatedBids = mergeOrderBook(data.b, "bids");
                const updatedAsks = mergeOrderBook(data.a, "asks");

                const hasInvalidAsks = updatedAsks.some(order => !Number.isFinite(order.price));
                if (hasInvalidAsks) {
                    console.warn(`⚠ Skipping update: Invalid ask prices for ${symbol}`);
                    return;
                }
    
                setOrderBook(prev => {
                    if (
                        JSON.stringify(prev.bids) === JSON.stringify(updatedBids) &&
                        JSON.stringify(prev.asks) === JSON.stringify(updatedAsks)
                    ) {
                        return prev;
                    }
                    return { bids: updatedBids, asks: updatedAsks };
                });
            }
        };
    
        ws.current.onerror = (error) => console.error(`🚨 WebSocket Error for ${symbol}:`, error);
        ws.current.onclose = () => console.log(`🔴 WebSocket Disconnected for ${symbol}`);
    
        return () => {
            isMounted.current = false;
            ws.current?.close();
        };
    }, [coin]); 
    
    const mergeOrderBook = (updates: [string, string][], type: "bids" | "asks") => {
        if (!Array.isArray(updates) || updates.length === 0) return []; 
    
        return updates
            .map(([price, amount]) => {
                const cleanPrice = typeof price === "string" ? price.trim() : "0";
                const cleanAmount = typeof amount === "string" ? amount.trim() : "0";

                const parsedPrice = parseFloat(cleanPrice);
                const parsedAmount = parseFloat(cleanAmount);

                const validPrice = Number.isFinite(parsedPrice) ? parsedPrice : 0;
                const validAmount = Number.isFinite(parsedAmount) ? parsedAmount : 0;
    
                return { price: validPrice, amount: validAmount };
            })
            .filter(order => order.price > 0 && order.amount > 0)
            .sort((a, b) => (type === "bids" ? b.price - a.price : a.price - b.price))
            .slice(0, 10);
    };
    

    return (
        <>
            <BuySellSheet coinData={coin} orderBook={orderBook} isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)}/>
            <MyLinearGradient type="background" color={appliedTheme === "dark" ? "dark" : "light-blue"} className="h-full">
                <ScrollView className="flex-1">
                    <Box className="flex-1 p-1">
                        <Box className="p-3">
                            <BackHeader title={coin.symbol} colorScheme="themeBased" />
                        </Box>
                        <Box className="p-5 gap-6">
                            <Box className="flex-row justify-between">
                                <Box className="gap-3">
                                    <Text className={`text-subText-${appliedTheme}`}>{coin.symbol}</Text>
                                    <Text className={`text-3xl font-extrabold text-text-${appliedTheme}`}>
                                        {formatNumber(parseFloat(coin.price || ""), 2)}
                                    </Text>
                                </Box>
                                <Box className="justify-end">
                                    <Text className={`${Number(coin.change) > 0 ? "text-green-500" : "text-red-500"}`}>
                                        ({Number(coin.change) > 0 ? "+" : ""} {coin.change}%)
                                    </Text>
                                </Box>
                            </Box>

                            <ButtonsTrain activeButton={category} buttons={["Price", "Depth", "Info"]} handlePress={setCategory} />
                        </Box>

                        {category === "Price" && <CandleChartComponent symbol={coin.symbol} />}
                        {category === "Depth" && <DepthChartComponent symbol={coin.symbol} />}
                        {category === "Info" && <CoinInfo symbol={coin.symbol} />}

                        <Box className="p-1">
                            <CoinOrderHistory orderBook={orderBook} onPress={() => setIsSheetOpen(true)} />
                        </Box>
                    </Box>
                </ScrollView>
            </MyLinearGradient>
        </>
    );
}

export default React.memo(CoinScreen);

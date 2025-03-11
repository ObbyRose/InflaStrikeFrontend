import React, { useState, useEffect } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { FlatList, ActivityIndicator, TouchableOpacity, Image, TextInput } from "react-native";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import CryptoMarketCard from "@/components/CryptoMarketCard";
import { ChevronLeft, Search } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";
import BackHeader from "@/components/BackHeader";

const MarketsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const [cryptoData, setCryptoData] = useState<any[]>([]);
    const [cryptoIcons, setCryptoIcons] = useState<{ [symbol: string]: string }>({});
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [isFetchingMore, setIsFetchingMore] = useState(false);

    // Fetch Binance historical data for charts
    const fetchHistoricalData = async (symbol: string) => {
        try {
            const response = await fetch(
                `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1h&limit=24`
            );
            const data = await response.json();
            return data.map((entry: any) => ({
                time: new Date(entry[0]).toLocaleTimeString(),
                price: parseFloat(entry[4]), // Closing price
            }));
        } catch (error) {
            console.error("Error fetching historical data:", error);
            return [];
        }
    };

    // Fetch Binance market data
    const fetchBinanceData = async (pageNumber: number) => {
        try {
            const response = await fetch("https://api.binance.com/api/v3/ticker/24hr");
            const data = await response.json();

            const sortedData = data
                .filter((coin: any) => coin.symbol.endsWith("USDT"))
                .sort((a: any, b: any) =>
                    parseFloat(b.lastPrice) * parseFloat(b.volume) - parseFloat(a.lastPrice) * parseFloat(a.volume)
                );

            const pageSize = 50;
            const newCoins = sortedData.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

            const coinDataWithHistory = await Promise.all(
                newCoins.map(async (coin: any) => {
                    const history = await fetchHistoricalData(coin.symbol);
                    return { ...coin, history };
                })
            );

            if (pageNumber === 1) {
                setCryptoData(coinDataWithHistory);
                setFilteredData(coinDataWithHistory);
            } else {
                setCryptoData((prevData) => [...prevData, ...coinDataWithHistory]);
                setFilteredData((prevData) => [...prevData, ...coinDataWithHistory]);
            }
        } catch (error) {
            console.error("Error fetching Binance data:", error);
        } finally {
            setLoading(false);
            setIsFetchingMore(false);
        }
    };

    useEffect(() => {
        fetchBinanceData(1);
    }, []);

    const loadMoreData = () => {
        if (!isFetchingMore) {
            setIsFetchingMore(true);
            setPage((prevPage) => {
                const nextPage = prevPage + 1;
                fetchBinanceData(nextPage);
                return nextPage;
            });
        }
    };

    return (
        <Box className={`p-4 h-full bg-background-${appliedTheme}`}>
            <BackHeader title="Markets" colorScheme="themeBased" />
            <Box className="bg-gray-100 rounded-lg flex-row items-center p-2 mb-4">
                <Icon as={Search} className="text-gray-500 w-5 h-5 mr-2" />
                <TextInput
                    placeholder="Search Crypto..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    className={`"flex-1 text-black"`}
                />
            </Box>

            {loading ? (
                <ActivityIndicator size="large" color="#4A90E2" />
            ) : (
                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.symbol}
                    renderItem={({ item }) => {
                        const coinSymbol = item.symbol.replace("USDT", "");
                        return (
                            <CryptoMarketCard
                                icon={() => (
                                    <Image
                                        source={{ uri: cryptoIcons[coinSymbol] || "https://assets.coingecko.com/coins/images/1/large/bitcoin.png" }}
                                        style={{ width: 32, height: 32 }}
                                    />
                                )}
                                name={coinSymbol}
                                symbol={coinSymbol}
                                price={parseFloat(item.lastPrice)}
                                change={parseFloat(item.priceChangePercent)}
                                lineData={item.history}
                                bgColor="white"
                                onPress={() => navigation.navigate("MainApp", { 
                                    screen: "Coin", 
                                    params: { coin: item} 
                                })}
                            />
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    onEndReached={loadMoreData}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={() => isFetchingMore && <ActivityIndicator size="small" color="#4A90E2" />}
                />
            )}
        </Box>
    );
};

export default MarketsScreen;

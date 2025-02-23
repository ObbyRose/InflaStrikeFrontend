import React, { useState, useEffect } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { FlatList, ActivityIndicator, TouchableOpacity, Image, TextInput } from "react-native";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import CryptoMarketCard from "@/components/CryptoMarketCard";
import { ChevronLeft, Search } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";
import { IC_Bitcoin, IC_Ethereum, IC_Xrp } from "@/utils/constants/Icons";

const MarketsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const [cryptoData, setCryptoData] = useState<any[]>([]);
    const [cryptoIcons, setCryptoIcons] = useState<{ [symbol: string]: string }>({});
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [isFetchingMore, setIsFetchingMore] = useState(false);

    // Map certain coins to icons (for known coins)
    const iconMapping: { [key: string]: React.ElementType } = {
        BTCUSDT: IC_Bitcoin,
        ETHUSDT: IC_Ethereum,
        XRPUSDT: IC_Xrp,
    };

    // Assign background colors dynamically
    const getBgColor = (symbol: string) => {
        if (symbol.startsWith("BTC")) return "bg-[hsl(7_91%_60%/0.1)]";
        if (symbol.startsWith("ETH")) return "bg-[hsl(169_44%_58%/0.1)]";
        if (symbol.startsWith("XRP")) return "bg-[hsl(223_99%_69%/0.1)]";
        return "bg-gray-100"; // Default for unknown coins
    };

    // Fetch Binance Market Data
    const fetchBinanceData = async (pageNumber: number) => {
        try {
            const response = await fetch("https://api.binance.com/api/v3/ticker/24hr");
            const data = await response.json();

            // Sort by highest market cap (approximation using price * volume)
            const sortedData = data.sort((a: any, b: any) => 
                parseFloat(b.lastPrice) * parseFloat(b.volume) - parseFloat(a.lastPrice) * parseFloat(a.volume)
            );

            // Simulated pagination (50 items per "page")
            const pageSize = 50;
            const newCoins = sortedData.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

            if (pageNumber === 1) {
                setCryptoData(newCoins);
                setFilteredData(newCoins);
            } else {
                setCryptoData((prevData) => [...prevData, ...newCoins]);
                setFilteredData((prevData) => [...prevData, ...newCoins]);
            }
        } catch (error) {
            console.error("Error fetching Binance data:", error);
        } finally {
            setLoading(false);
            setIsFetchingMore(false);
        }
    };

    // Fetch CoinGecko Icons
    const fetchCoinGeckoIcons = async () => {
        try {
            const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
            const data = await response.json();

            // Map symbols to images (e.g., "BTC" -> "bitcoin.png")
            const iconMap: { [symbol: string]: string } = {};
            data.forEach((coin: any) => {
                iconMap[coin.symbol.toUpperCase()] = coin.image;
            });

            setCryptoIcons(iconMap);
        } catch (error) {
            console.error("Error fetching CoinGecko icons:", error);
        }
    };

    useEffect(() => {
        fetchBinanceData(1); // Load initial market data
        fetchCoinGeckoIcons(); // Load coin icons
    }, []);

    // Load more data when scrolling down
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

    // Handle search input
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.length === 0) {
            setFilteredData(cryptoData);
        } else {
            const filtered = cryptoData.filter((coin) => 
                coin.symbol.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };

    return (
        <Box className={`p-4 h-full bg-background-${appliedTheme}`}>
            {/* Header */}
            <Box className="flex-row items-center justify-between mb-4">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon as={ChevronLeft} className="text-black w-6 h-6 mr-2" />
                </TouchableOpacity>
                <Text className="text-xl font-bold">All Cryptocurrencies</Text>
            </Box>

            {/* Search Input */}
            <Box className="bg-gray-100 rounded-lg flex-row items-center p-2 mb-4">
                <Icon as={Search} className="text-gray-500 w-5 h-5 mr-2" />
                <TextInput
                    placeholder="Search Crypto..."
                    value={searchQuery}
                    onChangeText={handleSearch}
                    className="flex-1 text-black"
                />
            </Box>

            {/* Crypto List */}
            {loading ? (
                <ActivityIndicator size="large" color="#4A90E2" />
            ) : (
                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.symbol}
                    renderItem={({ item }) => {
                        const coinSymbol = item.symbol.replace("USDT", ""); // Adjust Binance symbols
                        return (
                            <CryptoMarketCard
                                icon={() => (
                                    <Image
                                        source={{ uri: cryptoIcons[coinSymbol] || "https://assets.coingecko.com/coins/images/1/large/bitcoin.png" }}
                                        style={{ width: 32, height: 32 }}
                                    />
                                )}
                                name={item.symbol}
                                symbol={item.symbol}
                                price={parseFloat(item.lastPrice)}
                                change={parseFloat(item.priceChangePercent)}
                                lineData={[]} // No line data from Binance API
                                bgColor={getBgColor(item.symbol)}
                            />
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    onEndReached={loadMoreData} // Infinite scrolling
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={() => isFetchingMore && <ActivityIndicator size="small" color="#4A90E2" />}
                />
            )}
        </Box>
    );
};

export default MarketsScreen;

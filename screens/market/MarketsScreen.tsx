import React, { useState, useEffect } from "react";
import { Box } from "@/components/ui/box";
import { FlatList, ActivityIndicator, TextInput } from "react-native";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import CryptoMarketCard from "@/components/CryptoMarketCard";
import { Search } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";
import BackHeader from "@/components/BackHeader";
import { CryptoData, handleSQLiteSelect } from "@/utils/api/internal/sql/handleSQLite";
import { FlashList } from '@shopify/flash-list';


const MarketsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const filteredData = cryptoData.filter((curr) => curr.symbol.toLowerCase().includes(searchQuery.toLowerCase()));
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const data = await handleSQLiteSelect([]);
                setCryptoData(data);
            } catch (error) {
                console.error("Error fetching market data:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);


    return (
        <Box className={`p-4 h-full bg-background-${appliedTheme}`}>
            <BackHeader title="Markets" colorScheme="themeBased" />
            <Box className={`bg-card-${appliedTheme} rounded-lg flex-row items-center p-2 mb-4`}>
                <Icon as={Search} className="text-gray-500 w-5 h-5 mr-2" />
                <TextInput
                    placeholder="Search Crypto..."
                    value={searchQuery}
                    placeholderTextColor={appliedTheme === 'light' ? 'black' : 'white'}
                    onChangeText={setSearchQuery}
                    className={`flex-1 w-full`}
                />
            </Box>

            {loading ? (
                <ActivityIndicator size="large" color="#4A90E2" />
            ) : (
                <FlashList
                    data={filteredData}
                    keyExtractor={(item) => item.symbol}
                    renderItem={({ item }) => {
                        const coinSymbol = item.symbol.replace("USDT", "");
                        return (
                            <CryptoMarketCard
                            {...item}
                                onPress={() => navigation.navigate("MainApp", { 
                                    screen: "Coin", 
                                    params: { coin: item} 
                                })}
                            />
                        );
                    }}
                    estimatedItemSize={10}
                />
            )}
        </Box>
    );
};

export default MarketsScreen;

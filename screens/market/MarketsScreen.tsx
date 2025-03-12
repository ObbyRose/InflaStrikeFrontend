import React, { useState, useEffect } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { FlatList, ActivityIndicator, TouchableOpacity, Image, TextInput } from "react-native";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import CryptoMarketCard from "@/components/CryptoMarketCard";
import { ChevronLeft, Search } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";
import BackHeader from "@/components/BackHeader";
import { CryptoData, handleSQLiteSelect } from "@/utils/api/internal/sql/handleSQLite";

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
                console.log("DATA", JSON.stringify(data, null, 2));
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
                            {...item}
                                onPress={() => navigation.navigate("MainApp", { 
                                    screen: "Coin", 
                                    params: { coin: item} 
                                })}
                            />
                        );
                    }}
                />
            )}
        </Box>
    );
};

export default MarketsScreen;

import React, { useState, useEffect } from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";
import { Box } from "@/components/ui/box";
import { Avatar } from "@/components/ui/avatar";
import { Icon } from "@/components/ui/icon";
import { User } from "lucide-react-native";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Divider } from "@/components/ui/divider";
import { IC_Bitcoin, IC_Ethereum, IC_Xrp, IC_PieGraph, IC_Search, IC_Settings } from "@/utils/constants/Icons";
import CryptoMarketCard from "@/components/CryptoMarketCard";
import {
    fetchBitcoinHistory,
    fetchEthereumHistory,
    fetchXRPHistory,
    fetchBitcoinLivePrice,
    fetchEthereumLivePrice,
    fetchXRPLivePrice,
    fetchBitcoinPercentageGain,
    fetchEthereumPercentageGain,
    fetchXRPPercentageGain,
    fetchBitcoinLineData,
    fetchEthereumLineData,
    fetchXRPLineData
} from "../utils/api/BinanceAPI";
import { Props } from "@/types/NavigationTypes";

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const [cryptoData, setCryptoData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const [btcLine, ethLine, xrpLine] = await Promise.all([
                    fetchBitcoinLineData(),
                    fetchEthereumLineData(),
                    fetchXRPLineData(),
                ]);

                const [btcPrice, ethPrice, xrpPrice] = await Promise.all([
                    fetchBitcoinLivePrice(),
                    fetchEthereumLivePrice(),
                    fetchXRPLivePrice(),
                ]);

                const [btcChange, ethChange, xrpChange] = await Promise.all([
                    fetchBitcoinPercentageGain(),
                    fetchEthereumPercentageGain(),
                    fetchXRPPercentageGain(),
                ]);

                setCryptoData([
                    { 
                        name: "Bitcoin", 
                        symbol: "BTC", 
                        icon: IC_Bitcoin, 
                        price: btcPrice, 
                        change: btcChange, 
                        lineData: btcLine, 
                        bgColor: "bg-[hsl(7_91%_60%/0.1)]" 
                    },
                    { 
                        name: "Ethereum", 
                        symbol: "ETH", 
                        icon: IC_Ethereum, 
                        price: ethPrice, 
                        change: ethChange, 
                        lineData: ethLine, 
                        bgColor: "bg-[hsl(169_44%_58%/0.1)]"
                    },
                    { 
                        name: "XRP", 
                        symbol: "XRP", 
                        icon: IC_Xrp, 
                        price: xrpPrice, 
                        change: xrpChange, 
                        lineData: xrpLine, 
                        bgColor: "bg-[hsl(223_99%_69%/0.1)]"
                    },
                ]);
            } catch (error) {
                console.error("Error fetching market data:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {/* Header Section */}
            <Box className={`p-4 bg-background-${appliedTheme} flex gap-2`}>

                <Box className="flex-row justify-between items-center">
                    <TouchableOpacity onPress={() => navigation.navigate("MainApp", { screen: "Profile" })} activeOpacity={0.7}>
                        <Avatar className="bg-indigo-600" size="lg">
                            <Icon as={User} size="xl" className="stroke-white" />
                        </Avatar>
                    </TouchableOpacity>

                    <Box className="flex-row items-center gap-2 mt-3">
                    <TouchableOpacity onPress={() => navigation.navigate("MainApp", { screen: "Portfolio" })}>
                        <Box className="flex-col items-center gap-1">
                            <IC_PieGraph className="h-7 w-7" />
                            <Text className="text-2xs font-semibold text-[#969AA0]">My Portfolio</Text>
                        </Box>
                    </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("MainApp", { screen: "Settings" })}>
                            <Box className="flex-col items-center gap-1">
                                <IC_Settings className="h-7 w-7" />
                                <Text className="ml-2 text-2xs font-semibold text-[#969AA0]">Settings</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </Box>
                {/* Greetings Section */}
                <Box className="mb-4">
                    <Text className="text-[36px] mt-2 text-black font-bold">Hello,</Text>
                    <Text className="text-[36px] text-black font-bold">Baba Cattington 👋</Text>
                </Box>

                {/* Net Liquid Value Section */}
                <Box className={`bg-indigo-600 p-2 h-[100px] w-full rounded-3xl flex`}>
                    <Box className="p-2">
                        <Text className="text-white text-[18px]">Total Balance:</Text>
                        <Box>
                            <Text className="text-white text-[20px] self-end">$ 415,312</Text>
                        </Box>
                        <Text className="text-[12px] text-white top-0">Cash Available</Text>
                    </Box>
                </Box>

                {/* Crypto Market Section */}
                <Box>
                    <Box className="flex-row items-center justify-between">
                        <Text className="text-[22px] font-semibold">Markets</Text>
                        <Text className="text-[14px] text-[#0A6CFF]" onPress={() => navigation.navigate("MainApp", { screen: "Markets" })}>See All</Text>
                    </Box>
                </Box>

                {/* Crypto Market Cards */}
                {loading ? (
                    <Text>Loading...</Text>
                ) : (
                    cryptoData.map((crypto, index) => (
                        <React.Fragment key={crypto.symbol}>
                            <CryptoMarketCard {...crypto} />
                            {index < cryptoData.length - 1 && <Divider className={`bg-divider-${appliedTheme}`} />}
                        </React.Fragment>
                    ))
                )}
            </Box>
        </ScrollView>
    );
};

export default HomeScreen;

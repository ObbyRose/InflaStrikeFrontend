import React, { useState, useEffect } from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";
import { Box } from "@/components/ui/box";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Divider } from "@/components/ui/divider";
import { useUserStore } from "@/context/userStore"; // Import the Zustand store
import { IC_Bitcoin, IC_Ethereum, IC_Xrp, IC_Bell_White, IC_Info, IC_Top_Up, IC_Transaction, IC_History, IC_Tothor, IC_Tothor_Logo_Only, IC_Tothor_Logo_Only_White, IC_Gold, IC_Doge } from "@/utils/constants/Icons";
import CryptoMarketCard from "@/components/CryptoMarketCard";
import {
    fetchBitcoinLivePrice,
    fetchEthereumLivePrice,
    fetchXRPLivePrice,
    fetchBitcoinPercentageGain,
    fetchEthereumPercentageGain,
    fetchXRPPercentageGain,
    fetchBitcoinLineData,
    fetchEthereumLineData,
    fetchXRPLineData
} from "../utils/api/external/BinanceAPI";
import { Props } from "@/types/NavigationTypes";
import MyLinearGradient from "@/components/gradient/MyLinearGradient";
import RoundedBox from "@/components/RoundedBox";
import OptionCard from "@/components/OptionCard";

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const { user } = useUserStore();
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
            <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'dark' : 'purple'}>
                <Box className="h-[30%] p-4 gap-2">
                    <Box className="flex flex-row items-center justify-between">
                        <IC_Tothor className="w-40" />
                        <IC_Bell_White className="w-7 h-7" />
                    </Box>
                    <Box className="flex flex-col gap-4 p-4">
                        <Text className="text-white font-medium text-[17px]">Safe-to-spend</Text>
                        <Box className="flex-row gap-4 items-center">
                        <Text className="text-white font-medium text-4xl">$ 2,987.56</Text>
                        <IC_Info className="w-6 h-6" />
                        </Box>
                        <Text className="text-white text-[14px]">Updated 2 mins ago</Text>
                    </Box>

                    <Box className="items-center bottom-0 mt-6">
                        <Box className={`bg-card-${appliedTheme} p-2 rounded-full w-[80%] z-10`}>
                            <Box className={`flex flex-row justify-evenly`}>
                                <Box className="flex-col items-center text-center">
                                    <IC_Top_Up className="w-12 h-12"/>
                                    <Text className={`text-text-${appliedTheme} font-bold`}> Top up</Text>
                                </Box>
                                <Box className="p-2">
                                    <Box className={` border-s-[1px] border-divider-${appliedTheme} h-full justify-center  mx-2`} />
                                </Box>
                                <Box className="flex-col items-center text-center">
                                    <IC_Transaction className="w-12 h-12"/>
                                    <Text className={`text-text-${appliedTheme} font-bold`}> Transfer </Text>
                                </Box>
                                <Box className="p-2">
                                    <Box className={` border-s-[1px] border-divider-${appliedTheme} h-full justify-center  mx-2`} />
                                </Box>
                                <Box className="flex-col items-center text-center">
                                    <IC_History className="w-12 h-12"/>
                                    <Text className={`text-text-${appliedTheme} font-bold`}> History </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                </MyLinearGradient>
            <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}>
                <Box className={`p-4 bg-background-${appliedTheme} h-full`}>
                {/* Recommended Bundles Section */}
                <Box>
                    <Box className="flex-row items-center justify-between mt-10">
                        <Text className="text-[22px] font-semibold">Recommended Bundles</Text>
                    </Box>
                    <Text className={`mt-2 mb-4 font-medium text-subText-${appliedTheme}`}>There are 4 recommended bundles</Text>
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Box className="flex-row gap-4">
                            <OptionCard>
                                <Box className="gap-1">
                                    <IC_Bitcoin className="w-12 h-12" />
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>MAGA Bundle</Text>
                                    <Text className={`text-subText-${appliedTheme} font-medium text-[14px]`}>Past Month</Text>
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>+15%</Text>
                                </Box>
                            </OptionCard>
                            <OptionCard>
                                <Box className="gap-1">
                                    {appliedTheme === 'dark' ? 
                                        <IC_Tothor_Logo_Only_White className="w-12 h-12" /> :
                                        <IC_Tothor_Logo_Only className="w-12 h-12" />
                                    }
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>Tothor Bundle</Text>
                                    <Text className={`text-subText-${appliedTheme} font-medium text-[14px]`}>Past Month</Text>
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>+24%</Text>
                                </Box>
                            </OptionCard>
                            <OptionCard>
                                <Box className="gap-1">
                                    <IC_Gold className="w-12 h-12" />
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>Earth Bundle</Text>
                                    <Text className={`text-subText-${appliedTheme} font-medium text-[14px]`}>Past Month</Text>
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>+35%</Text>
                                </Box>
                            </OptionCard>
                            <OptionCard>
                                <Box className="gap-1">
                                    <IC_Doge className="w-12 h-12" />
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>DOGE Bundle</Text>
                                    <Text className={`text-subText-${appliedTheme} font-medium text-[14px]`}>Past Month</Text>
                                    <Text className={`text-text-${appliedTheme} font-medium text-[17px]`}>+4%</Text>
                                </Box>
                            </OptionCard>
                        </Box>
                    </ScrollView>
                </Box>
                    {/* Crypto Market Section */}
                    <Divider className={`bg-divider-${appliedTheme} mt-4`} />
                    <Box>
                        <Box className="flex-row items-center justify-between mt-2">
                            <Text className="text-[22px] font-semibold">Markets</Text>
                            <Text className="text-[14px] text-[#0A6CFF]" onPress={() => navigation.navigate("MainApp", { screen: "Markets" })}>
                                See All
                            </Text>
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
            </MyLinearGradient>
        </ScrollView>
    );
};

export default HomeScreen;

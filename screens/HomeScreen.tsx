import React, { useState, useEffect } from "react";
import { Text, ScrollView, ActivityIndicator } from "react-native";
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
import { Props } from "types/NavigationTypes";
import { Box } from "@/components/ui/box";
import InvestmentPieChart from "@/components/InvestmentPieChart";
import CandlestickChart from "@/components/CandlestickChart";
import LineChartComponent from "@/components/LineChart";
import { Divider } from "@/components/ui/divider";
import { Button, ButtonText } from "@/components/ui/button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Avatar, AvatarBadge, AvatarFallbackText, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@/components/ui/icon";
import { User } from "lucide-react-native";
import { IC_Bitcoin, IC_Ethereum, IC_Xrp } from "@/utils/constants/Icons";

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const [bitcoinData, setBitcoinData] = useState<any[]>([]);
    const [ethereumData, setEthereumData] = useState<any[]>([]);
    const [xrpData, setXRPData] = useState<any[]>([]);
    const [bitcoinLineData, setBitcoinLineData] = useState<{ time: string; price: number; }[]>([]);
    const [ethereumLineData, setEthereumLineData] = useState<{ time: string; price: number; }[]>([]);
    const [xrpLineData, setXRPLineData] = useState<{ time: string; price: number; }[]>([]);
    const [bitcoinPrice, setBitcoinPrice] = useState<number | null>(null);
    const [ethereumPrice, setEthereumPrice] = useState<number | null>(null);
    const [xrpPrice, setXRPPrice] = useState<number | null>(null);
    const [bitcoinChange, setBitcoinChange] = useState<number | null>(null);
    const [ethereumChange, setEthereumChange] = useState<number | null>(null);
    const [xrpChange, setXRPChange] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const [showCandlestick, setShowCandlestick] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                
                const [btcLine, ethLine, xrpLine] = await Promise.all([
                    fetchBitcoinLineData(),
                    fetchEthereumLineData(),
                    fetchXRPLineData(),
                ]);
                setBitcoinLineData(btcLine || []);
                setEthereumLineData(ethLine || []);
                setXRPLineData(xrpLine || []);

                const [btcData, ethData, xrpData] = await Promise.all([
                    fetchBitcoinHistory(),
                    fetchEthereumHistory(),
                    fetchXRPHistory(),
                ]);
                setBitcoinData(btcData || []);
                setEthereumData(ethData || []);
                setXRPData(xrpData || []);

                const [btcPrice, ethPrice, xrpPrice] = await Promise.all([
                    fetchBitcoinLivePrice(),
                    fetchEthereumLivePrice(),
                    fetchXRPLivePrice(),
                ]);
                setBitcoinPrice(btcPrice);
                setEthereumPrice(ethPrice);
                setXRPPrice(xrpPrice);

                const [btcChange, ethChange, xrpChange] = await Promise.all([
                    fetchBitcoinPercentageGain(),
                    fetchEthereumPercentageGain(),
                    fetchXRPPercentageGain(),
                ]);
                setBitcoinChange(btcChange);
                setEthereumChange(ethChange);
                setXRPChange(xrpChange);
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
                    <Avatar className="bg-indigo-600" size="lg">
                        <Icon as={User} size="xl" className="stroke-white" />
                    </Avatar>
                    <Box className="flex-row items-center gap-2">
                        <Text className={`text-sm text-black`}>Icon Search</Text>
                        <Text className={`text-sm text-black`}>Icon Scan</Text>
                    </Box>
                </Box>

                {/* Greetings Section */}
                <Box className="mb-4">
                    <Text className="text-[36px] mt-2 text-black font-bold">
                        Hello,
                    </Text>
                    <Text className="text-[36px] text-black font-bold">
                        Baba Cattington 👋
                    </Text>
                </Box>
                {/* NLV Section */}
                <Box className={ `bg-layoutTop-${appliedTheme} p-2 h-[100px] w-full rounded-3xl flex` }>
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
                        <Text className="text-[14px] text-[#0A6CFF]">See All</Text>
                    </Box>
                </Box>

                {/* Crypto Market Cards */}
                <Box className="p-4 flex flex-row items-center gap-2">
                        <Box className="bg-[hsl(7_91%_60%/0.1)] max-w-[4rem] p-4 rounded-2xl">
                            <IC_Bitcoin className="w-8 h-8" />
                        </Box>
                            <Box className="flex flex-col">
                                <Text className="text-[12px]">BTC</Text>
                            </Box>
                </Box>
            </Box>
        </ScrollView>
    );
};

export default HomeScreen;

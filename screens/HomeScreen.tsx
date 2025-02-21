import React, { useState, useEffect } from "react";
import { Text, ScrollView } from "react-native";
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
import LineChartComponent from "@/components/LineChart";
import { Divider } from "@/components/ui/divider";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Avatar } from "@/components/ui/avatar";
import { Icon } from "@/components/ui/icon";
import { User } from "lucide-react-native";
import { IC_Bitcoin, IC_Ethereum, IC_PieGraph, IC_Search, IC_Xrp } from "@/utils/constants/Icons";


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
                        <Box className="flex-col items-center gap-1">
                            <IC_PieGraph className="h-7 w-7" />
                            <Text className="text-2xs font-semibold text-[#969AA0]">My Portfolio</Text>
                        </Box>
                        <Box className="flex-col items-center gap-1">
                            <IC_Search className="h-7 w-7" />
                            <Text className="ml-2 text-2xs font-semibold text-[#969AA0]">Search</Text>
                        </Box>
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
                <Box className="p-2 flex flex-row gap-2 items-center">
                    <Box className="bg-[hsl(7_91%_60%/0.1)] max-w-[4rem] p-4 rounded-2xl z-10">
                        <IC_Bitcoin className="w-8 h-8" />
                    </Box>
                    <Box className="flex flex-col justify-center z-10">
                        <Text className="text-[16px] font-bold">BTC</Text>
                        <Text className="text-[13px] text-[#969AA0]">
                            {bitcoinChange !== null ? `${bitcoinChange.toFixed(2)}%` : "Loading..."}
                        </Text>
                    </Box>
                    <Box className="flex-1 flex-row">
                        <LineChartComponent title='' lineData={bitcoinLineData} />
                    </Box>
                    <Box className="flex flex-col justify-center items-end">
                        <Text className="text-[16px] font-semibold">
                            {bitcoinPrice !== null ? `$${bitcoinPrice.toFixed(2)}`: ""}
                        </Text>
                        <Text className="text-[#969AA0]">0.00 BTC</Text>
                    </Box>
                </Box>

                <Divider className={`bg-divider-${appliedTheme}`}/>

                <Box className="p-2 flex flex-row gap-2 items-center">
                    <Box className="bg-[hsl(169_44%_58%/0.1)] max-w-[4rem] p-4 rounded-2xl z-10">
                        <IC_Ethereum className="w-8 h-8" />
                    </Box>
                    <Box className="flex flex-col justify-center z-10">
                        <Text className="text-[16px] font-bold">ETH</Text>
                        <Text className="text-[13px] text-[#969AA0]">
                            {ethereumChange !== null ? `${ethereumChange.toFixed(2)}%` : "Loading..."}
                        </Text>
                    </Box>
                    <Box className="flex-1 flex-row">
                        <LineChartComponent title='' lineData={ethereumLineData} />
                    </Box>
                    <Box className="flex flex-col justify-center items-end">
                        <Text className="text-[16px] font-semibold">
                            {ethereumPrice !== null ? `$${ethereumPrice.toFixed(2)}`: ""}
                        </Text>
                        <Text className="text-[#969AA0]">0.00 Eth</Text>
                    </Box>
                </Box>

                <Divider className={`bg-divider-${appliedTheme}`}/>

                <Box className="p-2 flex flex-row gap-2 items-center">
                    <Box className="bg-[hsl(223_99%_69%/0.1)] max-w-[4rem] p-4 rounded-2xl z-10">
                        <IC_Xrp className="w-8 h-8" />
                    </Box>
                    <Box className="flex flex-col justify-center z-10">
                        <Text className="text-[16px] font-bold">XRP</Text>
                        <Text className="text-[13px] text-[#969AA0]">
                            {xrpChange !== null ? `${xrpChange.toFixed(2)}%` : "Loading..."}
                        </Text>
                    </Box>
                    <Box className="flex-1 flex-row">
                        <LineChartComponent title='' lineData={xrpLineData} /> 
                    </Box>
                    <Box className="flex flex-col justify-center items-end">
                        <Text className="text-[16px] font-semibold">
                            {xrpPrice !== null ? `$${xrpPrice.toFixed(2)}`: ""}
                        </Text>
                        <Text className="text-[#969AA0]">0.00 XRP</Text>
                    </Box>
                </Box>
            </Box>
        </ScrollView>
    );
};

export default HomeScreen;

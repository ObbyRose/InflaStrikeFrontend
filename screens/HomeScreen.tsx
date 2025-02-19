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

console.log(appliedTheme);


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Box className={`p-4 background-${appliedTheme}`}>
                {/* Investment Portfolio Chart */}
                <InvestmentPieChart />

                <Divider className="h-[1.5px] bg-gray-200 w-[95%] mx-auto" />

                {/* Market Data Section */}
                <Box className="mt-4">
                    <Box className="flex flex-row items-center gap-4 mt-4">
                        <Text className="text-xl font-bold text-black">Market Data</Text>
                        
                        {/* Toggle Buttons */}
                        <Button 
                            className="bg-blue-900"
                            onPress={() => setShowCandlestick(true)}
                        >
                            <ButtonText>
                                <MaterialIcons name="candlestick-chart" size={24} color={showCandlestick ? "lightblue" : "white"} />
                            </ButtonText>
                        </Button>
                        <Button 
                            className="bg-blue-900"
                            onPress={() => setShowCandlestick(false)}
                        >
                            <ButtonText>
                                <MaterialIcons name="show-chart" size={24} color={!showCandlestick ? "lightblue" : "white"} />
                            </ButtonText>
                        </Button>
                    </Box>
                </Box>

                {/* Bitcoin Market Data */}
                <Box className="mt-5">
                    <Text className="text-lg text-black">
                        BTC Live Price:{" "}
                        {loading ? (
                            <ActivityIndicator size="small" color="#FFD700" />
                        ) : (
                            bitcoinPrice ? `$${bitcoinPrice.toFixed(2)}` : "N/A"
                        )}
                    </Text>
                    <Text className={`text-md ${bitcoinChange! >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {bitcoinChange !== null
                            ? `${bitcoinChange.toFixed(2)}%`
                            : ""}
                    </Text>
                    {showCandlestick ? (
                        <CandlestickChart title="" candlestickData={bitcoinData} />
                    ) : (
                        <LineChartComponent title="" lineData={bitcoinLineData} />
                    )}
                </Box>

                <Divider className="h-[1.5px] bg-gray-200 w-[95%] mx-auto" />

                {/* Ethereum Market Data */}
                <Box className="mt-5">
                    <Text className="text-lg text-black">
                        ETH Live Price:{" "}
                        {loading ? (
                            <ActivityIndicator size="small" color="#FFD700" />
                        ) : (
                            ethereumPrice ? `$${ethereumPrice.toFixed(2)}` : "N/A"
                        )}
                    </Text>
                    <Text className={`text-md ${ethereumChange! >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {ethereumChange !== null
                            ? `${ethereumChange.toFixed(2)}%`
                            : ""}
                    </Text>
                    {showCandlestick ? (
                        <CandlestickChart title="" candlestickData={ethereumData} />
                    ) : (
                        <LineChartComponent title="" lineData={ethereumLineData} />
                    )}
                </Box>

                <Divider className="h-[1.5px] bg-gray-200 w-[95%] mx-auto" />

                {/* XRP Market Data */}
                <Box className="mt-5">
                    <Text className="text-lg text-black">
                        XRP Live Price:{" "}
                        {loading ? (
                            <ActivityIndicator size="small" color="#FFD700" />
                        ) : (
                            xrpPrice ? `$${xrpPrice.toFixed(2)}` : "N/A"
                        )}
                    </Text>
                    <Text className={`text-md ${xrpChange! >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {xrpChange !== null
                            ? `${xrpChange.toFixed(2)}%`
                            : ""}
                    </Text>
                    {showCandlestick ? (
                        <CandlestickChart title="" candlestickData={xrpData} />
                    ) : (
                        <LineChartComponent title="" lineData={xrpLineData} />
                    )}
                </Box>
            </Box>
        </ScrollView>
    );
};

export default HomeScreen;

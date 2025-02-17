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
import { Divider } from "@/components/ui/divider";
import { Button, ButtonText } from "@/components/ui/button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import LineChartComponent from "@/components/LineChart";

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const [bitcoinData, setBitcoinData] = useState<string[]>([]);
    const [ethereumData, setEthereumData] = useState<string[]>([]);
    const [xrpData, setXRPData] = useState<string[]>([]);
    const [bitcoinLineData, setBitcoinLineData] = useState<string[] | number[] >([]);
    const [ethereumLineData, setEthereumLineData] = useState<string[] | number[]>([]);
    const [xrpLineData, setXRPLineData] = useState<string[] | number[]>([]);
    const [bitcoinPrice, setBitcoinPrice] = useState<number | null>(null);
    const [ethereumPrice, setEthereumPrice] = useState<number | null>(null);
    const [xrpPrice, setXRPPrice] = useState<number | null>(null);
    const [bitcoinChange, setBitcoinChange] = useState<number | null>(null);
    const [ethereumChange, setEthereumChange] = useState<number | null>(null);
    const [xrpChange, setXRPChange] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                fetchBitcoinLineData().then((data) => setBitcoinLineData(data || []));
                fetchEthereumLineData().then((data) => setEthereumLineData(data || []));
                fetchXRPLineData().then((data) => setXRPLineData(data || []));

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
            <Box className="p-4 bg-gray-900">
                <InvestmentPieChart />
                <Divider className="h-[1.5px] bg-gray-800 w-[95%] mx-auto" />
                <Box className="mt-4">
                    <Box className="flex flex-row items-center gap-4 mt-4">
                        <Text className="text-xl font-bold text-white">Market Data</Text>
                        <Button className="bg-white">
                            <ButtonText>
                                <MaterialIcons name="show-chart" size={24} color="black" />
                            </ButtonText>
                        </Button>
                        <Button className="bg-white">
                            <ButtonText>
                                <MaterialIcons name="candlestick-chart" size={24} color="black" />
                            </ButtonText>
                        </Button>
                    </Box>
                </Box>
                <Box className="mt-5">
                    <Text className="text-lg text-white">
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
                    <CandlestickChart title="" candlestickData={bitcoinData} />
                    <LineChartComponent title="Bitcoin (BTC)" lineData={bitcoinLineData} />

                </Box>
                <Divider className="h-[1.5px] bg-gray-800 w-[95%] mx-auto" />
                <Box className="mt-5">
                    <Text className="text-lg text-white">
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
                    <CandlestickChart title="" candlestickData={ethereumData} />
                </Box>
                <Divider className="h-[1.5px] bg-gray-800 w-[95%] mx-auto" />
                <Box className="mt-5">
                    <Text className="text-lg text-white">
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
                    <CandlestickChart title="" candlestickData={xrpData} />
                </Box>
            </Box>
        </ScrollView>
    );
};

export default HomeScreen;
function fetchBitcoinLineChart() {
    throw new Error("Function not implemented.");
}


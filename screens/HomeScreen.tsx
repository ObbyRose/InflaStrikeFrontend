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


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Box className={`p-4 bg-background-${appliedTheme}`}>
                
            </Box>
        </ScrollView>
    );
};

export default HomeScreen;

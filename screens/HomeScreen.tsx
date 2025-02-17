import React, { useState, useEffect } from "react";
import { Text ,ScrollView } from "react-native";
import { 
    fetchBitcoinHistory, 
    fetchEthereumHistory, 
    fetchXRPHistory 
} from "../utils/api/BinanceAPI";
import { Props } from "types/NavigationTypes";
import { Box } from "@/components/ui/box";
import InvestmentPieChart from "@/components/InvestmentPieChart";
import CandlestickChart from "@/components/CandlestickChart";
import { Divider } from "@/components/ui/divider";

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const [bitcoinData, setBitcoinData] = useState<any[]>([]);
    const [ethereumData, setEthereumData] = useState<any[]>([]);
    const [xrpData, setXRPData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchBitcoinHistory().then((data) => setBitcoinData(data || []));
        fetchEthereumHistory().then((data) => setEthereumData(data || []));
        fetchXRPHistory().then((data) => setXRPData(data || []));
        setLoading(false);
    }, []);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Box className="p-4 bg-gray-900">
                <InvestmentPieChart />
                <Divider className="h-[1.5px] bg-gray-800 w-[95%] mx-auto" />
                <Box className="mt-6">
                    <Text className="text-xl font-bold text-white">Market Data</Text>
                </Box>
                <CandlestickChart title="BTC" candlestickData={bitcoinData} />
                <CandlestickChart title="ETH" candlestickData={ethereumData} />
                <CandlestickChart title="XRP" candlestickData={xrpData} />
            </Box>
        </ScrollView>
    );
};

export default HomeScreen;

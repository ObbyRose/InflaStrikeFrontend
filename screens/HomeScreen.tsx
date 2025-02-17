import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { fetchBitcoinPrice, fetchBitcoinHistory } from "../utils/api/BinanceAPI";
import { Props } from "types/NavigationTypes";
import { Box } from "@/components/ui/box";
import InvestmentPieChart from "@/components/InvestmentPieChart";
import BitcoinPrice from "@/components/BitcoinPrice";
import CandlestickChart from "@/components/CandlestickChart";
import { Divider } from '@/components/ui/divider';
import { Text } from "react-native-svg";

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const [bitcoinPrice, setBitcoinPrice] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [candlestickData, setCandlestickData] = useState<any[]>([]);

    useEffect(() => {
        fetchBitcoinHistory()
            .then((data) => {
                setCandlestickData(data || []); // Ensure data is an array
            })
            .catch(() => setCandlestickData([]));

        getBitcoinPrice();
    }, []);

    const getBitcoinPrice = () => {
        fetchBitcoinPrice()
            .then((response) => {
                setBitcoinPrice(response?.price || "0");
            })
            .catch(() => setBitcoinPrice("0"))
            .finally(() => setLoading(false));
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Box className="flex-1 justify-center items-center p-4 bg-gray-900">
                <InvestmentPieChart />
                <Divider className='h-[1.5px] bg-gray-800 w-[95%] mx-auto'/>
                <CandlestickChart candlestickData={candlestickData} />
            </Box>
        </ScrollView>
    );
};

export default HomeScreen;

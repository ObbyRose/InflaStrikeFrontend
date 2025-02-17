import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { fetchBitcoinPrice, fetchBitcoinHistory } from "../utils/api/BinanceAPI";
import { Props } from "types/NavigationTypes";
import { Box } from "@/components/ui/box";
import InvestmentPieChart from "@/components/InvestmentPieChart";
import BitcoinPrice from "@/components/BitcoinPrice";
import CandlestickChart from "@/components/CandlestickChart";

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
        <Box className="flex-1 justify-center items-center p-4 bg-gray-900">
            <InvestmentPieChart />
            <BitcoinPrice bitcoinPrice={bitcoinPrice} loading={loading} />
            <CandlestickChart candlestickData={candlestickData} />
        </Box>
    );
};

export default HomeScreen;

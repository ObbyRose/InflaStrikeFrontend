import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { ChevronDown } from "lucide-react-native";
import ButtonsTrain from "@/components/ButtonsTrain";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { IC_Swap } from "@/utils/constants/Icons";
import BackHeader from "@/components/BackHeader";
import LineChartWagmi from "@/components/LineChartWagmi";
import OverlayLoading from "@/components/OverlayLoading";
import { PieChart } from "react-native-gifted-charts";
import calculateCryptoProfitBetweenDates from "@/utils/functions/crypto";
import CandleChartComponent, { CandlestickData } from "@/components/market/CandleChart";

const ExchangeScreen = () => {
    const [activeTab, setActiveTab] = useState("Limit");
    const [amount, setAmount] = useState("126.00");
    const [convertedAmount, setConvertedAmount] = useState("56.01");
    const [fromCurrency, setFromCurrency] = useState("Bitcoin");
    const [toCurrency, setToCurrency] = useState("Litecoin");
    const [fromSymbol, setFromSymbol] = useState("₿");
    const [toSymbol, setToSymbol] = useState("Ł");
    const { appliedTheme } = useTheme();
    const [result, setResult] = useState<CandlestickData[]>([]);

    const swapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setFromSymbol(toSymbol);
        setToSymbol(fromSymbol);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    // Yaniv
    const handleCalculate = async () => {
        const profitData = await calculateCryptoProfitBetweenDates(
            "BTCUSDT",
            1000,
            '2024-01-01',
            '2025-01-01'
        );
        setResult(profitData?.historicalData || []);
    };
    
    useEffect(() => {
        handleCalculate();
    }, [])
    // End Yaniv

    return (
        <Box className="p-4 h-full bg-white">
            <BackHeader title="Exchange" />
            <Box className="flex-1 items-center">
                {result &&
                <CandleChartComponent
                    symbol=""
                    data={result}
                />
                }
            </Box>
        </Box>
    );
};

export default ExchangeScreen;


/*
<Box className="flex-1">
                <Box className="flex-row w-full rounded-lg p-1">
                    <ButtonsTrain
                        buttons={['Market', 'Limit', 'Stop-Limit']}
                        activeButton={activeTab}
                        handlePress={setActiveTab}
                    />
                </Box>

                <Box className="mt-4 bg-gray-100 rounded-lg p-4 flex-row justify-between items-center w-full">
                    <TextInput
                        className="text-xl font-bold flex-1"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                    />
                    <TouchableOpacity className="flex-row items-center">
                        <Box className="bg-red-100 p-2 rounded-full mr-2">
                            <Text className="text-red-500 font-bold">{fromSymbol}</Text>
                        </Box>
                        <Text className="text-lg font-bold">{fromCurrency}</Text>
                        <ChevronDown className="ml-1 text-gray-500" size={20} />
                    </TouchableOpacity>
                </Box>

                <TouchableOpacity
                    onPress={swapCurrencies}
                    className={`bg-button-${appliedTheme} p-3 rounded-full mt-4 self-center`}
                >
                    <IC_Swap className="text-white w-7 h-7" />
                </TouchableOpacity>

                <Box className="mt-4 bg-gray-100 rounded-lg p-4 flex-row justify-between items-center w-full">
                    <Text className="text-xl font-bold flex-1">{convertedAmount}</Text>
                    <TouchableOpacity className="flex-row items-center">
                        <Box className="bg-green-100 p-2 rounded-full mr-2">
                            <Text className="text-green-500 font-bold">{toSymbol}</Text>
                        </Box>
                        <Text className="text-lg font-bold">{toCurrency}</Text>
                        <ChevronDown className="ml-1 text-gray-500" size={20} />
                    </TouchableOpacity>
                </Box>

                <Box className="p-4 w-full">
                    <Button className={`bg-button-${appliedTheme} w-full rounded-lg mt-6`}>
                        <Text className="text-white text-lg font-bold">Exchange</Text>
                    </Button>
                </Box>
            </Box>

*/


import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Platform } from "react-native";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { ChevronDown, Scroll } from "lucide-react-native";
import ButtonsTrain from "@/components/ButtonsTrain";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { IC_BTCUSDT, IC_Swap } from "@/utils/constants/Icons";
import BackHeader from "@/components/BackHeader";
import LineChartWagmi from "@/components/LineChartWagmi";
import { Picker } from "@react-native-picker/picker";
import OverlayLoading from "@/components/OverlayLoading";
import { PieChart } from "react-native-gifted-charts";
import calculateCryptoProfitBetweenDates from "@/utils/functions/crypto";
import CandleChartComponent, { CandlestickData } from "@/components/market/CandleChart";
import { Input } from "@/components/ui/input";
import { ScrollView } from "react-native-gesture-handler";
import { Select, SelectContent, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "@/components/ui/select";
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatNumber } from "@/utils/functions/help";

const cryptoSymbols = [
    { name: "Bitcoin", symbol: "BTCUSDT", icon: "🔥" }, 
    { name: "Ethereum", symbol: "ETHUSDT", icon: "💎" },
    { name: "Binance Coin", symbol: "BNBUSDT", icon: "🟡" },
    { name: "Solana", symbol: "SOLUSDT", icon: "🌞" },
    { name: "XRP", symbol: "XRPUSDT", icon: "💰" },
];

const ExchangeScreen = () => {
    const [symbol, setSymbol] = useState("BTCUSDT");
    const [amount, setAmount] = useState("1000");
    const [startDate, setStartDate] = useState(new Date("2024-01-01"));
    const [endDate, setEndDate] = useState(new Date("2025-01-01"));
    const [showStartPicker, setShowStartPicker] = useState(false);
    const [showEndPicker, setShowEndPicker] = useState(false);
    const [result, setResult] = useState<CandlestickData[]>([]);

    const [profitData, setProfitData] = useState<{ profitPercentage: number; profit: number } | null>(null);

    const handleCalculate = async () => {
        const profitData = await calculateCryptoProfitBetweenDates(
            symbol,
            parseFloat(amount),
            startDate.toISOString().split("T")[0],
            endDate.toISOString().split("T")[0]
        );
        setResult(profitData?.historicalData || []);
        setProfitData(profitData);
    };

    return (
        <ScrollView>

        <Box className="p-4 h-full bg-white">
            <BackHeader title="Exchange" />

            {/* Select for Crypto Symbol */}
            <Text className="mb-2">Crypto Symbol:</Text>
            <Picker
                selectedValue={symbol}
                onValueChange={(itemValue) => setSymbol(itemValue)}
                style={{ height: 50, width: "100%", borderWidth: 1, borderColor: "#ccc", borderRadius: 8 }}
            >
                {cryptoSymbols.map((coin) => (
                    <Picker.Item key={coin.symbol} label={`${coin.icon} ${coin.name}`} value={coin.symbol} />
                ))}
            </Picker>

            {/* Input for Investment Amount */}
            <Text className="mb-2 mt-4">Investment Amount:</Text>
            <TextInput
                className="border p-2 rounded"
                value={formatNumber(Number(amount))}
                onChangeText={(text) => {
                    const parsedAmount = text.replace(/[^0-9.]/g, '');
                    setAmount(parsedAmount);
                }}
                keyboardType="numeric"
            />

            {/* Date Picker for Start Date */}
            <Text className="mb-2 mt-4">Start Date:</Text>
            <Button className="border p-2 rounded bg-gray-200" onPress={() => setShowStartPicker(true)}>
                <Text>{startDate.toISOString().split("T")[0]}</Text>
            </Button>
            {showStartPicker && (
                <DateTimePicker
                    value={startDate}
                    mode="date"
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    onChange={(event, selectedDate) => {
                        setShowStartPicker(false);
                        if (selectedDate) setStartDate(selectedDate);
                    }}
                />
            )}

            {/* Date Picker for End Date */}
            <Text className="mb-2 mt-4">End Date:</Text>
            <Button className="border p-2 rounded bg-gray-200" onPress={() => setShowEndPicker(true)}>
                <Text>{endDate.toISOString().split("T")[0]}</Text>
            </Button>
            {showEndPicker && (
                <DateTimePicker
                value={endDate}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={(event, selectedDate) => {
                    setShowEndPicker(false);
                    if (selectedDate) setEndDate(selectedDate);
                    }}
                />
            )}

            {/* Calculate Button */}
            <Button className="mt-4 p-3 bg-blue-500" onPress={handleCalculate}>
                <Text className="text-white text-center">Calculate</Text>
            </Button>

            {/* Display Chart */}
            <Box className="flex-1 items-center mt-4">
                {result.length > 0 ? (
                    <>
                        <CandleChartComponent symbol={symbol} data={result} />
                        <Text className="mt-4 text-lg font-bold">
                            ROI: {profitData?.profitPercentage}%
                        </Text>
                        <Text className="mt-2 text-lg font-bold">
                            Profit: ${profitData?.profit.toFixed(2)}
                        </Text>
                    </>
                ) : (
                    <Text className="text-gray-500">Enter details and press Calculate</Text>
                )}
            </Box>
        </Box>
    </ScrollView>
    );
};

export default ExchangeScreen;

/*
<Box className="flex-1">
                <Box className="flex-row w-full</Text> rounded-lg p-1">
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


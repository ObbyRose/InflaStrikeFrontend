import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Platform } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { ChevronDown, PlusCircle, Scroll, Trash2 } from "lucide-react-native";
import ButtonsTrain from "@/components/ButtonsTrain";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { IC_Swap } from "@/utils/constants/Icons";
import BackHeader from "@/components/BackHeader";
import { Picker } from "@react-native-picker/picker";
import LineChartWagmi from "@/components/LineChartWagmi";
import OverlayLoading from "@/components/OverlayLoading";
import { PieChart } from "react-native-gifted-charts";
import calculateCryptoProfitBetweenDates from "@/utils/functions/crypto";
import CandleChartComponent, { CandlestickData } from "@/components/market/CandleChart";
import { Input } from "@/components/ui/input";
import { ScrollView } from "react-native-gesture-handler";
import { Select, SelectItem } from "@/components/ui/select";
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from "@/components/DatePicker";
import { Accordion, AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { formatNumber } from "@/utils/functions/help";
import MyLinearGradient from "@/components/gradient/MyLinearGradient";
import { CandlestickChart } from "react-native-wagmi-charts";

interface Investment {
    id: number;
    amount: string;
    startDate: Date;
    endDate: Date;
    showStartPicker?: boolean;
    showEndPicker?: boolean;
}

interface ProfitData {
    profitPercentage: number;
    profit: number;
    startPrice: number;
    endPrice: number;
    historicalData: any[];
}

// Crypto Symbols
const cryptoSymbols = [
    { name: "Bitcoin", symbol: "BTCUSDT", icon: "🔥" },
    { name: "Ethereum", symbol: "ETHUSDT", icon: "💎" },
    { name: "Binance Coin", symbol: "BNBUSDT", icon: "🟡" },
    { name: "Solana", symbol: "SOLUSDT", icon: "🌞" },
    { name: "XRP", symbol: "XRPUSDT", icon: "💰" },
];

const ExchangeScreen: React.FC = () => {
    const [symbol, setSymbol] = useState<string>("BTCUSDT");
    const [investments, setInvestments] = useState<Investment[]>([
        { id: 1, amount: "1000", startDate: new Date("2024-01-01"), endDate: new Date("2025-01-01") }
    ]);
    const [results, setResults] = useState<Record<number, ProfitData>>({});

    // Update Investment State
    const updateInvestment = (id: number, field: keyof Investment, value: any) => {
        setInvestments((prevInvestments) =>
            prevInvestments.map((investment) =>
                investment.id === id ? { ...investment, [field]: value } : investment
            )
        );
    };

    const getMinStartDate = () => new Date(Math.min(...investments.map(i => i.startDate.getTime())));
    const getMaxEndDate = () => new Date(Math.max(...investments.map(i => i.endDate.getTime())));


    // Add a New Investment Row
    const addInvestment = () => {
        setInvestments((prevInvestments) => [
            ...prevInvestments,
            { id: Date.now(), amount: "1000", startDate: new Date(), endDate: new Date() }
        ]);
    };

    // Remove an Investment Row
    const removeInvestment = (id: number) => {
        setInvestments((prevInvestments) => prevInvestments.filter((investment) => investment.id !== id));
        setResults((prevResults) => {
            const newResults = { ...prevResults };
            delete newResults[id];
            return newResults;
        });
    };

    // Calculate Profits
    const handleCalculate = async () => {
        const calculatedResults: Record<number, ProfitData> = {};

        for (const investment of investments) {
            const data = await calculateCryptoProfitBetweenDates(
                symbol,
                parseFloat(investment.amount),
                investment.startDate.toISOString().split("T")[0],
                investment.endDate.toISOString().split("T")[0]
            );

            calculatedResults[investment.id] = data
                ? { 
                    profitPercentage: data.profitPercentage, 
                    profit: data.profit, 
                    startPrice: data.startPrice,
                    endPrice: data.endPrice,
                    historicalData: data.historicalData
                }
                : { profitPercentage: 0, profit: 0, startPrice: 0, endPrice: 0, historicalData: [] };
        }

        setResults(calculatedResults);
    };

    return (
        <ScrollView className="bg-white h-full">
            <Box className="p-4 h-full bg-white">
                {/* Crypto Symbol Picker */}
                <Text className="mb-2 text-lg font-bold">Crypto Symbol:</Text>
                <Picker
                    selectedValue={symbol}
                    onValueChange={setSymbol}
                    style={{ height: 50, width: "100%", borderWidth: 1, borderColor: "#ccc", borderRadius: 8 }}
                >
                    {cryptoSymbols.map((coin) => (
                        <Picker.Item key={coin.symbol} label={`${coin.icon} ${coin.name}`} value={coin.symbol} />
                    ))}
                </Picker>

                {/* Investment Rows */}
                <Box className="flex flex-row justify-between items-center">
                    <Text className="text-lg font-bold"> Investments</Text>
                    <TouchableOpacity onPress={addInvestment} className="">
                        <MyLinearGradient type="button" color="purple">
                            <PlusCircle size={20} color="white" className="" />
                        </MyLinearGradient>
                    </TouchableOpacity>
                </Box>
                {investments.map((investment) => (
                    <Box key={investment.id} className="mt-2 mb-2 flex-row items-center justify-between p-2 rounded-lg">
                        {/* Investment Amount */}
                        <Box className="flex-col justify-center">
                        <Text className="font-bold p-2">Investement:</Text>
                        <TextInput
                            className="border p-2 rounded flex-1 mx-1 text-center"
                            value={formatNumber(Number(investment.amount))}
                            onChangeText={(text) => updateInvestment(investment.id, "amount", text.replace(/[^0-9.]/g, ""))}
                            keyboardType="numeric"
                            />
                            </Box>

                        {/* Start Date Picker */}
                        <Box className="flex-col justify-center">
                        <Text className="font-bold p-2">Entry Date:</Text>
                        <TouchableOpacity onPress={() => updateInvestment(investment.id, "showStartPicker", true)} className="flex-1 mx-1 text-center">
                            <Text className="border p-2 rounded text-center">{investment.startDate.toLocaleDateString("en-GB")}</Text>
                        </TouchableOpacity>
                        {investment.showStartPicker && (
                            <DateTimePicker
                                value={investment.startDate}
                                mode="date"
                                display={Platform.OS === "ios" ? "spinner" : "calendar"}
                                onChange={(event, selectedDate) => {
                                    updateInvestment(investment.id, "showStartPicker", false);
                                    if (selectedDate) updateInvestment(investment.id, "startDate", selectedDate);
                                }}
                                />
                            )}
                            </Box>

                        {/* End Date Picker */}
                        <Box className="flex-col justify-center">
                        <Text className="font-bold p-2">Exit Date:</Text>
                        <TouchableOpacity onPress={() => updateInvestment(investment.id, "showEndPicker", true)} className="flex-1 mx-1 text-center">
                            <Text className="border p-2 rounded text-center">{investment.endDate.toLocaleDateString("en-GB")}</Text>
                        </TouchableOpacity>
                        {investment.showEndPicker && (
                            <DateTimePicker
                                value={investment.endDate}
                                mode="date"
                                display={Platform.OS === "ios" ? "spinner" : "calendar"}
                                onChange={(event, selectedDate) => {
                                    updateInvestment(investment.id, "showEndPicker", false);
                                    if (selectedDate) updateInvestment(investment.id, "endDate", selectedDate);
                                }}
                            />
                        )}
                        </Box>

                        {/* Remove Button */}
                        <Box className="justify-center mt-6">
                        <TouchableOpacity onPress={() => removeInvestment(investment.id)} className="text-center">
                            <Trash2 size={20} color="red" />
                        </TouchableOpacity>
                        </Box>
                    </Box>
                ))}

                {/* Calculate Button */}
                <MyLinearGradient color="purple" type="button">
                <Button onPress={handleCalculate}>
                    <ButtonText>Calculate</ButtonText>
                </Button>
                </MyLinearGradient>

                {/* Results Accordion */}
                <Accordion type="single">
                    {Object.entries(results).map(([id, res]) => (
                        <AccordionItem value={id} key={id}>
                            <AccordionHeader>
                                <AccordionTrigger>
                                    <Text>Investment Yield (Investment Number: {id})</Text>
                                </AccordionTrigger>
                            </AccordionHeader>
                            <AccordionContent>
                                <Text>ROI: {res.profitPercentage}%</Text>
                                <Text>Profit: {formatNumber(Number(res.profit.toFixed(2)))}</Text>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Candlestick Chart for Investments */}
                {Object.entries(results).map(([id, res]) => (
                    <Box key={id} className="mt-4">
                        <Text className="text-lg font-bold">Candlestick Chart for Investment {id}</Text>
                        <CandleChartComponent symbol={symbol} data={res.historicalData as CandlestickData[]} />
                    </Box>
                ))}
            </Box>
        </ScrollView>
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


import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Platform } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { PlusCircle, Trash2 } from "lucide-react-native";
import calculateCryptoProfitBetweenDates, { OverallProfitResult } from "@/utils/functions/crypto";
import CandleChartComponent, { CandlestickData } from "@/components/market/CandleChart";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Accordion, AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { formatNumber } from "@/utils/functions/help";
import MyLinearGradient from "@/components/gradient/MyLinearGradient";
import { Picker } from "@react-native-picker/picker";

interface Investment {
    id: number;
    amount: number;
    startDate: Date;
    endDate: Date;
    showStartPicker?: boolean;
    showEndPicker?: boolean;
}

// Crypto Symbols
const cryptoSymbols = [
    { name: "Bitcoin", symbol: "BTCUSDT", icon: "🔥" },
    { name: "Ethereum", symbol: "ETHUSDT", icon: "💎" },
    { name: "Binance Coin", symbol: "BNBUSDT", icon: "🟡" },
    { name: "Solana", symbol: "SOLUSDT", icon: "🌞" },
    { name: "XRP", symbol: "XRPUSDT", icon: "💰" },
];

const SimulatorScreen: React.FC = () => {
    const [symbol, setSymbol] = useState<string>("BTCUSDT");
    const [investments, setInvestments] = useState<Investment[]>([
        { id: 1, amount: 1000, startDate: new Date("2024-01-01"), endDate: new Date("2025-01-01") }
    ]);
    const [results, setResults] = useState<OverallProfitResult | null>(null);

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
            { id: Date.now(), amount: 1000, startDate: new Date(), endDate: new Date() }
        ]);
    };

    // Remove an Investment Row
    const removeInvestment = (id: number) => {
        setInvestments((prevInvestments) => prevInvestments.filter((investment) => investment.id !== id));
    };

    // Calculate Profits
    const handleCalculate = async () => {
        const data = await calculateCryptoProfitBetweenDates(
            symbol,
            investments.map((investments) => ({
                amount: investments.amount,
                startDate: investments.startDate,
                endDate: investments.endDate,
            }))
        );
        setResults(data);
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
                            <Text className="font-bold p-2">Investment:</Text>
                            <TextInput
                                className="border p-2 rounded flex-1 mx-1 text-center"
                                value={String(investment.amount)}
                                onChangeText={(text) => {
                                    const numericValue = text.replace(/[^0-9.]/g, "");
                                    updateInvestment(investment.id, "amount", Number(numericValue));
                                }}
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
                    {results && results.individualResults.map((item, id) => (
                        <AccordionItem value={String(id)} key={id}>
                            <AccordionHeader>
                                <AccordionTrigger>
                                    <Text>Investment Yield (Investment Number: {id})</Text>
                                </AccordionTrigger>
                            </AccordionHeader>
                            <AccordionContent>
                                <Text>ROI: {item.profitPercentage}%</Text>
                                <Text>Profit: {formatNumber(item.profit, 2)}</Text>
                            </AccordionContent>
                        </AccordionItem>
            ))}
                </Accordion>
                {results &&
                    <Box className="mt-4">
                        <Text>{formatNumber(results.totalInvested)}</Text>
                        <Text>{results?.roiPercentage}%</Text>
                        <Text>{formatNumber(results.totalProfit)}</Text>
                        <CandleChartComponent data={results.historicalData} markerTimestamps={results?.individualResults.map(item => item.endTime)} />
                    </Box>
        }
            </Box>
        </ScrollView>
    );
};

export default SimulatorScreen;
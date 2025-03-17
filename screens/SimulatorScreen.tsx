import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Platform } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { ChevronDown, ChevronDownIcon, PlusCircle, Trash2 } from "lucide-react-native";
import calculateCryptoProfitBetweenDates, { OverallProfitResult } from "@/utils/functions/crypto";
import CandleChartComponent, { CandlestickData } from "@/components/market/CandleChart";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Accordion, AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { formatNumber } from "@/utils/functions/help";
import MyLinearGradient from "@/components/gradient/MyLinearGradient";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Picker } from "@react-native-picker/picker";
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "@/components/ui/select";
import { IC_BNBUSDT, IC_BTCUSDT, IC_ETHUSDT, IC_SOLUSDT, IC_XRPUSDT } from "@/utils/constants/Icons";

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
    { name: "Bitcoin", symbol: "BTCUSDT", icon: <IC_BTCUSDT className="w-8 h-8 justify-center items-center" /> },
    { name: "Ethereum", symbol: "ETHUSDT", icon: <IC_ETHUSDT className="w-8 h-8 justify-center items-center" /> },
    { name: "Binance Coin", symbol: "BNBUSDT", icon: <IC_BNBUSDT className="w-8 h-8 justify-center items-center" /> },
    { name: "Solana", symbol: "SOLUSDT", icon: <IC_SOLUSDT className="w-9 h-9 justify-center items-center" /> },
    { name: "XRP", symbol: "XRPUSDT", icon: <IC_XRPUSDT className="w-8 h-8 justify-center items-center" /> },
];

const SimulatorScreen: React.FC = () => {
    const { appliedTheme } = useTheme();
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

    const minStartDate = new Date(2017, 6, 1); // July 1, 2017
    const maxEndDate = new Date();
    maxEndDate.setDate(maxEndDate.getDate() - 1);

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
        <ScrollView className={`bg-background-${appliedTheme} h-full`}>
            <Box className={`p-4 h-full bg-background-${appliedTheme} gap-2`}>
                <Text className={`mb-2 text-lg font-bold text-text-${appliedTheme}`}>Crypto Symbol:</Text>
                {/* Crypto Symbol Picker */}
                <Select selectedValue={symbol} onValueChange={setSymbol}>
                    <SelectTrigger className={`flex-row justify-between items-center border border-divider-${appliedTheme} rounded h-fit p-4`}>
                        <Box className="flex-row items-center ">
                            {cryptoSymbols.find((coin) => coin.symbol === symbol)?.icon}
                            <Text className={`font-medium ml-2 text-lg text-text-${appliedTheme}`}>
                                {cryptoSymbols.find((coin) => coin.symbol === symbol)?.name || "Select option"}
                            </Text>
                        </Box>
                        <SelectIcon className="mr-2" as={ChevronDownIcon} size='xl' color={appliedTheme === "dark" ? "white" : "black"} />
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectBackdrop />
                        <SelectContent>
                            {cryptoSymbols.map((coin) => (
                                <SelectItem label={coin.name} key={coin.symbol} value={coin.symbol}>
                                    <Box className="flex-row items-center">
                                        <Text className={`ml-2 text-text-${appliedTheme}`}>{coin.name}</Text>
                                    </Box>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </SelectPortal>
                </Select>

                {/* Investment Rows */}
                <Box className="flex flex-row justify-between items-center">
                    <Text className={`text-lg font-bold text-text-${appliedTheme}`}>Investments</Text>
                    <TouchableOpacity onPress={addInvestment}>
                        <MyLinearGradient type="button" color="purple">
                            <PlusCircle size={20} color="white" />
                        </MyLinearGradient>
                    </TouchableOpacity>
                </Box>
                {investments.map((investment) => (
                    <Box key={investment.id} className={`mb-2 flex-row items-center justify-between p-2 rounded-lg bg-card-${appliedTheme}`}>
                        {/* Investment Amount */}
                        <Box className="flex-col justify-center">
                            <Text className={`font-bold p-2 text-text-${appliedTheme}`}>Investment:</Text>
                            <TextInput
                                className={`border p-2 rounded flex-1 mx-1 text-center border-divider-${appliedTheme} text-text-${appliedTheme}`}
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
                            <Text className={`font-bold p-2 text-text-${appliedTheme}`}>Entry Date:</Text>
                            <TouchableOpacity onPress={() => updateInvestment(investment.id, "showStartPicker", true)} className="flex-1 mx-1 text-center">
                                <Text className={`border p-2 rounded text-center border-divider-${appliedTheme} text-text-${appliedTheme}`}>{investment.startDate.toLocaleDateString("en-GB")}</Text>
                            </TouchableOpacity>
                            {investment.showStartPicker && (
                                <DateTimePicker
                                    value={investment.startDate}
                                    minimumDate={minStartDate}
                                    maximumDate={investment.endDate}
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
                            <Text className={`font-bold p-2 text-text-${appliedTheme}`}>Exit Date:</Text>
                            <TouchableOpacity onPress={() => updateInvestment(investment.id, "showEndPicker", true)} className="flex-1 mx-1 text-center">
                                <Text className={`border p-2 rounded text-center border-divider-${appliedTheme} text-text-${appliedTheme}`}>{investment.endDate.toLocaleDateString("en-GB")}</Text>
                            </TouchableOpacity>
                            {investment.showEndPicker && (
                                <DateTimePicker
                                    value={investment.endDate}
                                    mode="date"
                                    minimumDate={minStartDate}
                                    maximumDate={investment.endDate}
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
                <MyLinearGradient className="mb-2" color="purple" type="button">
                    <Button onPress={handleCalculate}>
                        <ButtonText>Calculate</ButtonText>
                    </Button>
                </MyLinearGradient>

                {/* Results Accordion */}
                <Accordion type="single">
                    {results && results.individualResults.map((item, id) => (
                        <AccordionItem value={String(id)} key={id} className={`bg-card-${appliedTheme} p-2 outline-none`}>
                            <AccordionHeader>
                                <AccordionTrigger>
                                        <Text className={`text-text-${appliedTheme}`}> Investment #{id + 1}: {new Date(item.endTime).toLocaleDateString("en-GB")}</Text>
                                </AccordionTrigger>
                            </AccordionHeader>
                            <AccordionContent>
                                <Text className={`text-text-${appliedTheme}`}>ROI: {item.profitPercentage}%</Text>
                                <Text className={`text-text-${appliedTheme}`}>Profit: {formatNumber(item.profit, 2)}</Text>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                {results &&
                    <Box className="mt-4">
                        <Text className={`text-text-${appliedTheme}`}>{formatNumber(results.totalInvested)}</Text>
                        <Text className={`text-text-${appliedTheme}`}>{results?.roiPercentage}%</Text>
                        <Text className={`text-text-${appliedTheme}`}>{formatNumber(results.totalProfit)}</Text>
                        <CandleChartComponent data={results.historicalData} markerTimestamps={results?.individualResults.map(item => item.endTime)} />
                    </Box>
                }
            </Box>
        </ScrollView>
    );
};

export default SimulatorScreen;
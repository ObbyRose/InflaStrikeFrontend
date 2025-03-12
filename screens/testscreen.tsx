import React, { useState } from "react";
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

const ExchangeScreen = () => {
    const [activeTab, setActiveTab] = useState("Limit");
    const [amount, setAmount] = useState("126.00");
    const [convertedAmount, setConvertedAmount] = useState("56.01");
    const [fromCurrency, setFromCurrency] = useState("Bitcoin");
    const [toCurrency, setToCurrency] = useState("Litecoin");
    const [fromSymbol, setFromSymbol] = useState("₿");
    const [toSymbol, setToSymbol] = useState("Ł");
    const { appliedTheme } = useTheme();

    const swapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setFromSymbol(toSymbol);
        setToSymbol(fromSymbol);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    // PIE CHART
    const pieData = [
        {
            value: 47,
            color: '#009FFF',
            gradientCenterColor: '#006DFF',
            focused: true,
        },
        {value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE'},
        {value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3'},
        {value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97'},
    ];



    const renderDot = (color:any) => {
        return (
        <View
            style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: color,
            marginRight: 10,
            }}
        />
        );
    };
    
    const renderLegendComponent = () => {
        return (
        <>
            <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 10,
            }}>
            <View
                style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 120,
                marginRight: 20,
                }}>
                {renderDot('#006DFF')}
                <Text style={{color: 'black'}}>Excellent: 47%</Text>
            </View>
            <View
                style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
                {renderDot('#8F80F3')}
                <Text style={{color: 'black'}}>Okay: 16%</Text>
            </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View
                style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: 120,
                marginRight: 20,
                }}>
                {renderDot('#3BE9DE')}
                <Text style={{color: 'black'}}>Good: 40%</Text>
            </View>
            <View
                style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
                {renderDot('#FF7F97')}
                <Text style={{color: 'black'}}>Poor: 3%</Text>
            </View>
            </View>
        </>
        );
    };

    return (
        <Box className="p-4 h-full bg-white">
            <BackHeader title="Exchange" />
            <Box className="flex-1 items-center">
                <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                focusOnPress
                radius={90}
                innerRadius={60}
                innerCircleColor={appliedTheme==="dark" ? '#161C2C' : '#FFFFFF'}
                centerLabelComponent={() => {
                    return (
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text >
                        47%
                        </Text>
                        <Text>Excellent</Text>
                    </View>
                    );
                }}
                />
            {/* {renderLegendComponent()} */}
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


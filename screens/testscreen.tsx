import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetSectionHeaderText } from "@/components/ui/actionsheet";
import { Button } from "@/components/ui/button";
import ButtonsTrain from "@/components/ButtonsTrain";
import { Box } from "@/components/ui/box";
import { Divider } from "@/components/ui/divider";
import { useTheme } from "@/utils/Themes/ThemeProvider";

const TradeActionSheet = () => {
    const [showSheet, setShowSheet] = useState(false);
    const [activeTab, setActiveTab] = useState("Limit");
    const { appliedTheme } = useTheme();

    return (
        <Box className="flex-1 justify-center items-center bg-gray-100">
            {/* Open ActionSheet Button */}
            <Button className="bg-green-500 px-6 py-3 rounded-lg" onPress={() => setShowSheet(true)}>
                <Text className="text-white font-bold">Open Trade</Text>
            </Button>

            {/* ActionSheet */}
            <Actionsheet isOpen={showSheet} onClose={() => setShowSheet(false)}>
                <ActionsheetBackdrop />
                <ActionsheetContent className="bg-white rounded-t-2xl p-4 w-full">
                    
                    {/* Header - Tab Selection */}
                    <ActionsheetSectionHeaderText>
                        <ButtonsTrain
                            activeButton={activeTab}
                            handlePress={(newCategory) => setActiveTab(newCategory)}
                            buttons={['Market', 'Limit', 'Stop-Limit']}
                        />
                    </ActionsheetSectionHeaderText>

                    {/* Price, Amount, Total */}
                    <Box className="mt-4 w-full">
                        <Box className="flex-row justify-between items-center">
                            <Text className="text-gray-500">Limit Price</Text>
                            <Text className="text-black text-lg font-bold">12,394.00 USDT</Text>
                        </Box>

                        <Box className="flex-row justify-between items-center mt-2">
                            <Text className="text-gray-500">Amount</Text>
                            <Text className="text-black text-lg font-bold">0.5 BTC</Text>
                        </Box>

                        <Box className="flex-row justify-between items-center mt-2">
                            <Text className="text-gray-500">Total</Text>
                            <Text className="text-black text-lg font-bold">0 USDT</Text>
                        </Box>
                    </Box>

                    {/* Available Balance & Buy Button */}
                    <Box className="mt-4 items-center">
                        <Text className="text-gray-500">Avbl: 823,743 USDT</Text>
                        <Button className="bg-green-500 rounded-full w-screen mt-3">
                            <Text className="text-white font-bold">Place buy order</Text>
                        </Button>
                    </Box>

                    {/* Numeric Keypad */}
                    <Box className="flex-row flex-wrap justify-between mt-4 px-5">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "⌫"].map((key, index) => (
                            <TouchableOpacity key={index} className="w-[30%] p-4 items-center">
                                <Text className="text-black text-2xl font-bold">{key}</Text>
                            </TouchableOpacity>
                        ))}
                    </Box>

                </ActionsheetContent>
            </Actionsheet>
        </Box>
    );
};

export default TradeActionSheet;

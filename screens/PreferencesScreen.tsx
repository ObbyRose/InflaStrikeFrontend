import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Text } from "@/components/ui/text";
import { TouchableOpacity } from "react-native";
import { Icon } from "@/components/ui/icon";
import { ChevronRight, TrendingUp, TrendingDown, Check } from "lucide-react-native";


import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
  ActionsheetItem,
  ActionsheetItemText,
} from "@/components/ui/actionsheet";
import BackHeader from "@/components/BackHeader";

const PreferencesScreen: React.FC = () => {
    const { appliedTheme } = useTheme();
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const currencyOptions = ["USD", "EUR", "ILS"];

    return (
        <Box className={`p-4 h-full bg-background-${appliedTheme}`}>
            <BackHeader title="Preferences" />
            {/* Currency Selection */}
            <TouchableOpacity activeOpacity={0.7} onPress={() => setIsCurrencyOpen(true)} className="border border-gray-200 rounded-lg p-4 flex-row justify-between items-center bg-white mb-3">
                <Text className="text-black font-semibold text-md">Currency</Text>
                <Box className="flex-row items-center">
                    <Text className="text-gray-500 text-md">{selectedCurrency}</Text>
                    <Icon as={ChevronRight} className="ml-2" />
                </Box>
            </TouchableOpacity>

            {/* Appearance */}
            <TouchableOpacity activeOpacity={0.7} className="border border-gray-200 rounded-lg p-4 flex-row justify-between items-center bg-white mb-3">
                <Text className="text-black font-semibold text-md">Appearance</Text>
                <Icon as={ChevronRight} />
            </TouchableOpacity>

            {/* Color Preference */}
            <TouchableOpacity activeOpacity={0.7} className="border border-gray-200 rounded-lg p-4 flex-row justify-between items-center bg-white mb-3">
                <Text className="text-black font-semibold text-md">Color Preference</Text>
                <Box className="flex-row items-center">
                    <Icon as={TrendingUp} className="text-green-500 mr-1" />
                    <Icon as={TrendingDown} className="text-red-500" />
                    <Icon as={ChevronRight} className="ml-2" />
                </Box>
            </TouchableOpacity>

            {/* Clear Cache */}
            <TouchableOpacity activeOpacity={0.7} className="border border-gray-200 rounded-lg p-4 flex-row justify-between items-center bg-white mb-3">
                <Text className="text-black font-semibold text-md">Clear Cache</Text>
                <Box className="flex-row items-center">
                    <Text className="text-gray-500 text-md">1.18 MB</Text>
                    <Icon as={ChevronRight} className="ml-2" />
                </Box>
            </TouchableOpacity>

            {/* Network Test */}
            <TouchableOpacity activeOpacity={0.7} className="border border-gray-200 rounded-lg p-4 flex-row justify-between items-center bg-white mb-3">
                <Text className="text-black font-semibold text-md">Network Test</Text>
                <Icon as={ChevronRight} />
            </TouchableOpacity>

            {/* Certificate Trust Settings */}
            <TouchableOpacity activeOpacity={0.7} className="border border-gray-200 rounded-lg p-4 flex-row justify-between items-center bg-white mb-3">
                <Text className="text-black font-semibold text-md">Certificate Trust Settings</Text>
                <Icon as={ChevronRight} />
            </TouchableOpacity>

            {/* About Us */}
            <TouchableOpacity activeOpacity={0.7} className="border border-gray-200 rounded-lg p-4 flex-row justify-between items-center bg-white">
                <Text className="text-black font-semibold text-md">About Us</Text>
                <Box className="flex-row items-center">
                    <Text className="text-gray-500 text-md">v2.36.2</Text>
                    <Icon as={ChevronRight} className="ml-2" />
                </Box>
            </TouchableOpacity>

            {/* Currency Selection Actionsheet */}
            <Actionsheet isOpen={isCurrencyOpen} onClose={() => setIsCurrencyOpen(false)}>
                <ActionsheetBackdrop />
                <ActionsheetContent>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>

                    <Text className="text-lg font-semibold px-4 mb-2">Select Currency</Text>
                    {currencyOptions.map((currency, index) => (
                        <ActionsheetItem
                            key={index}
                            onPress={() => {
                                setSelectedCurrency(currency);
                                setIsCurrencyOpen(false);
                            }}
                            className="p-4 flex-row justify-between items-center"
                        >
                            <ActionsheetItemText className="text-md">{currency}</ActionsheetItemText>
                            {selectedCurrency === currency && <Icon as={Check} className="text-indigo-600" />}
                        </ActionsheetItem>
                    ))}
                </ActionsheetContent>
            </Actionsheet>
        </Box>
    );
};

export default PreferencesScreen;

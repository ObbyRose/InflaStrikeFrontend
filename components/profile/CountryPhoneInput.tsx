import React, { useRef, useState } from "react";
import { ChevronDownIcon } from "lucide-react-native";
import { countryCodes } from "@/utils/constants/countries";
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "../ui/select";
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Box } from "../ui/box";
import { useTheme } from "@/utils/Themes/ThemeProvider";

interface CountryPhoneInputProps {
    phoneNumber: string;
    setPhoneNumber?: React.Dispatch<React.SetStateAction<string>>;
    updateField?: (field: string, value: string) => void;
    setPrefix?: React.Dispatch<React.SetStateAction<string>>;
    error?: string;
    setError?: React.Dispatch<React.SetStateAction<string>>;
}

const CountryPhoneInput = ({ phoneNumber, updateField, setPhoneNumber, setPrefix, error, setError}: CountryPhoneInputProps) => {
    const { appliedTheme } = useTheme();
    const [selectedCountry, setSelectedCountry] = useState({ code: "+972", label: "Israel", flag: "🇮🇱" });

    const onChangeText = (text: string) => {
        if(setError) setError("");
        // If need prefix
        if(setPrefix) setPrefix(selectedCountry.code);
        // Select Update Method
        if(updateField)
            return updateField("phoneNumber", text.replace(/[^0-9]/g, ''))
        if(setPhoneNumber)
            return setPhoneNumber(text);
        return null;
    }

    return (
        <Box className="flex flex-col gap-2">        
            <Box className="flex flex-row flex-wrap gap-2 items-center">
                {/* Country Code Select */}
                <Select
                selectedValue={selectedCountry.code}
                onValueChange={(val) => {
                    const country = countryCodes.find(c => c.code === val);
                    if (country) setSelectedCountry(country);
                }}
                >
                <SelectTrigger className={`w-fit px-1 border-0 bg-input-${appliedTheme} rounded-lg h-[55px]`}>
                    <SelectInput 
                    placeholder={selectedCountry.flag + " " + selectedCountry.label}
                    value={selectedCountry.flag + " " + selectedCountry.label}
                    pointerEvents="none"
                    />
                    <SelectIcon className="mr-2" as={ChevronDownIcon} />
                </SelectTrigger>

                <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent className="max-h-[400px]">
                        <SelectDragIndicatorWrapper>
                            <SelectDragIndicator />
                        </SelectDragIndicatorWrapper>
                        
                        <ScrollView className="w-full">
                            {countryCodes.map((country) => (
                                <SelectItem
                                    key={country.code + country.label}
                                    label={country.flag + " " + country.label}
                                    value={country.code}
                                    className={`${selectedCountry.code === country.code ? "bg-blue-500" : ""}`}
                                />
                            ))}
                        </ScrollView>
                    </SelectContent>
                </SelectPortal>
                </Select>

                {/* Phone Number Input */}
                <View className="relative flex-1 min-w-[150px]">
                    <TextInput
                        className={`rounded-lg bg-input-${appliedTheme} text-text-${appliedTheme} h-[55px]`}
                        keyboardType="phone-pad"
                        maxLength={11}
                        style={{ paddingLeft: selectedCountry.code.length * 8 + 24 }}
                        value={phoneNumber}
                        onChangeText={onChangeText}
                        placeholder="Phone number"
                        placeholderTextColor={`${appliedTheme === 'dark' ? 'text-subText' : 'text-white'}`} 
                    />
                    
                    <Text className={`absolute left-3 top-[27.5px] -translate-y-1/2 text-text-${appliedTheme}`}>
                        {selectedCountry.code + " |"}
                    </Text>
                </View>
                {error && <Text className="text-red-500 text-sm ps-3  mb-1 mt-2 w-full">{error}</Text>}
                
            </Box>
        </Box>
    )
};

export default CountryPhoneInput;
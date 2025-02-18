import React, { useRef, useState } from "react";
import { ChevronDownIcon } from "lucide-react-native";
import { countryCodes } from "@/utils/constants/countries";
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "../ui/select";
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Box } from "../ui/box";

interface CountryPhoneInputProps {
    phoneNumber: string;
    updateField: (field: string, value: string) => void
}

const CountryPhoneInput = ({ phoneNumber, updateField}: CountryPhoneInputProps) => {
    const [selectedCountry, setSelectedCountry] = useState({ code: "+1", label: "🇺🇸 United States" });

    return (
        <Box className="flex flex-col gap-2">
            <Text className="font-semibold text-lg">Phone number</Text>
        
            <Box className="flex flex-row gap-2 items-center">
                {/* Country Code Select */}
                <Select
                selectedValue={selectedCountry.code}
                onValueChange={(val) => {
                    const country = countryCodes.find(c => c.code === val);
                    if (country) setSelectedCountry(country);
                }}
                >
                <SelectTrigger className="w-fit border rounded-lg h-[40px]">
                    <SelectInput 
                    placeholder={selectedCountry.label}
                    value={selectedCountry.label}
                    pointerEvents="none"
                    />
                    <SelectIcon as={ChevronDownIcon} />
                </SelectTrigger>

                <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent className="max-h-[400px]">
                        <SelectDragIndicatorWrapper>
                            <SelectDragIndicator />
                        </SelectDragIndicatorWrapper>
                        
                        <ScrollView>
                            {countryCodes.map((country) => (
                                <SelectItem
                                    key={country.code + country.label}
                                    label={country.label}
                                    value={country.code}
                                    className={`${selectedCountry.code === country.code ? "bg-blue-500" : ""}`}
                                />
                            ))}
                        </ScrollView>
                    </SelectContent>
                </SelectPortal>
                </Select>

                {/* Phone Number Input */}
                <View className="relative flex-1">
                    <TextInput
                        keyboardType="phone-pad"
                        maxLength={10}
                        className="p-2 rounded-lg border border-black h-[40px]"
                        style={{ paddingLeft: selectedCountry.code.length * 8 + 20 }}
                        value={phoneNumber}
                        onChangeText={(text) => updateField("phoneNumber", text.replace(/[^0-9]/g, ''))}
                        placeholder="Phone number"
                    />
                    
                    <Text className="absolute left-2 top-1/2 -translate-y-3">
                        {selectedCountry.code + " |"}
                    </Text>
                </View>
            </Box>
        </Box>
    )
};

export default CountryPhoneInput;
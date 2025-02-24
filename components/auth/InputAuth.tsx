import React, { useState } from "react";
import { Box } from "../ui/box";
import { Input, InputField } from "../ui/input";
import { getIconByString, IC_Eye, IC_EyeOff } from "@/utils/constants/Icons";
import { KeyboardTypeOptions, Pressable, TextInput } from "react-native";
import { Text } from "../ui/text";

interface InputAuthProps {
    icon?: string;
    placeholder?: string;
    isPass?: boolean;
    isBirthday?: boolean;
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
    maxLength?: number;
    keyboardType?: KeyboardTypeOptions;
    className?: string;
}

function InputAuth({
    icon,
    placeholder,
    isPass,
    isBirthday,
    value,
    onChangeText,
    error,
    maxLength,
    keyboardType,
    className,
    }: InputAuthProps) {
    const [showPass, setShowPass] = useState(false);
    const IconComponent = getIconByString(icon || "");

    const togglePasswordVisibility = () => {
        setShowPass(!showPass);
    };

    const handleBirthdayInput = (text: string) => {
        let cleaned = text.replace(/\D/g, "");
        let formatted = "";
        let prevValue = value.replace(/\D/g, "");
        const currentYear = new Date().getFullYear();
        const minYear = 1900;
        const maxYear = currentYear - 18;

        if (cleaned.length > prevValue.length) { 
            // User is typing
            if (cleaned.length >= 2) {
                let month = cleaned.slice(0, 2);
                if (parseInt(month) < 1 || parseInt(month) > 12) return;
                formatted = month + " / ";
            } else {
                formatted = cleaned;
            }
            if (cleaned.length >= 4) {
                let day = cleaned.slice(2, 4);
                if (parseInt(day) < 1 || parseInt(day) > 31) return;
                formatted += day + " / ";
            } else if (cleaned.length > 2) {
                formatted += cleaned.slice(2, 4);
            }
            if (cleaned.length > 4) {
                let year = cleaned.slice(4, 8);
                if (year.length === 4) {
                    let parsedYear = parseInt(year);
                    if (parsedYear < minYear || parsedYear > maxYear) return;
                }
                formatted += cleaned.slice(4, 8);
            }
        } else { 
            // User is deleting
            if (value.endsWith(" / ") && text.length < value.length) {
                cleaned = cleaned.slice(0, -1);
            }
            if (value.endsWith(" /") && text.length < value.length) {
                cleaned = cleaned.slice(0, -1);
            }

            if (cleaned.length >= 2) {
                formatted = cleaned.slice(0, 2) + " / ";
                if (cleaned.length > 2) formatted += cleaned.slice(2, 4);
                if (cleaned.length > 4) formatted += " / " + cleaned.slice(4, 8);
            } else {
                formatted = cleaned;
            }
        }
        onChangeText(formatted);
    };

    return (
        <Box className={className}>
        <Input className="relative rounded-xl h-14 mb-4" isInvalid={!!error}>
            {IconComponent && <IconComponent className="absolute left-2 w-7 h-7" />}
            <InputField
            className={IconComponent ? "px-12" : "pe-12"}
            keyboardType={isBirthday ? "numeric" : keyboardType}
            placeholder={placeholder}
            secureTextEntry={isPass && !showPass}
            value={value}
            onChangeText={isBirthday ? handleBirthdayInput : onChangeText}
            maxLength={isBirthday ? 14 : maxLength} // Max length for MM / DD / YYYY is 14 including spaces & slashes
            />
            {isPass && (
            <Pressable onPress={togglePasswordVisibility} className="absolute right-3">
                {showPass ? <IC_Eye className="w-7 h-7" /> : <IC_EyeOff className="w-7 h-7" />}
            </Pressable>
            )}
        </Input>
        {error && <Text className="text-red-500 text-sm ps-3 mb-1 -mt-1">{error}</Text>}
        </Box>
    );
}

export default InputAuth;

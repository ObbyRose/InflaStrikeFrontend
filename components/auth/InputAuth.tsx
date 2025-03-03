import React, { useState } from "react";
import { Box } from "../ui/box";
import { Input, InputField } from "../ui/input";
import { getIconByString, IC_Eye, IC_EyeOff } from "@/utils/constants/Icons";
import { KeyboardTypeOptions, Pressable, TextInput } from "react-native";
import { Text } from "../ui/text";
import { useTheme } from "@/utils/Themes/ThemeProvider";

interface InputAuthProps {
    icon?: string;
    placeholder?: string;
    type?: "birthday" | "card date" | "card number" | "pass";
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
    type,
    value,
    onChangeText,
    error,
    maxLength,
    keyboardType,
    className,
    }: InputAuthProps) {
    const [showPass, setShowPass] = useState(false);
    const IconComponent = getIconByString(icon || "");
    const { appliedTheme } = useTheme();
    
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

    const handleCardDateInput = (text: string) => {
        let cleaned = text.replace(/\D/g, "");
        let formatted = "";
        let prevValue = value.replace(/\D/g, "");
    
        if (cleaned.length > prevValue.length) { 
            // User is typing
            if (cleaned.length >= 2) {
                let month = cleaned.slice(0, 2);
                if (parseInt(month) < 1 || parseInt(month) > 12) return;
                formatted = month + " / ";
            } else {
                formatted = cleaned;
            }
            if (cleaned.length > 2) {
                formatted += cleaned.slice(2, 4);
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
            } else {
                formatted = cleaned;
            }
        }
        onChangeText(formatted);
    };

    const handleCardNumberInput = (text: string) => {
        let cleaned = text.replace(/\D/g, "");
        let formatted = "";
        
        for (let i = 0; i < cleaned.length; i++) {
            formatted += cleaned[i];
            if ((i + 1) % 4 === 0 && i < cleaned.length - 1) {
                formatted += " ";
            }
        }
    
        onChangeText(formatted);
    };

    const getInputHandler = () => {
        switch(type) {
            case "birthday":
                return handleBirthdayInput;
            case "card date":
                return handleCardDateInput;
            case "card number":
                return handleCardNumberInput;
            default:
                return onChangeText;
        }
    }
    const getInputLength = () => {
        switch(type) {
            case "birthday":
                return 14;
            case "card date":
                return 7;
            case "card number":
                return 19;
            default:
                return maxLength;
        }
    }
    const getInputPlaceholder = () => {
        switch(type) {
            case "birthday":
                return "MM / DD / YYYY";
            case "card date":
                return "MM / YY";
            default:
                return placeholder;
        }
    }
    const getInputKeyboard = () => {
        switch(type) {
            case "birthday": case "card date": case "card number":
                return "numeric";
            default:
                return keyboardType;
        }
    }

    return (
        <Box className={className}>
        <Input className={`relative rounded-xl h-14 mb-4 bg-input-${appliedTheme}`} isInvalid={!!error}>
            {IconComponent && <IconComponent className="absolute left-2 w-7 h-7" />}
            <InputField
                className={IconComponent ? "px-12" : "pe-12"}
                keyboardType={getInputKeyboard()}
                placeholder={getInputPlaceholder()}
                secureTextEntry={type === "pass" && !showPass}
                value={value}
                onChangeText={getInputHandler()}
                maxLength={getInputLength()}
            />
            {type === "pass" && (
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

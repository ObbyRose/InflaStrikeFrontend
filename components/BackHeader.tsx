import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IC_ArrowLeft } from "@/utils/constants/Icons";
import { TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Box } from "./ui/box";
import { Text } from "./ui/text";

interface BackHeaderProps {
    title?: string;
    icons?: string[];
    onPressIcons?: Function[];
}

function BackHeader({ title, icons, onPressIcons }: BackHeaderProps) {
    const navigation = useNavigation();
    const { appliedTheme } = useTheme();

    return (
        <SafeAreaView>
            <Box className={`p-4 mb-[1rem] bg-transparent flex-row items-center justify-between relative`}>
                
                {/* Left Chevron Button */}
                <TouchableOpacity
                    className="absolute left-4"
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.7}
                >
                    <IC_ArrowLeft className="w-8 h-8" />
                </TouchableOpacity>

                {/* Centered Title */}
                <Box className="flex-1 items-center justify-center">
                    <Text className="font-bold text-black text-xl text-center">{title || ""}</Text>
                </Box>
                {/* Right Icons */}
                <Box className="flex-row items-center absolute gap-2 right-4">
                    {icons?.map((icon, index) => (
                        <TouchableOpacity key={icon}>
                            <Text>{icon}</Text>
                        </TouchableOpacity>
                    ))}
                </Box>
            </Box>
        </SafeAreaView>
    );
}

export default BackHeader;

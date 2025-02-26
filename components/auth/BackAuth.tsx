import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box } from "../ui/box";
import { IC_ArrowLeft } from "@/utils/constants/Icons";
import { TouchableOpacity } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { SignUpScreensProps } from "@/types/NavigationTypes";
import { useTheme } from "@/utils/Themes/ThemeProvider";

function BackAuth({ handleScreenChange }: SignUpScreensProps) {
    const { appliedTheme } = useTheme();
    function handleBackPress() {
        handleScreenChange('back');
    }

    return (
        <SafeAreaView>
            <Box className={`p-4 bg-background-${appliedTheme}`}>
                <TouchableOpacity
                    className="self-start p-2"
                    onPress={() => handleBackPress()}
                    activeOpacity={0.7}
                >
                    <IC_ArrowLeft className="w-8 h-8" />
                </TouchableOpacity>
            </Box>
        </SafeAreaView>
    );
}

export default BackAuth;
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box } from "../ui/box";
import { IC_ChevronLeft } from "@/utils/constants/Icons";
import { TouchableOpacity } from "react-native";
import { SignUpScreensProps } from "@/types/NavigationTypes";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Text } from "../ui/text";

interface BackAuthProps extends SignUpScreensProps{
    headerStep?: number;
}
function BackAuth({ handleScreenChange, headerStep}: BackAuthProps) {
    const { appliedTheme } = useTheme();
    function handleBackPress() {
        handleScreenChange('back');
    }

    return (
        <SafeAreaView>
            <Box className={`flex-row justify-between p-4 bg-background-${appliedTheme}`}>
                <TouchableOpacity
                    className="self-start p-2"
                    onPress={() => handleBackPress()}
                    activeOpacity={0.7}
                >
                    <IC_ChevronLeft className="w-8 h-8" color={appliedTheme === "dark" ? "white" : "black" } />
                </TouchableOpacity>

                {headerStep && 
                <Box className={`items-center justify-center rounded-full p-3 bg-card-${appliedTheme}`}>
                    <Text className={`font-bold text-text-${appliedTheme}`}>
                        {`Step ${headerStep} of 3`}
                    </Text>
                </Box>
                }
            </Box>
        </SafeAreaView>
    );
}

export default BackAuth;
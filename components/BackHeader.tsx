import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IC_ArrowLeft } from "@/utils/constants/Icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Box } from "./ui/box";
import { Text } from "./ui/text";

interface BackHeaderProps {
    title?: string, 
    icons?: string[], 
    onPressIcons?: Function[];
}

function BackHeader({ title, icons, onPressIcons}: BackHeaderProps) {
    const navigation = useNavigation();
    const { appliedTheme } = useTheme();
    
    return (
        <SafeAreaView>
            <Box className={`p-4 bg-background-${appliedTheme} flex-row items-center`}>
                <TouchableOpacity
                    className="self-start p-2 w-1/3"
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.7}
                >
                    <IC_ArrowLeft className="w-8 h-8" />
                </TouchableOpacity>

                <Box className="flex-row flex-1 justify-between items-center">
                    <Text className="font-bold">{title || ""}</Text>
                    <Box className="flex-row items-center gap-5">
                        {icons?.map(icon =>
                            <Text key={icon}>{icon}</Text>
                        )}
                    </Box>
                </Box>
            </Box>
        </SafeAreaView>
    );
}

export default BackHeader;

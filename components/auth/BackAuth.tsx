import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box } from "../ui/box";
import { IC_ArrowLeft } from "@/utils/constants/Icons";
import { TouchableOpacity } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface BackAuthProps {
    screenStep: number;
    setScreenStep: React.Dispatch<React.SetStateAction<number>>;
    navigation: NavigationProp<ParamListBase>;
}

function BackAuth({ screenStep, setScreenStep, navigation }: BackAuthProps) {

    function handleBackPress() {
        if(screenStep === 0)
            navigation.navigate("Login");
        else 
            setScreenStep(prev => prev - 1)
    }

    return (
        <SafeAreaView>
            <Box className="p-4">
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
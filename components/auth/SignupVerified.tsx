import { Box } from '@/components/ui/box'
import React from 'react'
import { Text } from '../ui/text';
import { SignUpScreensProps, TNavigation } from '@/types/NavigationTypes';
import { IM_PhoneHand, IM_PhoneHandVerified } from '@/utils/constants/Images';
import { Button, ButtonText } from '../ui/button';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { useNavigation } from "@react-navigation/native";
import { NavigationProp, ParamListBase } from '@react-navigation/native';

function SignupVerified({ handleScreenChange } : SignUpScreensProps) {
    const { appliedTheme } = useTheme();
    const navigation = useNavigation<TNavigation>();

    const handleDoneSignup = () => {
        // Handle Create User
        
        navigation.navigate("MainApp", { screen: "Home" });
    }
    
    return (
    <Box className='flex-1 justify-between'>
        <Box>
            <IM_PhoneHandVerified className='h-[300px] -mt-3'/>
            <Box className="items-center py-4">
                <Text className="text-2xl font-bold">You're verified!</Text>
                <Text className="text-gray-500 text-center mt-2 mb-4">
                    Now you can fund your account so you're ready to invest in crypto.
                </Text>
            </Box>
        </Box>
        <Box className='gap-3'>
            <Button variant={`rounded-solid-${appliedTheme}`} className="h-fit mb-3"
            onPress={() => handleDoneSignup()}
            >
                <ButtonText className="text-white">
                    Start
                </ButtonText>
            </Button>
        </Box>
    </Box>
    )
}

export default SignupVerified;
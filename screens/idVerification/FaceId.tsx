import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Platform, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import usePinStore from '../../context/pinStore';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import BackHeader from '@/components/BackHeader';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import { Props } from '@/types/NavigationTypes';
import { IC_FaceID_Group } from '@/utils/constants/Icons';

const FaceId: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const { setBiometricAuth } = usePinStore(); // Zustand store to track biometrics
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);

    useEffect(() => {
        checkDeviceSupport();
    }, []);

    const checkDeviceSupport = async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        setIsBiometricSupported(compatible);
    };

    const handleSetupFaceID = async () => {
        if (!isBiometricSupported) {
            Alert.alert('Biometric Authentication', 'Your device does not support biometrics.');
            return;
        }

        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        if (!savedBiometrics) {
            Alert.alert('Biometric Authentication', 'No Face ID found. Please set up Face ID first.');
            return;
        }

        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Set up Face ID',
            fallbackLabel: 'Use PIN instead',
        });

        if (result.success) {
            setBiometricAuth(true); // Store Face ID status in Zustand
            Alert.alert('Success', 'Face ID setup complete.');

            navigation.reset({ index: 0, routes: [{ name: 'MainApp', params: { screen: 'Home' } }] });
        } else {
            Alert.alert('Authentication Failed', 'Please try again.');
        }
    };

    return (
        <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}>
            <Box className="p-4 h-full flex">
                <BackHeader title="Set Up Face ID" />
                <VStack className="flex gap-4 justify-center items-center">
                    <IC_FaceID_Group /> 
                    <Text className={`text-2xl font-bold text-text-${appliedTheme}`}>
                        Enable Face ID for Quick Access
                    </Text>
                    <Text className={`text-subText-${appliedTheme} mt-2 text-center text-[16px]`}>
                        Use your Face ID to unlock your account securely and proceed faster.
                    </Text>

                    <Box className="mt-6 gap-6 px-6">
                        <MyLinearGradient type="button" color="purple">
                            <Button onPress={handleSetupFaceID}>
                                <ButtonText className="w-full flex text-center text-lg items-center justify-center">Enable Face ID</ButtonText>
                            </Button>
                        </MyLinearGradient>

                        <TouchableOpacity onPress={() => navigation.navigate('MainApp', { screen: 'Home' })}>
                            <Box>
                                <Text className={`text-center text-subText-${appliedTheme} text-[16px]`}>
                                    Skip, I'll do this later
                                </Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </VStack>
            </Box>
        </MyLinearGradient>
    );
};

export default FaceId;

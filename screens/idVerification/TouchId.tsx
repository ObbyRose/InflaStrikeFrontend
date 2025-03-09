import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Platform, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useNavigation } from '@react-navigation/native';
import usePinStore from '../../context/pinStore';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import BackHeader from '@/components/BackHeader';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import { Props } from '@/types/NavigationTypes';
import { IC_TouchID } from '@/utils/constants/Icons';

const TouchId: React.FC<Props> = ({ navigation }) => {
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

    const handleSetupTouchID = async () => {
        if (!isBiometricSupported) {
            Alert.alert('Biometric Authentication', 'Your device does not support biometrics.');
            return;
        }

        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        if (!savedBiometrics) {
            Alert.alert('Biometric Authentication', 'No fingerprints found. Please add a fingerprint first.');
            return;
        }

        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Set up Touch ID',
            fallbackLabel: 'Use PIN instead',
        });

        if (result.success) {
            setBiometricAuth(true); // Store Touch ID status in Zustand
            Alert.alert('Success', 'Touch ID setup complete.');

            if (Platform.OS === 'ios') {
                navigation.navigate('FaceID');
            } else {
                navigation.reset({ index: 0, routes: [{ name: 'MainApp', params: { screen: 'Home' } }] });
            }
        } else {
            Alert.alert('Authentication Failed', 'Please try again.');
        }
    };

    return (
        <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}>
            <Box className="p-4 h-full flex">
                <BackHeader title="Set Up Touch ID" />
                <VStack className="flex gap-4 justify-center items-center">
                    <IC_TouchID />
                    <Text className={`text-2xl font-bold text-text-${appliedTheme}`}>
                        Touch ID for faster payment
                    </Text>
                    <Text className={`text-subText-${appliedTheme} mt-2 text-center text-[16px]`}>
                        Enable Touch ID to let you login & proceed your transactions faster.
                    </Text>

                    <Box className="mt-10 gap-6">
                        <MyLinearGradient type='button' color='purple'>
                        <Button onPress={handleSetupTouchID} className="w-64 h-14 rounded-full">
                            <ButtonText className="text-lg">Enable Touch ID</ButtonText>
                        </Button>
                        </MyLinearGradient>
                        <TouchableOpacity onPress={() => {
                            if (Platform.OS === 'ios') {
                                navigation.navigate('FaceID');
                            } else {
                                navigation.navigate('MainApp', { screen: 'Home' });
                            }
                        }}>
                            <Box>
                                <Text className={`text-center text-subText-${appliedTheme} text-[16px]`}>Skip, I'll do this later</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </VStack>
            </Box>
        </MyLinearGradient>
    );
};

export default TouchId;

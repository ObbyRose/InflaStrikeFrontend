import React, { useState, useEffect } from 'react';
import { Dimensions, Vibration } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import usePinStore from '../../context/pinStore';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { Props } from '@/types/NavigationTypes';
import { IC_FaceID, IC_Fingerprint } from '@/utils/constants/Icons';
import BackHeader from '@/components/BackHeader';

const { height } = Dimensions.get('window');

const ConfirmPinScreen: React.FC<Props> = ({ navigation, route }) => {
    const { pin, setPin, clearPin } = usePinStore();
    const [message, setMessage] = useState<string>('');
    const { appliedTheme } = useTheme();
    const { authType, authData } = route.params; // Retrieve stored PIN or Fingerprint authentication

    useEffect(() => {
        if (authType === 'fingerprint') {
            handleFingerprintConfirmation(); // Automatically prompt fingerprint authentication
        }
    }, []);

    useEffect(() => {
        if (authType === 'pin' && pin.length === 4) {
            handlePinConfirmation();
        }
    }, [pin]);

    const handlePinConfirmation = () => {
        if (pin === authData) {
            setMessage('PIN Confirmed!');
            setTimeout(() => {
                navigation.navigate('MainApp', { screen: 'Home' });
            }, 500);
        } else {
            setMessage('PINs do not match. Try again.');
            Vibration.vibrate();
            clearPin();
        }
    };

    const handleFingerprintConfirmation = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();

        if (!hasHardware || !isEnrolled) {
            setMessage('Fingerprint authentication not available.');
            return;
        }

        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Confirm Fingerprint',
            fallbackLabel: 'Use PIN instead',
        });

        if (result.success && authType === 'fingerprint' && authData === 'fingerprint') {
            setMessage('Fingerprint Confirmed!');
            setTimeout(() => {
                navigation.navigate('MainApp', { screen: 'Home' });
            }, 500);
        } else {
            setMessage('Fingerprint authentication failed.');
            Vibration.vibrate();
        }
    };

    return (
        <VStack className="flex-1 bg-white px-6" style={{ height }}>
            <BackHeader title="Confirm PIN" />
            {/* Top Section - Title */}
            <VStack className="items-center mt-20">
                <Text className="text-3xl font-bold text-gray-900">
                    {authType === 'fingerprint' ? 'Confirm Fingerprint' : 'Confirm PIN'}
                </Text>
                <Text className="text-gray-500 mt-2">
                    {authType === 'fingerprint' ? 'Scan your fingerprint again' : 'Re-enter your PIN'}
                </Text>
            </VStack>

            {/* Middle Section - PIN Indicator (Only for PIN confirmation) */}
            {authType === 'pin' && (
                <HStack className="justify-center gap-4 mt-12">
                    {[...Array(4)].map((_, i) => (
                        <Box
                            key={i}
                            className={`w-5 h-5 rounded-full border border-gray-400 ${
                                pin.length > i ? `bg-button-${appliedTheme}` : 'bg-white'
                            }`}
                        />
                    ))}
                </HStack>
            )}

            {/* Bottom Section - Numpad (Only for PIN confirmation) */}
            {authType === 'pin' && (
                <VStack className="space-y-4 pb-10 gap-6 flex-1 justify-center">
                    {[
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9],
                        ['face', 0, 'fingerprint'],
                    ].map((row, rowIndex) => (
                        <HStack key={rowIndex} className="justify-center gap-6">
                            {row.map((num, index) => (
                                <Button
                                    key={index}
                                    className="w-20 h-20 border bg-white border-black rounded-full items-center justify-center"
                                    onPress={() => {
                                        if (typeof num === 'number') setPin(num.toString());
                                        if (num === 'face') console.log('Face ID Triggered');
                                        if (num === 'fingerprint') handleFingerprintConfirmation();
                                    }}
                                >
                                    {num === 'fingerprint' ? (
                                        <IC_Fingerprint className="text-2xl text-button-light" />
                                    ) : num === 'face' ? (
                                        <IC_FaceID className="text-2xl text-button-light" />
                                    ) : (
                                        <Text className="text-2xl font-bold text-button-light">
                                            {typeof num === 'number' ? num : ''}
                                        </Text>
                                    )}
                                </Button>
                            ))}
                        </HStack>
                    ))}
                </VStack>
            )}

            <VStack className="items-center pb-6">
                {message && (
                    <Text className={message.includes('Confirmed') ? 'text-green-500' : 'text-red-500'}>
                        {message}
                    </Text>
                )}
            </VStack>
        </VStack>
    );
};

export default ConfirmPinScreen;

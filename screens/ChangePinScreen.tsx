import React, { useState, useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import usePinStore from '../context/pinStore';
import { Dimensions, Vibration } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { IC_FaceID, IC_Fingerprint } from '@/utils/constants/Icons';

const { height } = Dimensions.get('window');

const ChangePinScreen: React.FC = () => {
    const { pin, setPin, clearPin, deleteLastDigit } = usePinStore();
    const [message, setMessage] = useState<string>('');
    const { appliedTheme } = useTheme();

    const correctPin = '1234';

    useEffect(() => {
        if (pin.length === 4) {
            handlePinSubmit();
            if(pin === correctPin) {
                clearPin();
            }
        }
    }, [pin]);

    const handleFingerprint = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();

        if (!hasHardware || !isEnrolled) {
            setMessage('⚠️ Fingerprint authentication not available.');
            return;
        }

        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Authenticate with fingerprint',
            fallbackLabel: 'Enter PIN instead',
        });

        if (result.success) {
            setMessage('Fingerprint recognized! Access Granted.');
        } else {
            setMessage('Authentication failed. Try again.');
        }
    };

    const handlePinSubmit = () => {
        if (pin === correctPin) {
            setMessage('Access Granted.');
        } else {
            setMessage('Wrong PIN. Try again.');
            Vibration.vibrate();
            clearPin();
        }
    };

    return (
        <VStack className="flex-1 bg-white px-6" style={{ height }}>
            {/* Top Section - Title */}
            <VStack className="items-center mt-20">
                <Text className="text-3xl font-bold text-gray-900">Enter Pin</Text>
                <Text className="text-gray-500 mt-2">Enter Your Pin Code</Text>
            </VStack>

            {/* Middle Section - PIN Indicator */}
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

            {/* Bottom Section - Numpad */}
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
                                    if (num === 'fingerprint') handleFingerprint();
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

            {/* Status Message (Fixed at Bottom) */}
            <VStack className="items-center pb-6">
                {message && (
                    <Text className={message.includes('Granted') ? 'text-green-500' : 'text-red-500'}>
                        {message}
                    </Text>
                )}
            </VStack>
        </VStack>
    );
};

export default ChangePinScreen;

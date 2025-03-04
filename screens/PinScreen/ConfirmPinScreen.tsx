import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Vibration } from 'react-native';
import usePinStore from '../../context/pinStore';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import BackHeader from '@/components/BackHeader';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import { Props } from '@/types/NavigationTypes';

const ConfirmPinScreen: React.FC<Props> = ({ navigation, route }) => {
    const { deleteLastDigit, clearPin } = usePinStore();
    const { appliedTheme } = useTheme();
    
    const { createdPin } = route.params;
    const [enteredPin, setEnteredPin] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        console.log('🚀 Received PIN (createdPin):', createdPin);
        console.log('📌 Entered PIN State:', enteredPin);

        if (!createdPin) {
            setMessage('❌ Error: No PIN received. Try again.');
        }
    }, [createdPin, enteredPin]);

    // ✅ Automatically confirm when 4 digits are entered
    useEffect(() => {
        if (enteredPin.length === 4) {
            handlePinConfirmation();
        }
    }, [enteredPin]);

    const handlePinPress = (digit: string) => {
        if (digit === '<') {
            setEnteredPin((prev) => prev.slice(0, -1)); // Remove last digit
        } else if (enteredPin.length < 4) {
            setEnteredPin((prev) => prev + digit);
        }
    };

    const handlePinConfirmation = () => {
        console.log('🔍 Entered PIN:', enteredPin);
        console.log('🔐 Expected PIN (createdPin):', createdPin);

        if (enteredPin === createdPin) {
            setMessage('✅ PIN Confirmed!');
            setTimeout(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'MainApp', params: { screen: 'Home' } }],
                });

                setTimeout(() => {
                    clearPin();
                }, 200);
            }, 500);
        } else {
            setMessage('❌ PINs do not match. Try again.');
            Vibration.vibrate();
            setTimeout(() => setEnteredPin(''), 300);
        }
    };

    return (
        <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}>
            <Box className="p-4 h-full flex">
                <BackHeader title="Confirm PIN" />
                <VStack className="flex-1 items-center justify-between">
                    
                    {/* Title */}
                    <VStack className="items-center">
                        <Text className={`text-3xl font-bold text-text-${appliedTheme}`}>Confirm PIN</Text>
                        <Text className={`text-subText-${appliedTheme} mt-2`}>Re-enter your PIN</Text>
                    </VStack>

                    {/* PIN Input Display */}
                    <HStack className="gap-4 justify-center">
                        {[0, 1, 2, 3].map((index) => (
                            <Box key={index} className="w-14 h-16 border-2 rounded-lg flex items-center justify-center bg-card-dark">
                                {enteredPin.length > index && <Box className="w-3 h-3 bg-white rounded-full" />}
                            </Box>
                        ))}
                    </HStack>

                    {/* Number Pad */}
                    <VStack className="space-y-6 mt-6">
                        {[
                            ['1', '2', '3'],
                            ['4', '5', '6'],
                            ['7', '8', '9'],
                            ['', '0', '<'],
                        ].map((row, rowIndex) => (
                            <HStack key={rowIndex} className="justify-center gap-14">
                                {row.map((digit, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => handlePinPress(digit)}
                                        className="w-20 h-20 rounded-lg flex items-center justify-center"
                                    >
                                        <Text className={`text-3xl font-semibold text-text-${appliedTheme}`}>{digit}</Text>
                                    </TouchableOpacity>
                                ))}
                            </HStack>
                        ))}
                    </VStack>
                        <Box className='mt-4'></Box>
                    {/* Error Message */}
                    {message && <Text className={`${message.includes('Confirmed') ? 'text-green-500' : 'text-red-500'}`}>{message}</Text>}
                </VStack>
            </Box>
        </MyLinearGradient>
    );
};

export default ConfirmPinScreen;

import React, { useEffect } from 'react';
import { TouchableOpacity, Dimensions, Vibration } from 'react-native';
import usePinStore from '../../context/pinStore';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import BackHeader from '@/components/BackHeader';

const CreatePinScreen: React.FC = () => {
    const { pin, setPin, deleteLastDigit } = usePinStore();
    const { appliedTheme } = useTheme();

    useEffect(() => {
        if (pin.length === 4) {
            Vibration.vibrate(50); // Small vibration when PIN is full
        }
    }, [pin]);

    return (
        <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}>
            <Box className="p-4 h-full flex">
                    <BackHeader title="Create PIN" />
                <VStack className="flex-1 items-center justify-between">
                    {/* Back Button */}

                    {/* Title */}
                    <VStack className="items-center">
                        <Text className={`text-3xl font-bold text-text-${appliedTheme}`}>Create your PIN</Text>
                        <Text className={`text-subText-${appliedTheme} mt-2`}>
                            Create a four-digit passcode to secure your account
                        </Text>
                    </VStack>

                    {/* PIN Input Display */}
                    <HStack className="gap-4 justify-center">
                        {[0, 1, 2, 3].map((index) => (
                            <Box
                                key={index}
                                className={`w-14 h-16 border-2 rounded-lg flex items-center justify-center ${
                                    pin.length === index ? `border-${appliedTheme === 'light' ? 'purple-500' : 'white'}` : 'border-transparent'
                                }${appliedTheme === 'light' ? ' bg-white' : ' bg-card-dark'}`}
                            >
                                {pin.length > index && (
                                    <Box
                                        style={{
                                            width: 12,
                                            height: 12,
                                            backgroundColor: appliedTheme === 'light' ? '#5506FD' : '#FFFFFF',
                                            borderRadius: 6,
                                        }}
                                    />
                                )}
                            </Box>
                        ))}
                    </HStack>

                    {/* Number Pad */}
                    <VStack className="space-y-6 mt-6">
                        {[
                            ['1', '2', '3'],
                            ['4', '5', '6'],
                            ['7', '8', '9'],
                            ['' , '0', '<'], // Aligns delete button
                        ].map((row, rowIndex) => (
                            <HStack key={rowIndex} className="justify-center gap-14">
                                {row.map((digit, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            if (digit === '<') {
                                                deleteLastDigit();
                                            } else {
                                                setPin(digit);
                                            }
                                        }}
                                        className="w-20 h-20 rounded-lg flex items-center justify-center"
                                    >
                                        <Text className={`text-3xl font-semibold text-text-${appliedTheme}`}>{digit}</Text>
                                    </TouchableOpacity>
                                ))}
                            </HStack>
                        ))}
                    </VStack>

                    {/* Create PIN Button (wrapped in Box with padding) */}
                    <Box className="w-full pb-6">
                        <MyLinearGradient type="button" color="purple">
                            <Button className="w-full h-14 rounded-full">
                                <ButtonText className="text-lg">Create PIN</ButtonText>
                            </Button>
                        </MyLinearGradient>
                    </Box>
                </VStack>
            </Box>
        </MyLinearGradient>
    );
};

export default CreatePinScreen;

import { Box } from '@/components/ui/box'
import React, { useEffect, useState } from 'react'
import { Text } from '../ui/text';
import { SignUpScreensProps } from '@/types/NavigationTypes';
import { IM_Mailbox } from '@/utils/constants/Images';
import { Button, ButtonSpinner, ButtonText } from '../ui/button';
import { useToast } from '../ui/toast';
import { showNewToast } from '@/utils/constants/Toasts';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { Input, InputField } from '../ui/input';

function VerifyPhone({ handleScreenChange } : SignUpScreensProps) {
    const { appliedTheme } = useTheme();
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [timer, setTimer] = useState(60);
    const [isResendDisabled, setIsResendDisabled] = useState(false);

    useEffect(() => {
        if (timer > 0 && isResendDisabled) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(interval);
        } else {
            if (timer === 0) {
                setIsResendDisabled(false);
                setTimer(60);
            }
        }
    }, [timer, isResendDisabled]);

    function handleSubmit() {    
        
        
        setTimeout(() => {
            handleScreenChange(5);
        }, 1000);
    }

    function handleResendPhone() {
        setIsLoading(true);

        // Reset Timer
        setIsResendDisabled(true);
        setTimer(60);

        setTimeout(() => {
            setIsLoading(false);
            handleToast();
        }, 1000);
    }

    const handleToast = () => {
        const toastId = "unique-toast-phone-verification";
        if (!toast.isActive(toastId)) {
            showNewToast(toast, toastId, appliedTheme);
        }
    };

    return (
    <Box className='flex-1'>
        <Box className=''>
            <IM_Mailbox className='h-[300px] -mt-3'/>
        </Box>
        <Box className='flex-1 justify-between'>
            {/* Titles */}
            <Box className='gap-2'>
                <Text className='text-3xl text-black font-bold text-center'>Enter authentication code</Text>
                <Text className={`text-gray-${appliedTheme} text-lg text-center`}>
                    Enter the 7-digit code we just texted to your phone number
                </Text>
            </Box>
            <Input>
                <InputField />
            </Input>
            {/* Buttons */}
            <Box className='gap-3'>
                <Button variant={`rounded-solid-${appliedTheme}`}  className="h-fit"
                onPress={handleSubmit}
                >
                    <ButtonText className="text-white">
                        Continue
                    </ButtonText>
                </Button>
                <Button variant={`rounded-outline-${appliedTheme}`} className="h-fit"
                    onPress={handleResendPhone}
                    disabled={isResendDisabled}
                    >
                        <ButtonText className="text-[#828A99]">
                            {isLoading ? <ButtonSpinner color={"black"} className='h-6'/> : 
                            isResendDisabled ? `Resend in ${timer}s` : "Resend email"}
                        </ButtonText>
                    </Button>
            </Box>
        </Box>
    </Box>
    )
}

export default VerifyPhone
import { Box } from '@/components/ui/box'
import React, { useEffect, useState } from 'react'
import { Text } from '../ui/text';
import { SignUpScreensProps } from '@/types/NavigationTypes';
import { Button, ButtonSpinner, ButtonText } from '../ui/button';
import { useToast } from '../ui/toast';
import { showNewToast } from '@/utils/constants/Toasts';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import InputAuth from './InputAuth';
import { useFormInput } from '@/hooks/useFormInput';


function VerifyPhone({ handleScreenChange } : SignUpScreensProps) {
    const { appliedTheme } = useTheme();
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingCode, setIsLoadingCode] = useState(false);
    const [timer, setTimer] = useState(60);
    const [isResendDisabled, setIsResendDisabled] = useState(false);
    const { values, errors, handleInputChange, setErrorByFields } = useFormInput({
        code: "",
        api: ''
    });
    const { code } = values;

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
        console.log("Click submit code: ", code);

        if(code.length < 7) {
            if(code.length === 0) {
                setErrorByFields({ code: "Code is required"})
            } else {
                setErrorByFields({ code: "Code must be 7 digits"})
            }
            return;
        }

        setIsLoadingCode(true);

        setTimeout(() => {
            setIsLoadingCode(false);
            handleScreenChange('next');
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
            showNewToast(toast, toastId, "Success", "Code has been sent to your phone number");
        }
    };

    return (
    <Box className='flex-1 py-5 justify-between'>
        {/* Titles */}
        <Box>
            <Box className='gap-2'>
                <Text className='text-3xl text-black font-bold text-center'>Enter authentication code</Text>
                <Text className={`text-gray-${appliedTheme} text-lg text-center`}>
                    Enter the 7-digit code we just texted to your phone number
                </Text>
            </Box>
            <InputAuth 
                className='mt-5'
                placeholder='Enter verification code'
                value={code} 
                onChangeText={(val) => handleInputChange("code", val)}
                keyboardType="numeric"
                maxLength={7}
                error={errors.code}
            />
            { errors.api && <Text className="text-red-500 text-sm ps-3 mb-1 -mt-1">{errors.api}</Text>}
        </Box>
        {/* Buttons */}
        <Box className='gap-3'>
            <Button variant={`rounded-solid-${appliedTheme}`}  className="h-fit"
            onPress={handleSubmit}
            >
                <ButtonText className="text-white">
                    {isLoadingCode ? <ButtonSpinner color="white" className='h-6'/> : "Continue"}
                </ButtonText>
            </Button>
            <Button variant={`rounded-outline-${appliedTheme}`} className="h-fit"
                onPress={handleResendPhone}
                disabled={isResendDisabled}
                >
                    <ButtonText className="text-[#828A99]">
                        {isLoading ? <ButtonSpinner color={"black"} className='h-6'/> : 
                        isResendDisabled ? `Resend in ${timer}s` : "Resend code"}
                    </ButtonText>
                </Button>
        </Box>
    </Box>
    )
}

export default VerifyPhone
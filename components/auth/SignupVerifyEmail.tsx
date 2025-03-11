import { Box } from '@/components/ui/box'
import React, { useEffect, useState } from 'react'
import { Text } from '../ui/text';
import { SignUpScreensProps } from '@/types/NavigationTypes';
import { IM_Mailbox } from '@/utils/constants/Images';
import { Button, ButtonSpinner, ButtonText } from '../ui/button';
import { useToast } from '../ui/toast';
import { showNewToast } from '@/utils/constants/Toasts';
import { Linking } from 'react-native';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import MyLinearGradient from '../gradient/MyLinearGradient';

function VerifyEmail({ handleScreenChange } : SignUpScreensProps) {
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

    function handleCheckInbox() {    
        // Open Gmail app
        Linking.canOpenURL('googlegmail://').then((supported) => {
            if (supported) {
                Linking.openURL('googlegmail://');
            } else {
                Linking.openURL('https://mail.google.com');
            }
        }).catch(err => console.error("Failed to open Gmail:", err));
    
        setTimeout(() => {
            handleScreenChange('next');
        }, 1000);
    }

    function handleResendEmail() {
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
        const toastId = "unique-toast-email-verification";
        if (!toast.isActive(toastId)) {
            showNewToast(toast, toastId, "Success", "Email has been sent to your inbox");
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
                <Text className={`text-3xl text-text-${appliedTheme} font-bold text-center`}>Verify your email</Text>
                <Text className={`text-subText-${appliedTheme} text-lg text-center`}>
                    We sent a verification email to. Please tap
                    the link inside that email to continue.
                </Text>
            </Box>
            {/* Buttons */}
            <Box className='gap-3'>
                <MyLinearGradient type='button' color="purple">
                    <Button onPress={handleCheckInbox} >
                        <ButtonText className="text-white">
                            Check my inbox
                        </ButtonText>
                    </Button>
                </MyLinearGradient>
                <MyLinearGradient type='button' color="gray">
                    <Button
                        onPress={handleResendEmail}
                        disabled={isResendDisabled}
                        >
                            <ButtonText className="text-[#828A99]">
                                {isLoading ? <ButtonSpinner color={"black"} className='h-6'/> : 
                                isResendDisabled ? `Resend in ${timer}s` : "Resend email"}
                            </ButtonText>
                    </Button>
                </MyLinearGradient>
            </Box>
        </Box>
    </Box>
    )
}

export default VerifyEmail
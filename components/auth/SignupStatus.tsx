import { Box } from '@/components/ui/box'
import React, { useEffect, useState } from 'react'
import { Text } from '../ui/text';
import { SignUpScreensProps } from '@/types/NavigationTypes';
import { IM_PhoneHand } from '@/utils/constants/Images';
import { Button, ButtonText } from '../ui/button';
import { IC_GreenVi } from '@/utils/constants/Icons';
import { useTheme } from '@/utils/Themes/ThemeProvider';

interface SignupStatusProps extends SignUpScreensProps {
    currentStep: number;
}

function SignupStatus({ handleScreenChange, currentStep } : SignupStatusProps) {
    const { appliedTheme } = useTheme();
    const steps = [
        {
            idx: 0,
            text: "Step1. Create your account",
            time: 0
        },
        {
            idx: 2,
            text: "Step2. Phone Number",
            time: 1
        },
        {
            idx: 4,
            text: "Step3. Verify your identity",
            time: 5
        }
    ]

    return (
    <Box className='flex-1'>
        <Box>
            <IM_PhoneHand className='h-[300px] -mt-3'/>
        </Box>
        <Box className='flex-1 justify-between'>
            <Box>
                {/* Titles */}
                <Text className='text-3xl mb-6 text-black font-bold text-center'>Let's secure your account</Text>
                {/* Steps Content */}
                <Box className='gap-3'>
                    {steps.map(step =>
                    <Box key={step.idx} className='flex-row justify-between'>
                        <Text className={step.idx === currentStep ? `text-link-${appliedTheme} font-bold` : `text-gray-${appliedTheme} font-semibold`}>
                            {step.text}
                        </Text>
                        {step.idx < currentStep ?
                            <IC_GreenVi className='w-5 h-5'/> :
                            <Text className={step.idx === currentStep ? `text-link-${appliedTheme} font-bold` : `text-gray-${appliedTheme} font-semibold`}>
                                {step.time} min
                            </Text>}
                    </Box>
                    )}
                </Box>
            </Box>
            {/* Buttons */}
            <Box className='gap-3'>
                <Button variant={`rounded-solid-${appliedTheme}`}  className="h-fit"
                onPress={() => handleScreenChange(currentStep+1)}
                >
                    <ButtonText className="text-white">
                        Next
                    </ButtonText>
                </Button>
            </Box>
        </Box>
    </Box>
    )
}

export default SignupStatus
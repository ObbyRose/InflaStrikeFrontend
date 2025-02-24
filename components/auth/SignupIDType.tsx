import React, { useState } from 'react'
import { Box } from '../ui/box'
import { Text } from '../ui/text'
import { useFormInput } from '@/hooks/useFormInput'
import { SignUpScreensProps } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { validateAndConvertBirthday } from '@/utils/functions/help'
import { Card } from '../ui/card'
import OutlinedCard from '../OutlinedCard'

function SignupIDType({ handleScreenChange }: SignUpScreensProps) {
    const { appliedTheme } = useTheme();

    return (
    <Box className='flex-1 justify-between'>
        {/* Title */}
        <Box className='mb-10 gap-2'>
            <Text className='text-4xl text-black font-bold mb-5'>Personal information</Text>
            {/* background: #F2F2F7; */}
            <OutlinedCard >
                <Text>ID Card</Text>
            </OutlinedCard>

            <Text className={`text-gray-${appliedTheme} text-[12px]`}>
            Your photo ID and actions captured during the ID verification process may constitute biometric data. Please see our Privacy Policy for more information about how we store and use your biometric data.
            </Text>
            
        </Box>
    </Box>
    )
}

export default SignupIDType;